import { User } from '../../database/mysql/models/User';
import { CreateUserDTO } from '../../use-cases/create-user/create-user-dto';
import { IUsersRepository } from '../interfaces/i-users-repository';

class UsersRepository implements IUsersRepository {
  async create(user: CreateUserDTO): Promise<User | null> {
    const createdUser = await User.create({
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
      is_active: true
    });

    return createdUser;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await User.findOne({
      where: { email: email },
    });

    return user;
  }
}

export { UsersRepository };
