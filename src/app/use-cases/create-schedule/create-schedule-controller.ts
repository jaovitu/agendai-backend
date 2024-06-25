import { Request, Response } from 'express';
import { CreateScheduleUseCase } from './create-schedule-use-case';
import { createScheduleSchemaValidator } from './create-schedule-schema';
import { SchemaValidationError } from '../../@types/errors/schema-validation-error';

class CreateScheduleController {
  constructor(
    private createScheduleUseCase: CreateScheduleUseCase,
  ) {}

  async handler(req: Request, res: Response) {
    const createdSchedulePayload = await createScheduleSchemaValidator.parseAsync(req.body).catch(err => {
      throw new SchemaValidationError(err.errors[0].message);
    });

    const createdSchedule = await this.createScheduleUseCase.execute(createdSchedulePayload);

    return res.json(createdSchedule);
  }
}

export { CreateScheduleController };
