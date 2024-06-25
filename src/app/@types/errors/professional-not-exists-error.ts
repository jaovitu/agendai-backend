import { ApiError } from './api-error';
import { internalErrosCode } from './internal-errors-codes';

class ProfessionalNotExistsError extends ApiError {
  constructor() {
    super('Não foi encontrado um professional para o ID especificado.', 400, internalErrosCode.professionalNotExistsError);
  }
}

export { ProfessionalNotExistsError };
