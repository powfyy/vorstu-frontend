export class SignUpInfo{
  username:string;
  password:string;
  fio:string;
  group:string;
  phoneNumber:number;

  constructor(username:string,password:string, fio:string,group:string, phoneNumber:number){
    this.username= username;
    this.password=password;
    this.fio=fio;
    this. group=group;
    this.phoneNumber=phoneNumber;
  }
}
