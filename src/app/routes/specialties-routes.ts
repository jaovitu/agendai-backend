import { Request, Response, Router } from 'express';
import { createSpecialtyController } from '../use-cases/create-specialty';
import { listSpecialtiesController } from '../use-cases/list-specialties';
import { authMiddleware } from '../middlewares/auth-middleware';
import { adminVerificationMiddleware } from '../middlewares/admin-verification-middleware';

const specialtiesRoutes = Router();

specialtiesRoutes.get('/specialties', authMiddleware, (request: Request, response: Response) => {
  return listSpecialtiesController.handler(request, response);
});

specialtiesRoutes.post('/specialties/create', authMiddleware, adminVerificationMiddleware, (request: Request, response: Response) => {
  return createSpecialtyController.handler(request, response);
});

export { specialtiesRoutes };
