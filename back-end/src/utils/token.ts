import { sign } from 'jsonwebtoken';

export interface IPayload {
  id: number;
  name: string;
  driver: boolean;
  admin: boolean;
  birthday: Date;
  license: number;
  controller: string;
}

const secret = process.env.JWT_SECRET || 'jwtsecret';

const Token = {
  makeToken({ id, name, driver, admin, birthday, license, controller }: IPayload) {
    const token = sign({ id, name, driver, admin, birthday, license, controller }, secret, {
      expiresIn: '24h',
    });
    return token;
  },
};

export default Token;
