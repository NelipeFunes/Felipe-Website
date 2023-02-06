import User from '../database/models/User.model';

const UserService = {
  // createUser() {

  // },

  async readUsers(): Promise<User[]> {
    const users = await User.findAll();
    return users;
  },

  // updateUsers() {

  // },

  // deleteUser() {

  // },
};

export default UserService;
