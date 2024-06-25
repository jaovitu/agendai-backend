import { EmailAlreadyInUseError } from '../../@types/errors/email-already-in-use-error';
import { ProfessionalsRepository } from '../../repositories/implementations/professionals-repository';
import { IUsersRepository } from '../../repositories/interfaces/i-users-repository';
import { CreateProfessionalDTO } from './create-professional-dto';
import bcrypt from 'bcrypt';

class CreateProfessionalUseCase {
  constructor(
    private professionalsRepository: ProfessionalsRepository,
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: CreateProfessionalDTO) {
    const isEmailAlreadyInUse = await this.usersRepository.findUserByEmail(data.email);

    if (isEmailAlreadyInUse) {
      throw new EmailAlreadyInUseError('Este email já se encontra em uso.');
    }

    const passwordSalt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, passwordSalt);
    data.password = hashedPassword;

    const createdProfessional = await this.professionalsRepository.create(data);

    return createdProfessional;
  }
}

export { CreateProfessionalUseCase };
