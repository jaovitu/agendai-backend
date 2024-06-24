import { ApiError } from './api-error';
import { internalErrosCode } from './internal-errors-codes';

class EmailAlreadyInUseError extends ApiError {
  constructor(message: string) {
    super(message, 409, internalErrosCode.emailAlreadyInUseError);
  }
}

export { EmailAlreadyInUseError };
