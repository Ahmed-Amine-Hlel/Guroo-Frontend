import { AuthenticationService } from "../../domain/adapters/AuthenticationService";
import { User } from "../../domain/entities/User";
import { AuthenticationServiceError } from "../../domain/models/DomainError";
import { UserMapper } from "./mappers/UserMapper";
import api from "../../domain/adapters/api";

export class GurooAuthenticationService implements AuthenticationService {
  constructor(private userMapper: UserMapper) {}

  async googleAuth(code: string): Promise<User> {
    try {
      console.log("code from GurooAuthenticationService ", code);
      const response = await api.post("/user/auth/google", { code: code });
      console.log("response:", this.userMapper.toDomain(response.data));
      return this.userMapper.toDomain(response.data);
    } catch (error) {
      console.error("Error during Google authentication:", error);
      throw new AuthenticationServiceError.GoogleAuthFailed(
        "Google_Auth_Failed"
      );
    }
  }
}
