import { z } from 'zod';

const createProfessionalSchemaValidator = z.object({
  name: z.string({
    required_error: 'O campo "name" deve ser fornecido.',
    invalid_type_error: 'O campo "name" deve ser uma string.',
  }),
  email: z.string({
    required_error: 'O campo "email" deve ser fornecido.',
    invalid_type_error: 'O campo "email" deve ser uma string.',
  }).email(),
  password: z.string({
    required_error: 'O campo "password" deve ser fornecido.',
    invalid_type_error: 'O campo "password" deve ser uma string.',
  }),
  specialtyID: z.number({
    required_error: 'O campo "specialtyID" deve ser fornecido.',
    invalid_type_error: 'O campo "specialtyID" deve ser um inteiro.',
  })
});

export { createProfessionalSchemaValidator };
