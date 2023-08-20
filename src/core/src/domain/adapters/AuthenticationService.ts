import { User } from "../entities/User";

export interface AuthenticationService {
  googleAuth(code: string): Promise<User>;
}
