import { jwtTokenPayload } from './authentication/jwt-token-payload';

declare global {
  namespace Express {
    interface Request {
      user?: jwtTokenPayload;
    }
  }
}
