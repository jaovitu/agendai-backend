import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../@types/errors/api-error';
import { customLOG } from '../utils/custom-log';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function errorMiddleware(err: Error & Partial<ApiError>, req: Request, res: Response, next: NextFunction) {
  const statusCode = err.statusCode ?? 500;
  const message = err.statusCode ? err.message : 'Ops! Ocorreu um erro interno no servidor!';
  const internalCode = err.statusCode ? err.internalCode : 9999;

  customLOG('ERROR HANDLER', err.message, 'error')

  res.status(statusCode).json({
    message,
    statusCode,
    internalCode
  });
}

export { errorMiddleware };
