import { compare, hash } from 'bcryptjs';
import httpStatus from 'http-status';
import Joi from 'joi';
import User from '../database/models/User.model';
import IUser from '../interfaces/User.interface';
import { ErrorHandler } from '../middlewares/error.middleware';

const UserService = {
  async validateBody(body: IUser) {
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

  async verifyUser(email: string, password: string) {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new ErrorHandler('User not found', httpStatus.NOT_FOUND);
    const check = await compare(password, user.password);
    if (!check) throw new ErrorHandler('Invalid Password', httpStatus.UNAUTHORIZED);
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

  // async updateUsers({ email, password }: IUser) {
  //   await this.verifyUser(email, password);
  //   await User.update({})
  // },

  // deleteUser() {

  // },
};

export default UserService;
