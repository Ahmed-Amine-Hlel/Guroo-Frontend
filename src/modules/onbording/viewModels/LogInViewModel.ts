import { core } from "../../../configuration/Configuration";
import { User } from "../../../core/src/domain/entities/User";

export class LogInViewModel {
  async googleAuth(code: string): Promise<User> {
    try {
      const user = await core.googleAuth.execute({ code });
      return user;
    } catch (e) {
      throw e;
    }
  }
}
