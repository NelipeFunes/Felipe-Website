import { Router } from "express";
import UserController from "../controllers/User.controller";

const UserRoute = Router();

UserRoute.route('/')
  .get(UserController.readUsers);

export default UserRoute;