import { Router } from 'express';
import UserController from '../controllers/User.controller';
import { tokenMiddleware } from '../middlewares/token.middleware';

const UserRoute = Router();

UserRoute.route('/')
  .get(tokenMiddleware, UserController.readUsers)
  .post(UserController.createUser);

export default UserRoute;
