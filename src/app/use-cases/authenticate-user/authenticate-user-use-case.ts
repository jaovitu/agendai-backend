import { AuthenticationError } from '../../@types/errors/authentication-error';
import { IUsersRepository } from '../../repositories/interfaces/i-users-repository';
import { AuthenticateUserDTO } from './authenticate-user-dto';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'dotenv/config';

const { JWT_SECRET } = process.env;

class AuthenticateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute(data: AuthenticateUserDTO) {
    const user = await this.usersRepository.findUserByEmail(data.email);

    if (!user) {
      throw new AuthenticationError();
    }

    const isPasswordCorrect = await bcrypt.compare(data.password, user.password);

    if (!isPasswordCorrect) {
      throw new AuthenticationError();
    }

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET as string);

    return { token };
  }
}

export { AuthenticateUserUseCase };
