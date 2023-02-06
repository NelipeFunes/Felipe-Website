export default interface IUser {
  id: number;
  email:string;
  name: string;
  password: string;
  driver: string;
  admin: string;
  birthday: Date;
  license: number;
  controller: string;
}
