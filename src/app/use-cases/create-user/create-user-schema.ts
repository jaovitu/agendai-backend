import { z } from 'zod';
import { usersRoles } from '../../@types/users/users-roles';

const createUsersSchemaValidator = z.object({
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
  role: z.enum(Object.values(usersRoles) as [usersRoles.ADMIN, usersRoles.PATIENT, usersRoles.PROFESSIONAL], {
    required_error: 'O campo "role" deve ser fornecido.'
  })
});

export { createUsersSchemaValidator };
