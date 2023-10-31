import { User } from "@prisma/client";
import prismaClient from "../../prisma";
import bcrypt from "bcrypt";

class UserRepository {
  async store(req: Request): Promise<User | Error> {
    let user;
    try {
      const isUnique = await prismaClient.user.findFirst({
        where: {
          email: req.email,
        },
      });

      if (isUnique !== null) throw new Error("Email already has registration");

      const hashedPassword = await bcrypt.hash(req.password, 10);

      user = await prismaClient.user.create({
        data: {
          name: req.name,
          email: req.email,
          password: hashedPassword,
        },
      });
      return user;
    } catch (error) {
      throw error;
    }

    return user;
  }

  async update(id: BigInteger, req: Request): Promise<User | Error> {
    let user;
    try {
      user = await prismaClient.user.update({
        where: { id: id },
        data: { req },
      });
    } catch (error) {
      return error;
    }
    return user;
  }
}

export default UserRepository;
