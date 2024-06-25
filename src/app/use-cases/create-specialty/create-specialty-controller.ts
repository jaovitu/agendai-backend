import { Request, Response } from 'express';
import { CreateSpecialtyUseCase } from './create-specialty-use-case';
import { createdSpecialtySchemaValidator } from './create-specialty-schema';
import { SchemaValidationError } from '../../@types/errors/schema-validation-error';

class CreateSpecialtyController {
  constructor(
    private createSpecialtyUseCase: CreateSpecialtyUseCase,
  ) {}

  async handler(req: Request, res: Response) {
    const createdSpecialtyPayload = await createdSpecialtySchemaValidator.parseAsync(req.body).catch(err => {
      throw new SchemaValidationError(err.errors[0].message);
    });

    const createdSpecialty = await this.createSpecialtyUseCase.execute(createdSpecialtyPayload);

    return res.json(createdSpecialty);
  }
}

export { CreateSpecialtyController };
