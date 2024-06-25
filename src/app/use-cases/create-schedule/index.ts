import { SchedulesRepository } from '../../repositories/implementations/schedules-repository';
import { CreateScheduleController } from './create-schedule-controller';
import { CreateScheduleUseCase } from './create-schedule-use-case';

const schedulesRepository = new SchedulesRepository();
const createScheduleUseCase = new CreateScheduleUseCase(schedulesRepository);
const createScheduleController = new CreateScheduleController(createScheduleUseCase);

export { createScheduleController };
