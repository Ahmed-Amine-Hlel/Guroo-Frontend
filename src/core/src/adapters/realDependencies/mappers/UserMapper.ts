import { User } from "../../../domain/entities/User";
import { Mapper } from "../../../domain/models/Mappers";

export class UserMapper implements Mapper<User> {
  toDomain(raw: any): User {
    const { uid, email, name, givenName, familyName, picture, locale, token } =
      raw;
    return {
      uid,
      email,
      name,
      givenName,
      familyName,
      picture,
      locale,
      token,
    };
  }
}
