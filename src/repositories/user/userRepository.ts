import { PrismaClient } from "@prisma/client";
import express, { Request } from "express";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
class UserRepository {
  async store(req: Request): Promise<any> {
    try {
      const hashedPassword = await bcrypt.hash(req.password, 10);
      const user = await prisma.user.create({
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
