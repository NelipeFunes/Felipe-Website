import { compare, hash } from 'bcryptjs';
import httpStatus from 'http-status';
import Joi from 'joi';
import nodemailer from 'nodemailer';
import User from '../database/models/User.model';
import IUser from '../interfaces/User.interface';
import { ErrorHandler } from '../middlewares/error.middleware';

const UserService = {
  async validateBody(body: IUser): Promise<void> {
    const schema = Joi.object({
      name: Joi.string().required(),
      password: Joi.string().required().min(5),
      email: Joi.string().email().required(),
      birthday: Joi.date().required(),
      controller: Joi.string().required().min(5),
      platform: Joi.string().required(),
    });

    const { error } = schema.validate(body);
    if (error) throw new ErrorHandler(error.message, httpStatus.BAD_REQUEST);
    const exists = await User.findOne({ where: { email: body.email } });
    if (exists) throw new ErrorHandler('Email already in use', httpStatus.UNAUTHORIZED);
  },

  async verifyUser(email: string, password: string): Promise<User> {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new ErrorHandler('Invalid Email', httpStatus.NOT_FOUND);
    const check = await compare(password, user.password);
    if (!check) throw new ErrorHandler('Invalid Password', httpStatus.UNAUTHORIZED);
    return user;
  },

  async sendEmail(email:string, subject: string, text: string) {
    const transport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EM_PASS,
      },
    });
    transport.sendMail({
      from: 'Erasmo Bacco <felipedevnunes@gmail.com>',
      to: email,
      subject,
      text,
    });
  },

  async createUser(
    { name, password, email, admin, birthday, controller }: User,
  ): Promise<User> {
    const hashedPass = await hash(password, 10);
    const user = await User.create(
      { name, password: hashedPass, email, admin, birthday, controller },
    );
    await this.sendEmail(email, 'Bem vindo a CDR', 'Fala marciao, bem vindo a nossa nova, '
    + 'liguinha nao, MAJOR DE F1 a CDR League, e se não gostar, muda de canal, tira equipe');
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

  async logIn({ email, password }: IUser) {
    const user = await this.verifyUser(email, password);
    return user;
  },

};

export default UserService;
