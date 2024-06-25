import { Request, Response } from 'express';
import { ListProfessionalsUseCase } from './list-professionals-use-case';

class ListProfessionalsController {
  constructor(
    private listProfessionalsUseCase: ListProfessionalsUseCase,
  ) {}

  async handler(req: Request, res: Response) {
    const professionals = await this.listProfessionalsUseCase.execute();

    return res.json(professionals);
  }
}

export { ListProfessionalsController };
