import { Professional } from '../../database/mysql/models/Professional';
import { CreateProfessionalDTO } from '../../use-cases/create-professional/create-professional-dto';
import { EditProfessionalDTO } from '../../use-cases/edit-professional/edit-professional-dto';

interface IProfessionalsRepository {
  findAll(): Promise<Professional[] | null>
  findByID(id: number): Promise<Professional | null>
  create(professional: CreateProfessionalDTO): Promise<Professional | null>
  edit(professional: EditProfessionalDTO): Promise<Professional | null>
}

export { IProfessionalsRepository };
