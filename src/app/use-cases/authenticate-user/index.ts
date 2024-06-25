import { UsersRepository } from '../../repositories/implementations/users-repository';
import { AuthenticateUserController } from './authenticate-user-controller';
import { AuthenticateUserUseCase } from './authenticate-user-use-case';

const usersRepository = new UsersRepository();
const authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository);
const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase);

export { authenticateUserController };
