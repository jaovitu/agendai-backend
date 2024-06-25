import { number, z } from 'zod';

const createScheduleSchemaValidator = z.object({
  date: z.string({
    required_error: 'O campo "date" deve ser fornecido.',
    invalid_type_error: 'O campo "date" deve ser uma data.',
  }),
  professionalID: number({
    required_error: 'O campo "professionalID" deve ser fornecido.',
    invalid_type_error: 'O campo "professionalID" deve ser um inteiro.',
  })
});

export { createScheduleSchemaValidator };
