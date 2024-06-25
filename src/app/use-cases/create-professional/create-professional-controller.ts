import { Request, Response } from 'express';
import { CreateProfessionalUseCase } from './create-professional-use-case';
import { createProfessionalSchemaValidator } from './create-professional-schema';
import { SchemaValidationError } from '../../@types/errors/schema-validation-error';

class CreateProfessionalController {
  constructor(
    private createProfessionalUseCase: CreateProfessionalUseCase,
  ) {}

  async handler(req: Request, res: Response) {
    const createProfessionalPayload = await createProfessionalSchemaValidator.parseAsync(req.body).catch(err => {
      throw new SchemaValidationError(err.errors[0].message);
    });

    const createdProfessional = await this.createProfessionalUseCase.execute(createProfessionalPayload);

    return res.json(createdProfessional);
  }
}

export { CreateProfessionalController };
