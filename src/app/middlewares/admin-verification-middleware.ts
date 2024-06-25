import { NextFunction, Request, Response } from 'express';
import { jwtTokenPayload } from '../@types/authentication/jwt-token-payload';
import { AuthorizationError } from '../@types/errors/authorization-error';

function adminVerificationMiddleware(request: Request, response: Response, next: NextFunction) {
  const { role } = request.user as jwtTokenPayload;

  if (role !== 'ADMIN') {
    throw new AuthorizationError('Permissão de ADMIN necessária para executar esta ação.');
  }
  next();
}

export { adminVerificationMiddleware };
