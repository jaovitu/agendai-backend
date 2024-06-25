import { Request, Response } from 'express';
import { AuthenticateUserUseCase } from './authenticate-user-use-case';
import { authenticateUserSchemaValidator } from './authenticate-user-schema';
import { SchemaValidationError } from '../../@types/errors/schema-validation-error';

class AuthenticateUserController {
  constructor(
    private authenticateUserUseCase: AuthenticateUserUseCase,
  ) {}

  async handler(req: Request, res: Response) {
    const authenticateUserPayload = await authenticateUserSchemaValidator.parseAsync(req.body).catch(err => {
      throw new SchemaValidationError(err.errors[0].message);
    });

    const token = await this.authenticateUserUseCase.execute(authenticateUserPayload);

    return res.json(token);
  }
}

export { AuthenticateUserController };
