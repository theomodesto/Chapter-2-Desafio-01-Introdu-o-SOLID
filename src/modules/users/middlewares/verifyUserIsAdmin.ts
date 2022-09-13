import { Request, Response, NextFunction } from "express";

import { UsersRepository } from "../repositories/implementations/UsersRepository";

function verifyIfUserIsAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const usersRepository = UsersRepository.getInstance();

  const { user_id } = request.headers;

  const user = usersRepository.findById(user_id as string);
  if (user.admin) {
    next();
  }
  return response.status(404).json({ error: "Not authorization" });
}

export { verifyIfUserIsAdmin };
