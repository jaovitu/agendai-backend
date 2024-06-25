import { z } from 'zod';

const authenticateUserSchemaValidator = z.object({
  email: z.string({
    required_error: 'O campo "email" deve ser fornecido.',
    invalid_type_error: 'O campo "email" deve ser uma string.',
  }).email(),

  password: z.string({
    required_error: 'O campo "password" deve ser fornecido.',
    invalid_type_error: 'O campo "password" deve ser uma string.',
  })
});

export { authenticateUserSchemaValidator };
