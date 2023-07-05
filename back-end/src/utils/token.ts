import { sign } from 'jsonwebtoken';

export interface IPayload {
  id: number;
  email: string;
  name: string;
  admin: boolean;
  birthday: Date;
  controller: string;
}

const secret = process.env.JWT_SECRET || 'jwtsecret';

const Token = {
  makeToken({ id, name, email, admin, birthday, controller }: IPayload) {
    const token = sign({ id, name, email, admin, birthday, controller }, secret, {
      expiresIn: '24h',
    });
    return token;
  },
};

export default Token;
