import { sign } from 'jsonwebtoken';

export interface IPayload {
  id: number;
  email: string;
  name: string;
  driver: boolean;
  admin: boolean;
  birthday: Date;
  license: number;
  controller: string;
}

const secret = process.env.JWT_SECRET || 'jwtsecret';

const Token = {
  makeToken({ id, name, email, driver, admin, birthday, license, controller }: IPayload) {
    const token = sign({ id, name, email, driver, admin, birthday, license, controller }, secret, {
      expiresIn: '24h',
    });
    return token;
  },
};

export default Token;
