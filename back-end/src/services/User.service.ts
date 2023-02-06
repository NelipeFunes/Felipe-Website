import { hash } from 'bcryptjs';
import httpStatus from 'http-status';
import Joi from 'joi';
import User from '../database/models/User.model';
import { ErrorHandler } from '../middlewares/error.middleware';
import { IPayload } from '../utils/token';

const UserService = {
  async validateBody(body: IPayload) {
    const schema = Joi.object({
      name: Joi.string().required(),
      password: Joi.string().required().min(5),
      email: Joi.string().email().required(),
      birthday: Joi.date().required(),
      controller: Joi.string().required().min(5),
    });

    const { error } = schema.validate(body);
    if (error) throw new ErrorHandler(error.message, httpStatus.BAD_REQUEST);
    const exists = await User.findOne({ where: { email: body.email } });
    if (exists) throw new ErrorHandler('Email already in use', httpStatus.UNAUTHORIZED);
  },

  async createUser(
    { name, password, email, driver, admin, birthday, controller }: User,
  ): Promise<User> {
    const hashedPass = await hash(password, 10);
    const user = await User.create(
      { name, password: hashedPass, email, driver, admin, birthday, controller },
    );
    return user;
  },

  async readUsers(): Promise<User[]> {
    const users = await User.findAll({
      attributes: {
        exclude: ['password'],
      },
    });
    return users;
  },

  // updateUsers() {

  // },

  // deleteUser() {

  // },
};

export default UserService;
