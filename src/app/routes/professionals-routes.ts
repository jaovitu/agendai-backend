import { Request, Response, Router } from 'express';
import { createProfessionalController } from '../use-cases/create-professional';
import { authMiddleware } from '../middlewares/auth-middleware';
import { adminVerificationMiddleware } from '../middlewares/admin-verification-middleware';

const professionalsRoutes = Router();

professionalsRoutes.post('/professionals/create', authMiddleware, adminVerificationMiddleware, (request: Request, response: Response) => {
  return createProfessionalController.handler(request, response);
});

export { professionalsRoutes };
