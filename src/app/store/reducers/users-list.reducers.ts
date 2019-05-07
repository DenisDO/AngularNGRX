import { UsersListActions, EUsersListActions } from '../actions/users-list.action';
import { IUsersListState, initialUsersListState } from '../state/users-list.state';

export const usersListReducers = (
    state = initialUsersListState,
    action: UsersListActions
): IUsersListState => {
    switch (action.type) {
        case EUsersListActions.LoadUsersSuccess: {
            return {
                ...state,
                usersList: action.payload
            };
        }
        case EUsersListActions.LoadUsersFailed: {
            return state;
        }
        default: {
            return state;
        }
    }
};
