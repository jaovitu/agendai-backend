import { ISpecialtiesRepository } from '../../repositories/interfaces/i-specialties-repository';
import { customLOG } from '../../utils/custom-log';
import { CreateSpecialtyDTO } from './create-specialty-dto';

class CreateSpecialtyUseCase {
  constructor(
    private specialtiesRepository: ISpecialtiesRepository,
  ) {}

  async execute(data: CreateSpecialtyDTO) {
    const createdSpecialty = await this.specialtiesRepository.create(data);
    customLOG('CREATE SPECIALTY', `Especialidade médica adicionada com sucesso - Nome: ${createdSpecialty?.name}`, 'success');

    return createdSpecialty;
  }
}

export { CreateSpecialtyUseCase };
