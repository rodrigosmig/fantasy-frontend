import {
	Flex,
	Stack,
	useColorModeValue
} from "@chakra-ui/react";
import { yupResolver } from '@hookform/resolvers/yup';
import { unwrapResult } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { Button } from "elements/Button";
import { Input } from "elements/Input";
import { Link } from "elements/Link";
import { useDispatch } from "hooks/useDispatch";
import Router from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "store/thunks/authThunk";
import { Login, LoginError, LoginErrorFields } from "types/auth";
import { notify } from "utils/helpers";
import { loginValidation } from "validations/auth";

export const LoginForm = () => {
	const dispatch = useDispatch();
  
	const [isSubimited, setIsSubimited] = useState(false);

  const { register, handleSubmit, setError, formState } = useForm<Login>({
    resolver: yupResolver(loginValidation)
  });

  const { errors } = formState;

	const onSubmit = handleSubmit(async values => {
		try {
			await dispatch(signIn(values))
				.unwrap();

			setIsSubimited(true);

			Router.push('/home')
		} catch (ex) {
			const err = ex as AxiosError

      if (err.response?.status === 401) {
        const error = err.response.data as LoginError;
        return notify(error.message, 'error');
      }

      if (err.response?.status === 422) {
        const data = err.response.data as LoginErrorFields;
     
        for (const error of data) {
          setError(error.field, {message: error.error})
        }
        return;
      }
      return notify("Ocorreu um erro no servidor.", 'error');
		}
  })

	return (
		<Flex
			as="form"
			w={['100%']}
			maxW={[340, 340, 360]}
			flexDir={["column"]}
			bg={useColorModeValue('white', 'gray.800')}
			p={[8]}
			borderRadius={[8]}
			onSubmit={onSubmit}
		>       
			<Stack spacing={[4]}>
				<Input 
					inputName='email'
					label='E-mail'
					error={errors.email}
					{...register('email')}
				/>

				<Input
					inputName='password'
					type='password'
					label='Senha'
					error={errors.senha}
					{...register('senha')}
				/>
			</Stack>

			<Button
				type="submit"
				label="Entrar"
				mt={[6]}
				bg="pink.500"
				_hover={{ bg: "pink.600" }}
				_active={{
					bg: "pink.400",
					transform: "scale(0.98)",
				}}
				isLoading={formState.isSubmitting || isSubimited}
				isDisabled={formState.isSubmitting || isSubimited}
			/>

			<Flex 
				direction={"column"}
				mt={8}
			>
				<Link
					passHref
					href="/auth/forgot-password"
					_hover={{
						color: "pink.500"
					}}
				>
						Esqueci minha senha
				</Link>

				<Link
					passHref
					href="/register"
					_hover={{
						color: "pink.500"
					}}
				>
						Cadastrar novo usuário
				</Link>
			</Flex>
		</Flex>
	)
}