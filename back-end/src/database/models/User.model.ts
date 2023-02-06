import { Model, INTEGER, STRING, DATEONLY } from 'sequelize';
import db from '.';

class User extends Model {
  id!: number;
  email!: string;
  password!: string;
  role!: string;
  age!: Date;
  license!: number;
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
      unique: true,
    },
    
    email: {
      allowNull: false,
      type: STRING,
    },

    password: {
      allowNull: false,
      type: STRING,
    },

    role: {
      allowNull: false,
      type: STRING,
    },

    birthday: {
      allowNull: false,
      type: DATEONLY,
    },

    license: {
      allowNull: false,
      type: INTEGER,
      defaultValue: 0,
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