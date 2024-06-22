import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../@types/errors/api-error';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function errorMiddleware(err: Error & Partial<ApiError>, req: Request, res: Response, next: NextFunction) {
  const statusCode = err.statusCode ?? 500;
  const message = err.statusCode ? err.message : 'Ops! Ocorreu um erro interno no servidor!';
  const internalCode = err.statusCode ? err.internalCode : 9999;

  console.log(err);

  res.status(statusCode).json({
    message,
    statusCode,
    internalCode
  });
}

export { errorMiddleware };
