import express, { Request } from "express";

class UserRepository {
  store(params: Request): any {
    return params;
  }
}

export default UserRepository;
