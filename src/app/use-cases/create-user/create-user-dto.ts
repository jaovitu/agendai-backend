import { usersRoles } from '../../@types/users/users-roles';

interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  role: usersRoles
}

export { CreateUserDTO };
