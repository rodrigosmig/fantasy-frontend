import styled from "styled-components";
import { useForm } from "react-hook-form";
import { IRegister } from "../../types/auth";
import { InputField } from "../molecules/InputField";
import { yupResolver } from '@hookform/resolvers/yup';
import { registerValidation } from "../../validations/auth";
import { Link } from "../molecules/Link";
import { Button } from "../atoms/Button";

export const RegisterForm = () => {
  const { register, handleSubmit, formState } = useForm<IRegister>({
    resolver: yupResolver(registerValidation)
  });
  const { errors } = formState;

  const onSubmit = handleSubmit(values => {
    console.log(values)
  })

  return (
    <Content>
      <Form onSubmit={onSubmit}>
        <Item>
          <InputField 
            label="Nome"
            inputName="name"
            type="text"
            error={errors.name}
            {...register('name')}
          />
        </Item>

        <Item>
          <InputField 
            label="E-mail"
            inputName="email"
            type="email"
            error={errors.email}
            {...register('email')}
          />
        </Item>

        <Item>
          <InputField 
            label="Nome do Time"
            inputName="team_name"
            type="text"
            error={errors.team_name}
            {...register('team_name')}
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

        <Item>
          <InputField
            label="Confirmação de Senha"
            inputName="password_confirmation"
            type="password"
            error={errors.password_confirmation}
            {...register('password_confirmation')}
          />
        </Item>

        <ItemButton>
          <Button
            type="submit"
            label="Cadastrar"
            disabled={formState.isSubmitting}
            isLoading={formState.isSubmitting}
          />
        </ItemButton>
      </Form>

      <NewUser>
        <Link href="/" passHref>
          Fazer login
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