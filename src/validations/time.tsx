import * as yup from 'yup';

export const changeTeamValidation = yup.object().shape({
  formacao: yup.number().integer("Formação inválida").typeError("O campo formação é inválido"),
  nomeTime: yup.string().required("O campo nome do time é obrigatório").min(5, "O campo nome do time deve ter no mínimo 5 caracteres"),
});