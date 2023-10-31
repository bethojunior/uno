import prismaClient from "../../prisma";
import express, { Request } from "express";
import bcrypt from "bcrypt";

class UserRepository {
  async store(req: Request): Promise<any> {
    try {

      // const isUnique = await prismaClient.user.findUnique({
      //   where: {
      //     email: req.email,
      //   },
      // });

      // if(isUnique !== null)
      //   throw "Email already has registration"

      const hashedPassword = await bcrypt.hash(req.password, 10);
      const user = await prismaClient.user.create({
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
  }
}

export default UserRepository;

