import { ApiError } from './api-error';
import { internalErrosCode } from './internal-errors-codes';

class SchemaValidationError extends ApiError {
  constructor(message: string) {
    super(message, 400, internalErrosCode.schemaValidationError);
  }
}

export { SchemaValidationError };
