import { Status } from "./Status"
export interface User {
    Id:string,
    FirstName:string,
    LastName:string,
    BirthOfDate?:Date,
    Email:string,
    Phone:string,
    Addres?:string,
    Statuss: Status


}
