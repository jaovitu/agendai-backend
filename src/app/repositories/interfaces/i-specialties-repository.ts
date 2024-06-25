import { Specialty } from '../../database/mysql/models/Specialty';
import { CreateSpecialtyDTO } from '../../use-cases/create-specialty/create-specialty-dto';

interface ISpecialtiesRepository {
  create(specialty: CreateSpecialtyDTO): Promise<Specialty | null>
}

export { ISpecialtiesRepository };
