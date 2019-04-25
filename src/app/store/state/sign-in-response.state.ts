import { ISignInResponse } from 'src/app/shared/interfaces/sign-in-response.inteface';

export interface ISignInResponseState {
    signInResponse: ISignInResponse;
}

export const initialSignInResponse: ISignInResponseState = {
    signInResponse: null
};
