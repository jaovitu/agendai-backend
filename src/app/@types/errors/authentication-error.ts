import { ApiError } from './api-error';
import { internalErrosCode } from './internal-errors-codes';

class AuthenticationError extends ApiError {
  constructor() {
    super('Credenciais inválidas!', 401, internalErrosCode.authenticationError);
  }
}

export { AuthenticationError };
