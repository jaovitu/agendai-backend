import { EmailAlreadyInUseError } from '../../@types/errors/email-already-in-use-error';
import { ProfessionalNotExistsError } from '../../@types/errors/professional-not-exists-error';
import { IProfessionalsRepository } from '../../repositories/interfaces/i-professionals-repository';
import { IUsersRepository } from '../../repositories/interfaces/i-users-repository';
import { EditProfessionalDTO } from './edit-professional-dto';

class EditProfessionalUseCase {
  constructor(
    private professionalsRepository: IProfessionalsRepository,
    private usersRepository: IUsersRepository,
  ) {}

  async execute(data: EditProfessionalDTO) {
    const professionalExists = await this.professionalsRepository.findByID(data.id);

    if (!professionalExists) {
      throw new ProfessionalNotExistsError();
    }

    const isNewEmailInUseByAnotherUser = await this.usersRepository.findUserByEmail(data.email);

    if (isNewEmailInUseByAnotherUser && ( isNewEmailInUseByAnotherUser.id !== professionalExists.userID )) {
      throw new EmailAlreadyInUseError('Este email já se encontra em uso.');
    }

    const updatedProfessional = this.professionalsRepository.edit(data);

    return updatedProfessional;
  }
}

export { EditProfessionalUseCase };
