import { Request, Response, Router } from 'express';
import { createSpecialtyController } from '../use-cases/create-specialty';

const specialtiesRoutes = Router();

specialtiesRoutes.post('/specialties/create', (request: Request, response: Response) => {
  return createSpecialtyController.handler(request, response);
});

export { specialtiesRoutes };
