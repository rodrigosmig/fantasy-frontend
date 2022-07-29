import { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { ILogin, ILoginError, LoginErrorFields } from "../../types/auth";
import { InputField } from "../molecules/InputField";
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidation } from "../../validations/auth";
import { Link } from "../molecules/Link";
import { Button } from "../atoms/Button";
import { useSession } from "../../contexts/AuthContext";
import { notify } from "../../utils/helpers";
import { AxiosError } from "axios";

export const LoginForm = () => {
  const { signIn } = useSession();
  const [isSubimited, setIsSubimited] = useState(false);

  const { register, handleSubmit, setError, formState } = useForm<ILogin>({
    resolver: yupResolver(loginValidation)
  });

  const { errors } = formState;  

  const onSubmit = handleSubmit(async values => {
    try {
      await signIn(values);
      setIsSubimited(true);
    } catch (ex) {
      const err = ex as AxiosError

      if (err.response?.status === 401) {
        const error = err.response.data as ILoginError;
        return notify(error.message, 'error');
      }

      if (err.response?.status === 422) {
        const data = err.response.data as LoginErrorFields;
     
        for (const error of data) {
          setError(error.field, {message: error.error})
        }        
      }
    }    
  })

  return (
    <Content>
      <Form onSubmit={onSubmit}>
        <Item>
          <InputField
            inputName="email"
            label="E-mail"
            type="email"
            error={errors.email}
            {...register('email')}
          />
        </Item>

        <Item>
          <InputField
            label="Senha"
            inputName="password"
            type="password"
            error={errors.password}
            {...register('password')}
          />
        </Item>

        <ItemButton>
          <Button
            type="submit"
            label="Entrar"
            disabled={formState.isSubmitting || isSubimited}
            isLoading={formState.isSubmitting || isSubimited}
          />
        </ItemButton>
      </Form>

      <NewUser>
        <Link href="/register" passHref>
          Cadastrar novo usuário
        </Link>
      </NewUser>   
    </Content>
  )
}

const Content = styled.div`
  width: 21.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--gray-800);
  border-radius: 10px;
  box-shadow: 0 10px 15px rgba(0,0,0,0.2);
`;

const Form = styled.form`
  width: 85%;
  margin-top: 2rem;
`;

const Item = styled.div`
  margin-bottom: 1.25rem;
`;

const ItemButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const NewUser = styled.p`
  margin-top: 2rem;
  margin-bottom: 2rem;
  align-self: flex-start;
  margin-left: 1.75rem;

  &:hover {
    color: var(--pink);
  }
`;
