export default interface IUser {
  id: number;
  email:string;
  name: string;
  password: string;
  role: string;
  birthday: Date;
  license: number;
  controller: string;
}
