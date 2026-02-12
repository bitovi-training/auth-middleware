import { UserClaims } from '../models/user-claims.interface';

declare global {
  namespace Express {
    interface Request {
      user?: UserClaims;
    }
  }
}

export {};