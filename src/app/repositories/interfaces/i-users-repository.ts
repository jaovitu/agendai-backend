import { User } from '../../database/mysql/models/User';
import { CreateUserDTO } from '../../use-cases/create-user/create-user-dto';

interface IUsersRepository {
  create(user: CreateUserDTO): Promise<User | null>
  findUserByEmail(email: string): Promise<User | null>
}

export { IUsersRepository };
