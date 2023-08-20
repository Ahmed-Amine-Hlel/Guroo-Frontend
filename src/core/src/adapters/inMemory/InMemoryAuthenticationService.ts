import { AuthenticationService } from "../../domain/adapters/AuthenticationService";
import { User } from "../../domain/entities/User";
import { AuthenticationServiceError } from "../../domain/models/DomainError";

export class InMemoryAuthenticationService implements AuthenticationService {
  constructor(private userFixtures: User[]) {}
  googleAuth(token: string): Promise<User> {
    if (token.length > 0) {
      return Promise.resolve(this.userFixtures[0]);
    } else {
      throw new AuthenticationServiceError.GoogleAuthFailed(
        "Google_Auth_Failed"
      );
    }
  }
}
