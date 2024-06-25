import { Professional } from '../../database/mysql/models/Professional';
import { CreateProfessionalDTO } from '../../use-cases/create-professional/create-professional-dto';

interface IProfessionalsRepository {
  create(professional: CreateProfessionalDTO): Promise<Professional | null>
}

export { IProfessionalsRepository };
