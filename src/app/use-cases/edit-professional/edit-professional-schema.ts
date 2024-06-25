import { z } from 'zod';

const editProfessionalSchemaValidator = z.object({
  id: z.number({
    required_error: 'O campo "id" deve ser fornecido.',
    invalid_type_error: 'O campo "id" deve ser uma string.',
  }),
  name: z.string({
    required_error: 'O campo "name" deve ser fornecido.',
    invalid_type_error: 'O campo "name" deve ser uma string.',
  }),
  email: z.string({
    required_error: 'O campo "email" deve ser fornecido.',
    invalid_type_error: 'O campo "email" deve ser uma string.',
  }).email(),
  specialtyID: z.number({
    required_error: 'O campo "specialtyID" deve ser fornecido.',
    invalid_type_error: 'O campo "specialtyID" deve ser um inteiro.',
  })
});

export { editProfessionalSchemaValidator };
