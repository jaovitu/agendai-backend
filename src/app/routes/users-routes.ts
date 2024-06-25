import { Request, Response, Router } from 'express';
import { createUserController } from '../use-cases/create-user';
import { authenticateUserController } from '../use-cases/authenticate-user';

const usersRoutes = Router();

usersRoutes.post('/users/create', (request: Request, response: Response) => {
  return createUserController.handler(request, response);
});

usersRoutes.post('/users/authenticate', (request: Request, response: Response) => {
  return authenticateUserController.handler(request, response);
});

export { usersRoutes };
