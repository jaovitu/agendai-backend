import { Request, Response } from 'express';
import { CreateUserUseCase } from './create-user-use-case';
import { createUsersSchemaValidator } from './create-user-schema';
import { SchemaValidationError } from '../../@types/errors/schema-validation-error';

class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
  ) {}

  async handler(req: Request, res: Response) {
    const createUserPayload = await createUsersSchemaValidator.parseAsync(req.body).catch(err => {
      throw new SchemaValidationError(err.errors[0].message);
    });

    const createdUser = await this.createUserUseCase.execute(createUserPayload);

    return res.json(createdUser);
  }
}

export { CreateUserController };
