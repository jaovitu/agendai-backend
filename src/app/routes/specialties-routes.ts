import { Request, Response, Router } from 'express';
import { createSpecialtyController } from '../use-cases/create-specialty';
import { listSpecialtiesController } from '../use-cases/list-specialties';

const specialtiesRoutes = Router();

specialtiesRoutes.get('/specialties', (request: Request, response: Response) => {
  return listSpecialtiesController.handler(request, response);
});

specialtiesRoutes.post('/specialties/create', (request: Request, response: Response) => {
  return createSpecialtyController.handler(request, response);
});

export { specialtiesRoutes };
