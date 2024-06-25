import { IScheduleRepository } from '../../repositories/interfaces/i-schedules-repository';
import { CreateScheduleDTO } from './create-schedule-dto';

class CreateScheduleUseCase {
  constructor(
    private schedulesRepository: IScheduleRepository,
  ) {}

  async execute(data: CreateScheduleDTO) {
    const createdSchedule = await this.schedulesRepository.create(data);

    return createdSchedule;
  }
}

export { CreateScheduleUseCase };
