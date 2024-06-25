import { Schedule } from '../../database/mysql/models/Schedule';
import { CreateScheduleDTO } from '../../use-cases/create-schedule/create-schedule-dto';
import { IScheduleRepository } from '../interfaces/i-schedules-repository';

class SchedulesRepository implements IScheduleRepository {
  async findAll(): Promise<Schedule[] | null> {
    const schedules = Schedule.findAll({});

    return schedules;
  }

  async create(schedule: CreateScheduleDTO): Promise<Schedule | null> {
    const createdSchedule = await Schedule.create({
      date: schedule.date,
      professionalID: schedule.professionalID,
    });

    return createdSchedule;
  }
}

export { SchedulesRepository };
