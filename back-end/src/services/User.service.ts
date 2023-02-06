import { hash } from 'bcryptjs';
import User from '../database/models/User.model';

const UserService = {
  async createUser({ name, password, email, role, birthday, controller }: User): Promise<User> {
    const hashedPass = await hash(password, 10);
    const user = await User.create(
      { name, password: hashedPass, email, role, birthday, controller },
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
