import { UsersRepository } from '../../repositories/implementations/users-repository';
import { CreateUserController } from './create-user-controller';
import { CreateUserUseCase } from './create-user-use-case';

const usersRepository = new UsersRepository();
const createUserUseCase = new CreateUserUseCase(usersRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
