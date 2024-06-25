import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { InvalidTokenError } from '../@types/errors/invalid-token-error';
import { jwtTokenPayload } from '../@types/authentication/jwt-token-payload';
import { customLOG } from '../utils/custom-log';

const { JWT_SECRET } = process.env;

function authMiddleware(request: Request, response: Response, next: NextFunction) {
  const { authorization } = request.headers;
  const token = authorization && authorization.split(' ')[1];

  if (!token) {
    throw new InvalidTokenError('Token não informado.');
  }

  try {
    jwt.verify( token, JWT_SECRET as string );
    const tokenPayload = jwt.decode(token) as jwtTokenPayload;

    request.user = { id: tokenPayload.id, role: tokenPayload.role };
    customLOG('USER LOGIN', `Usuário autorizado com sucesso - ID: ${request.user.id} - Role: ${request.user.role}`, 'success');
    next();

  } catch (err) {
    throw new InvalidTokenError('Token inválido.');
  }

}

export { authMiddleware };
