import { Request, Response } from 'express';
import httpStatus from 'http-status';
import Token from '../utils/token';
import { IReqUser } from '../interfaces/Request.interface';
import UserService from '../services/User.service';

const UserController = {

  async createUser(req: Request, res: Response) {
    await UserService.validateBody(req.body);
    const users = await UserService.createUser(req.body);
    const token = Token.makeToken(users);
    return res.status(httpStatus.CREATED).json({ token });
  },

  async readUsers(_req: IReqUser, res: Response) {
    const users = await UserService.readUsers();
    return res.status(httpStatus.OK).json(users);
  },

  async logIn(req:Request, res: Response) {
    const user = await UserService.logIn(req.body);
    const token = Token.makeToken(user);
    return res.status(httpStatus.OK).json({ token });
  },
};
export default UserController;
