import { Professional } from '../../database/mysql/models/Professional';
import { CreateProfessionalDTO } from '../../use-cases/create-professional/create-professional-dto';
import { IProfessionalsRepository } from '../interfaces/i-professionals-repository';
import db from '../../database/mysql/models/index';
import { User } from '../../database/mysql/models/User';

class ProfessionalsRepository implements IProfessionalsRepository {
  async create(professional: CreateProfessionalDTO): Promise<Professional | null> {
    const transaction = await db.transaction();

    const createdUser = await User.create({
      name: professional.name,
      email: professional.email,
      password: professional.password,
      role: 'PROFESSIONAL',
      is_active: true
    }, { transaction });

    const createdProfessional = await Professional.create({
      userID: createdUser.id,
      specialtyID: professional.specialtyID
    }, { transaction });

    await transaction.commit();

    return createdProfessional;
  }
}

export { ProfessionalsRepository };
