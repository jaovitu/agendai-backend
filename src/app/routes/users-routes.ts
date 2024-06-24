import { Request, Response, Router } from 'express';
import { createUserController } from '../use-cases/create-user';

const usersRoutes = Router();

usersRoutes.post('/users/create', (request: Request, response: Response) => {
  return createUserController.handler(request, response);
});

export { usersRoutes };
