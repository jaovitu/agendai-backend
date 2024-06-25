import { usersRoles } from '../users/users-roles';

interface jwtTokenPayload {
  id: number,
  role: usersRoles
}

export { jwtTokenPayload };
