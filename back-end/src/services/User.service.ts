import { hash } from 'bcryptjs';
// import Joi from 'joi';
import User from '../database/models/User.model';

const UserService = {
  // validateBody(body) {
  //   const schema = Joi.object({
  //     name: Joi.string().required(),
  //     password: Joi.string().required().min(5),
  //     email: Joi.string().email().required(),

  //   })
  // },

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
