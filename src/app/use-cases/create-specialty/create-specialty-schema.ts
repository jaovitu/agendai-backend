import { z } from 'zod';

const createdSpecialtySchemaValidator = z.object({
  name: z.string({
    required_error: 'O campo "name" deve ser fornecido.',
    invalid_type_error: 'O campo "name" deve ser uma string.',
  })
});

export { createdSpecialtySchemaValidator };
