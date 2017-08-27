/**
 * Created by Janith on 8/27/2017.
 */
export class Student{

  private _id:string;
  private _firstName:string;
  private _lastName:string;
  private _contactNumber:string;
  private _address:string;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get contactNumber(): string {
    return this._contactNumber;
  }

  set contactNumber(value: string) {
    this._contactNumber = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }
}
