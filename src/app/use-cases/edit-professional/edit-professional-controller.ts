import { Request, Response } from 'express';
import { EditProfessionalUseCase } from './edit-professional-use-case';
import { editProfessionalSchemaValidator } from './edit-professional-schema';
import { SchemaValidationError } from '../../@types/errors/schema-validation-error';

class EditProfessionalController {
  constructor(
    private editProfessionalUseCase: EditProfessionalUseCase,
  ) {}

  async handler(req: Request, res: Response) {
    const editProfessionalPayload = await editProfessionalSchemaValidator.parseAsync(req.body).catch(err => {
      throw new SchemaValidationError(err.errors[0].message);
    });

    const updatedProfessional = await this.editProfessionalUseCase.execute(editProfessionalPayload);

    return res.json(updatedProfessional);
  }
}

export { EditProfessionalController };
