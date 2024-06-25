import { Request, Response, Router } from 'express';
import { createProfessionalController } from '../use-cases/create-professional';
import { authMiddleware } from '../middlewares/auth-middleware';
import { adminVerificationMiddleware } from '../middlewares/admin-verification-middleware';
import { editProfessionalController } from '../use-cases/edit-professional';
import { listProfessionalsController } from '../use-cases/list-professionals';

const professionalsRoutes = Router();

professionalsRoutes.get('/professionals', authMiddleware, (request: Request, response: Response) => {
  return listProfessionalsController.handler(request, response);
});

professionalsRoutes.post('/professionals/create', authMiddleware, adminVerificationMiddleware, (request: Request, response: Response) => {
  return createProfessionalController.handler(request, response);
});

professionalsRoutes.patch('/professionals/update', authMiddleware, adminVerificationMiddleware, (request: Request, response: Response) => {
  return editProfessionalController.handler(request, response);
});

export { professionalsRoutes };
