import { Request, Response } from 'express';
import { ListSchedulesUseCase } from './list-schedules-use-case';

class ListSchedulesController {
  constructor(
    private listScheduleUseCase: ListSchedulesUseCase,
  ) {}

  async handler(req: Request, res: Response) {
    const schedules = await this.listScheduleUseCase.execute();

    return res.json(schedules);
  }
}

export { ListSchedulesController };
