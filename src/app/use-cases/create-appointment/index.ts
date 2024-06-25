import { CreateAppointmentController } from './create-appointment-controller';
import { CreateAppointmentUseCase } from './create-appointment-use-case';

const createAppointmentUseCase = new CreateAppointmentUseCase();
const createAppointmentController = new CreateAppointmentController(createAppointmentUseCase);

export { createAppointmentController };
