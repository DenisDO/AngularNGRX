import { SignInActions, ESignInActions } from '../actions/sign-in.actions';
import { ISignInResponseState, initialSignInResponse } from '../state/sign-in-response.state';

export const signInReducers = (
    state = initialSignInResponse,
    action: SignInActions
): ISignInResponseState => {
    switch (action.type) {
        case ESignInActions.SignInSuccess: {
            return {
                ...state,
                signInResponse: action.payload
            };
        }
        case ESignInActions.SignInFailed: {
            return {
                ...state,
                signInResponse: action.payload
            };
        }
        default: {
            return state;
        }
    }
};
