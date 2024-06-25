import { ISpecialtiesRepository } from '../../repositories/interfaces/i-specialties-repository';

class ListSpecialtiesUseCase {
  constructor(
    private specialtiesRepository: ISpecialtiesRepository
  ) {}

  async execute() {
    const specialties = await this.specialtiesRepository.findAll();

    return specialties;
  }
}

export { ListSpecialtiesUseCase };
