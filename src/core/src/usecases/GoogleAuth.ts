import { UseCase } from "./UseCase";
import { User } from "../domain/entities/User";
import { AuthenticationService } from "../domain/adapters/AuthenticationService";

export interface GoogleAuthCommand {
  code: string;
}

export class GoogleAuth implements UseCase<GoogleAuthCommand, Promise<User>> {
  constructor(private authenticationService: AuthenticationService) {}

  async execute(request: GoogleAuthCommand): Promise<User> {
    const { code } = request;
    return await this.authenticationService.googleAuth(code);
  }
}
