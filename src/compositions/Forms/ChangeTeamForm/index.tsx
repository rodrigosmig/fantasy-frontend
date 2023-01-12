import {
  Box,
  Flex, Stack, useDisclosure
} from "@chakra-ui/react";
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from "axios";
import { Button } from "elements/Button";
import { useForm } from "react-hook-form";
import { Input } from "elements/Input";
import { TeamErrorFields, TeamFormData } from "types/team";
import { notify } from "utils/helpers";
import { changeTeamValidation } from "validations/time";
import { Loading } from "elements/Loading";
import { Alert } from "components/Alert";
import { Select } from "elements/Select";
import { useSelector } from "hooks/useSelector";
import { useDispatch } from "hooks/useDispatch";
import { changeTeam } from "store/thunks/teamThunk";

export const ChangeTeamForm = ({ onClose }: AlterarTimeFormProps) => {
  const { isOpen: isOpenDialog, onOpen: onOpenDialog, onClose: onCloseDialog } = useDisclosure();
  const { isLoading, formacoes } = useSelector(({appData}) => appData);
  const { team } = useSelector(({team}) => team);
  const dispatch = useDispatch();

  const { register, handleSubmit, setError, formState } = useForm<TeamFormData>({
    defaultValues: {
      nomeTime: team?.nome,
      formacaoId: team?.formacao.id,
    },
    resolver: yupResolver(changeTeamValidation)
  });

  const options = formacoes?.map(formacao => {
    return {
      value: formacao.id,
      label: formacao.nome
    }
  })

  const { errors } = formState;

  const onSubmit = handleSubmit(async values => {
    try {
      await dispatch(changeTeam(values))
				.unwrap();

      notify("Time alterado com sucesso");
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
            options={options}
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
            type="submit"
            label="Salvar"
            bg="pink.500"
            _hover={{ bg: "pink.600" }}
            _active={{
              bg: "pink.400",
              transform: "scale(0.98)",
            }}
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