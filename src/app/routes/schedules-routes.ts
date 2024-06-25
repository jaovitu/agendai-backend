import { Request, Response, Router } from 'express';
import { createScheduleController } from '../use-cases/create-schedule';
import { authMiddleware } from '../middlewares/auth-middleware';
import { adminVerificationMiddleware } from '../middlewares/admin-verification-middleware';
import { listSchedulesController } from '../use-cases/list-schedules';

const schedulesRoutes = Router();

schedulesRoutes.get('/schedules', (request: Request, response: Response) => {
  return listSchedulesController.handler(request, response);
});

schedulesRoutes.post('/schedules/create', authMiddleware, adminVerificationMiddleware, (request: Request, response: Response) => {
  return createScheduleController.handler(request, response);
});

export { schedulesRoutes };
