import { EmailAlreadyInUseError } from '../../@types/errors/email-already-in-use-error';
import { IUsersRepository } from '../../repositories/interfaces/i-users-repository';
import { customLOG } from '../../utils/custom-log';
import { CreateUserDTO } from './create-user-dto';
import bcrypt from 'bcrypt';

class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute(data: CreateUserDTO) {

    const isEmailAlreadyInUse = await this.usersRepository.findUserByEmail(data.email);

    if (isEmailAlreadyInUse) {
      throw new EmailAlreadyInUseError('Este email já se encontra em uso.');
    }

    const passwordSalt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, passwordSalt);
    data.password = hashedPassword;

    const createdUser = await this.usersRepository.create(data);
    customLOG('CREATE USER', `Usuário criado com sucesso - Email: ${createdUser?.email}`, 'success');

    return createdUser;
  }
}

export { CreateUserUseCase };
