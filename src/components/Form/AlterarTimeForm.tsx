import {
  Box,
  Button,
  Flex, Stack, useDisclosure
} from "@chakra-ui/react";
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { useFormacoes } from "../../hooks/useFormacoes";
import { useTime } from "../../hooks/useTime";
import { teamService } from "../../services/apiService/teamService";
import { AlterarTimeErrorFields, IAlterarTimeFormData } from "../../types/time";
import { notify } from "../../utils/helpers";
import { alteraTimeValidation } from "../../validations/time";
import { Alert } from "../Alert/Alert";
import { SubmitButton } from "../Button/SubmitButton";
import { Input } from "../Input/Input";
import { Loading } from "../Loading/Loading";
import { Select } from "../Select/Select";

export const AlterarTimeForm = ({ onClose }: AlterarTimeFormProps) => {
  const { isOpen: isOpenDialog, onOpen: onOpenDialog, onClose: onCloseDialog } = useDisclosure()

  const { data, isLoading } = useFormacoes();
  const { data: time, refetch: refetchTeam } = useTime()

  const { register, handleSubmit, setError, formState } = useForm<IAlterarTimeFormData>({
    defaultValues: {
      nomeTime: time?.nome,
      formacaoId: time?.formacao.id,
    },
    resolver: yupResolver(alteraTimeValidation)
  });

  const formacoes = data?.map(formacao => {
    return {
      value: formacao.id,
      label: formacao.nome
    }
  })

  const { errors } = formState;

  const onSubmit = handleSubmit(async values => {
    try {
      await teamService.changeTeam(values);

      notify("Time alterado com sucesso");
      refetchTeam();
      onClose();

    } catch (ex) {
      const err = ex as AxiosError

      if (err.response?.status === 422) {
        const data = err.response.data as AlterarTimeErrorFields;
     
        for (const error of data) {
          setError(error.field, {message: error.error})
        }
        return;
      }

      return notify("Ocorreu um erro no servidor.", 'error');
    }    
  })

  if (isLoading) {
    return <Loading />
  }

	return (
    <>
      <Alert 
        isOpen={isOpenDialog}
        onClose={onCloseDialog}
      />
      <Box
        as="form"
        onSubmit={onSubmit}
        >
        <Stack spacing={[4]}>
          <Input
            inputName='nomeTime'
            type='Text'
            label='Nome do Time'
            error={errors.nomeTime}
            {...register('nomeTime')}
          />

          <Select
            options={formacoes ? formacoes : []}
            inputName='formacao'
            label='Formação'
            error={errors.formacaoId}
            {...register('formacaoId', {onChange: onOpenDialog})}
          />
        </Stack>
        <Flex
          mt={[10]}
          justify="flex-end"
          align="center"
        >
          <Button
            mr={[4]}
            variant="outline"
            isDisabled={formState.isSubmitting}
            onClick={onClose}
          >
            Cancelar
          </Button>

          <SubmitButton
            label="Salvar"
            isLoading={formState.isSubmitting}
          />
        </Flex>
      </Box>
    
    </>
	)
}

interface AlterarTimeFormProps {
  onClose: () => void;
}