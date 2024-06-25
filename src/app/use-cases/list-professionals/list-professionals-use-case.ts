import { IProfessionalsRepository } from '../../repositories/interfaces/i-professionals-repository';

class ListProfessionalsUseCase {
  constructor(
    private professionalsRepository: IProfessionalsRepository,
  ) {}

  async execute() {
    const professionals = await this.professionalsRepository.findAll();

    return professionals;
  }
}

export { ListProfessionalsUseCase };
