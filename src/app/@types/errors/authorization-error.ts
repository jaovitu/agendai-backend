import { ApiError } from './api-error';
import { internalErrosCode } from './internal-errors-codes';

class AuthorizationError extends ApiError {
  constructor(message: string) {
    super(message, 403, internalErrosCode.authorizationError);
  }
}

export { AuthorizationError };
