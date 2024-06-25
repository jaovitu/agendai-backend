import { ApiError } from './api-error';
import { internalErrosCode } from './internal-errors-codes';

class InvalidTokenError extends ApiError {
  constructor(message: string) {
    super(message, 401, internalErrosCode.invalidTokenError);
  }
}

export { InvalidTokenError };
