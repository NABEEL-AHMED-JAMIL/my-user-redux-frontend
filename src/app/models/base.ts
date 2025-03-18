/**
 * Model use to store the data model
 */
export const ERROR:string = "ERROR";
export const SUCCESS:string = "SUCCESS";

export enum Role {
    USER,
    ADMIN
};

export enum Status {
    INACTIVE = 0,
    ACTIVE = 1,
    DELETE = 2
};

export const StatusLabel: { [key in Status]: string } = {
    [Status.INACTIVE]: "Inactive",
    [Status.ACTIVE]: "Active",
    [Status.DELETE]: "Delete"
};

export enum Language {
    ENGLISH = "0148",
    SPANISH = "0149",
    ARABIC = "0177"
};

export const LanguageLabe: { [key in Language]: string } = {
    [Language.ENGLISH]: "English",
    [Language.SPANISH]: "Spanish",
    [Language.ARABIC]: "Arabic"
};

export enum Format {
    HARD_COVER = "017-954",
    PAPER_BACK = "654-987-44",
    EBOOK = "147-963"
};

export const FormatLabe: { [key in Format]: string } = {
    [Format.HARD_COVER]: "Hard Cover",
    [Format.PAPER_BACK]: "Paper Back",
    [Format.EBOOK]: "E-Book"
};

export enum Category {
    FICTION = "014-97-98",
    NO_FICTION = "014-97-91",
    MYSTERY = "014-97-78",
    SCIENCE_FICTION = "014-47-98"
};

export const CategoryLabe: { [key in Category]: string } = {
    [Category.FICTION]: "Fiction",
    [Category.NO_FICTION]: "No Fiction",
    [Category.MYSTERY]: "Mystery",
    [Category.SCIENCE_FICTION]: "Science Fiction"
};

export interface IEnum {
    code: any;
    name: any;
    value: any;
};

export interface IBaseEntityRequest {
    id?: string;
    createdAt?: any;
    updatedAt?: any;
    status?: Status;
}

export interface IBaseEntityResponse {
    id: string;
    createdAt: any;
    updatedAt: any;
    status: IEnum;
}

export interface IGQLResponse {
    status: IEnum;	    
    message: any;	    
    data: any;
}

export interface ITokenResponse {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    role: Role;
    image: string;
    token: string;
}