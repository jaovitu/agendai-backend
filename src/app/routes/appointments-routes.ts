import { Request, Response, Router } from 'express';
import { createAppointmentController } from '../use-cases/create-appointment';

const appointmentsRoutes = Router();

appointmentsRoutes.post('/appointments/create', (request: Request, response: Response) => {
  return createAppointmentController.handler(request, response);
});

export { appointmentsRoutes };
