import { BOOLEAN } from 'sequelize';
import { Model, INTEGER, STRING, DATEONLY } from 'sequelize';
import db from '.';

class User extends Model {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
  admin!: boolean;
  birthday!: Date;
  controller!: string;
}

User.init(
  {
    id: {
      allowNull: false,
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      allowNull: false,
      type: STRING,
    },
    
    email: {
      allowNull: false,
      type: STRING,
      unique: true
    },

    password: {
      allowNull: false,
      type: STRING,
    },

    admin: {
      allowNull: true,
      type: BOOLEAN,
      defaultValue: false,
    },

    birthday: {
      allowNull: false,
      type: DATEONLY,
    },

    controller: {
      allowNull: true,
      type: STRING,
    }
  },
  {
    sequelize: db,
    modelName: 'users',
    timestamps: false,
  }
);

export default User;