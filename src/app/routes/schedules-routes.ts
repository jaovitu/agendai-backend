import { Request, Response, Router } from 'express';
import { createScheduleController } from '../use-cases/create-schedule';
import { authMiddleware } from '../middlewares/auth-middleware';
import { adminVerificationMiddleware } from '../middlewares/admin-verification-middleware';

const schedulesRoutes = Router();

schedulesRoutes.post('/schedules/create', authMiddleware, adminVerificationMiddleware, (request: Request, response: Response) => {
  return createScheduleController.handler(request, response);
});

export { schedulesRoutes };
