import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id as string);
    if (user.admin === true) {
      const users = this.usersRepository.list();
      return users;
    }
    throw new Error("Not authorization");
  }
}

export { ListAllUsersUseCase };
