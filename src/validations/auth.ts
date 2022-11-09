import * as yup from 'yup';

export const loginValidation = yup.object().shape({
  email: yup.string().required("O campo email é obrigatório").email("E-mail inválido"),
  senha: yup.string().required("O campo senha é obrigatório").min(8, "O campo senha deve ter no mínimo 8 caracteres"),
});

export const registerValidation = yup.object().shape({
  nome: yup.string().required("O campo nome é obrigatório").min(3, "O campo nome deve ter no mínimo 3 caracteres"),
  email: yup.string().required("O campo email é obrigatório").email("E-mail inválido"),
  nomeTime: yup.string().required("O campo time é obrigatório").min(3, "O campo time deve ter no mínimo 3 caracteres"),
  senha: yup.string().required("O campo senha é obrigatório").min(8, "O campo senha deve ter no mínimo 8 caracteres"),
  confirmacaoSenha: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
});