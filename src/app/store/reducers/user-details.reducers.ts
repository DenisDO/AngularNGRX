import { IUserState, initialUserState } from '../state/user.state';
import { UserDetailsActions, EUserDetailsActions } from '../actions/user-details.actions';

export const userDetailsReducers = (
    state = initialUserState,
    action: UserDetailsActions
): IUserState => {
    switch (action.type) {
        case EUserDetailsActions.SelectCurrentUser: {
            return {
                ...state,
                currentUser: action.payload
            };
        }

        case EUserDetailsActions.ClearCurrentUser: {
            return {
                ...state,
                currentUser: null
            };
        }

        default: {
            return state;
        }
    }
};
