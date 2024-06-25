import { Professional } from '../../database/mysql/models/Professional';
import { CreateProfessionalDTO } from '../../use-cases/create-professional/create-professional-dto';
import { IProfessionalsRepository } from '../interfaces/i-professionals-repository';
import db from '../../database/mysql/models/index';
import { User } from '../../database/mysql/models/User';
import { EditProfessionalDTO } from '../../use-cases/edit-professional/edit-professional-dto';
import { Specialty } from '../../database/mysql/models/Specialty';

class ProfessionalsRepository implements IProfessionalsRepository {
  async findAll(): Promise<Professional[] | null> {
    const professionals = await Professional.findAll({
      where: { isActive: true },

      include: [{
        model: Specialty,
        as: 'specialty',
        attributes: ['id', 'name']
      }]
    });

    return professionals;
  }

  async findByID(id: number): Promise<Professional | null> {
    const professional = await Professional.findByPk(id);

    return professional;
  }

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

  async edit(professional: EditProfessionalDTO): Promise<Professional | null> {
    const transaction = await db.transaction();

    const professionalToUpdate = await Professional.findByPk(professional.id);
    const userToUpdate = await User.findByPk(professionalToUpdate?.userID);

    await userToUpdate?.update({
      name: professional.name,
      email: professional.email
    }, { transaction });

    const updatedProfessional = await professionalToUpdate?.update({
      specialtyID: professional.specialtyID,
    }, { transaction });

    await transaction.commit();

    return updatedProfessional as Professional;
  }
}

export { ProfessionalsRepository };
