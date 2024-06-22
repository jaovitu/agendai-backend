import { ApiError } from './api-error';
import { internalErrosCode } from './internal-errors-codes';

class ValidationError extends ApiError {
  constructor(message: string) {
    super(message, 400, internalErrosCode.validationErrorCode);
  }
}

export { ValidationError };
