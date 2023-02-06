import { Request } from 'express';
import { IPayload } from '../utils/token';

export interface IReqUser extends Request {
  token?: IPayload
}
