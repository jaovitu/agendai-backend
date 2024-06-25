import { Request, Response } from 'express';
import { CreateAppointmentUseCase } from './create-appointment-use-case';
import { createAppointmentSchemaValidator } from './create-appointment-schema';
import { SchemaValidationError } from '../../@types/errors/schema-validation-error';

class CreateAppointmentController {
  constructor(
    private createAppointmentUseCase: CreateAppointmentUseCase,
  ) {}

  async handler(req: Request, res: Response) {
    const createAppointmentPayload = await createAppointmentSchemaValidator.parseAsync(req.body).catch(err => {
      throw new SchemaValidationError(err.errors[0].message);
    });

    const result = await this.createAppointmentUseCase.execute(createAppointmentPayload);

    return res.json(result);
  }
}

export { CreateAppointmentController };
