import { Schedule } from '../../database/mysql/models/Schedule';
import { CreateScheduleDTO } from '../../use-cases/create-schedule/create-schedule-dto';

interface IScheduleRepository {
  create(schedule: CreateScheduleDTO): Promise<Schedule | null>
}

export { IScheduleRepository };
