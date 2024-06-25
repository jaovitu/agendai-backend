import { Request, Response } from 'express';
import { ListSpecialtiesUseCase } from './list-specialties-use-case.';

class ListSpecialtiesController {
  constructor(
    private listSpecialtiesUseCase: ListSpecialtiesUseCase,
  ) {}

  async handler(req: Request, res: Response) {
    const specialties = await this.listSpecialtiesUseCase.execute();

    return res.json(specialties);
  }
}

export { ListSpecialtiesController };
