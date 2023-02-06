import { Request, Response } from 'express';
import httpStatus from 'http-status';
import UserService from '../services/User.service';

const UserController = {
  async readUsers(_req: Request, res: Response) {
    const users = await UserService.readUsers();
    return res.status(httpStatus.OK).json(users);
  },
};
export default UserController;
