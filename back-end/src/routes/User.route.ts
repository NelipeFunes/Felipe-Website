import { Router } from 'express';
import UserController from '../controllers/User.controller';
import { tokenMiddleware } from '../middlewares/token.middleware';

const UserRoute = Router();

UserRoute.route('/')
  .get(tokenMiddleware, UserController.readUsers);
UserRoute.route('/register')
  .post(UserController.createUser);
UserRoute.route('/login')
  .post(UserController.logIn);

export default UserRoute;
