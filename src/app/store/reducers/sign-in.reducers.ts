import { SignInActions } from '../actions/sign-in.actions';
import { ISignInResponseState, initialSignInResponse } from '../state/sign-in-response.state';

export const signInReducers = (
    state = initialSignInResponse,
    action: SignInActions
): ISignInResponseState => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};
