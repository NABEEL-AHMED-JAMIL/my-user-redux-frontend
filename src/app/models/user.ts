import { IDataModel } from  './base';

/**
 * Model use to store the detial for user
 */
export interface IUser extends IDataModel {
    username: string;
    firstName: string;
    lastName: string;
    age: number;
    salary: number;
}