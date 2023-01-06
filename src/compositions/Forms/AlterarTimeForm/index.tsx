import {
  Box,
  Flex, Stack, useDisclosure
} from "@chakra-ui/react";
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from "axios";
import { Button } from "elements/Button";
import { useForm } from "react-hook-form";
import { Input } from "elements/Input";
import { useFormacoes } from "../../../hooks/useFormacoes";
import { useTeam } from "hooks/useTime";
import { teamService } from "services/apiService/teamService";
import { TeamErrorFields, TeamFormData } from "types/team";
import { notify } from "utils/helpers";
import { changeTeamValidation } from "validations/time";
import { Loading } from "elements/Loading";
import { Alert } from "components/Alert";
import { Select } from "elements/Select";

export const AlterarTimeForm = ({ onClose }: AlterarTimeFormProps) => {
  const { isOpen: isOpenDialog, onOpen: onOpenDialog, onClose: onCloseDialog } = useDisclosure()

  const { data, isLoading } = useFormacoes();
  const { data: time, refetch: refetchTeam } = useTeam()

  const { register, handleSubmit, setError, formState } = useForm<TeamFormData>({
    defaultValues: {
      nomeTime: time?.nome,
      formacaoId: time?.formacao.id,
    },
    resolver: yupResolver(changeTeamValidation)
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
        const data = err.response.data as TeamErrorFields;
     
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
            label="Cancelar"
            mr={[4]}
            variant="outline"
            isDisabled={formState.isSubmitting}
            onClick={onClose}
          />

          <Button
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