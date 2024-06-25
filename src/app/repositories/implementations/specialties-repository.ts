import { Specialty } from '../../database/mysql/models/Specialty';
import { CreateSpecialtyDTO } from '../../use-cases/create-specialty/create-specialty-dto';
import { ISpecialtiesRepository } from '../interfaces/i-specialties-repository';

class SpecialtiesRepository implements ISpecialtiesRepository {
  async create(specialty: CreateSpecialtyDTO): Promise<Specialty | null> {
    const createdSpecialty = await Specialty.create({
      name: specialty.name
    });

    return createdSpecialty;
  }

  async findAll(): Promise<Specialty[] | null> {
    const specialties = await Specialty.findAll({
      where: { isActive: true }
    });

    return specialties;
  }
}

export { SpecialtiesRepository };
