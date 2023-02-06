import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import { ErrorHandler } from './error.middleware';
// import { IReqUser } from '../interfaces/Request.interface';

const secret: Secret = process.env.JWT_SECRET || 'jwtsecret';

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const tokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;

  if (!token) {
    throw new ErrorHandler('Token not found', httpStatus.UNAUTHORIZED);
  }

  try {
    const decoded = jwt.verify(token, secret);
    (req as CustomRequest).token = decoded;

    next();
  } catch (err) {
    res.status(httpStatus.UNAUTHORIZED).json({ message: 'Jwt malformed' });
  }
};
