import { SchedulesRepository } from '../../repositories/implementations/schedules-repository';
import { ListSchedulesController } from './list-schedules-controller';
import { ListSchedulesUseCase } from './list-schedules-use-case';

const schedulesRepository = new SchedulesRepository();
const listScheduleUseCase = new ListSchedulesUseCase(schedulesRepository);
const listSchedulesController = new ListSchedulesController(listScheduleUseCase);

export { listSchedulesController };
