import { z } from 'zod';

const createAppointmentSchemaValidator = z.object({
  userID: z.number({
    required_error: 'O campo "userID" deve ser fornecido.',
    invalid_type_error: 'O campo "userID" deve ser um inteiro.',
  }),
  scheduleID: z.number({
    required_error: 'O campo "scheduleID" deve ser fornecido.',
    invalid_type_error: 'O campo "scheduleID" deve ser um inteiro.',
  })
});

export { createAppointmentSchemaValidator };
