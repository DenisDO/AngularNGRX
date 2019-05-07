export interface IUser {
    name: string;
    surname: string;
    gender: string;
    region: string;
    age: number;
    title: string;
    phone: string;
    birthday: {
        dmy: string,
        mdy: string,
        raw: number
    };
    email: string;
    password: string;
    credit_card: {
        expiration: string,
        number: string,
        pin: number,
        security: number
    };
    photo: string;
}
