import { IScheduleRepository } from '../../repositories/interfaces/i-schedules-repository';

class ListSchedulesUseCase {
  constructor(
    private schedulesRepository: IScheduleRepository,
  ) {}

  async execute() {
    const schedules = await this.schedulesRepository.findAll();

    return schedules;
  }
}

export { ListSchedulesUseCase };
