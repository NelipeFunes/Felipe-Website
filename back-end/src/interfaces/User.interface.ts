export default interface IUser {
  id: number;
  email:string;
  name: string;
  password: string;
  role: string;
  age: Date;
  license: number;
  controller: string;
}