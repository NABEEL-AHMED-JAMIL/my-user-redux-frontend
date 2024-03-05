import { IUser } from '../../models/index';
import { Actions, ActionTypes } from '../actions';

// user state mean store
export interface UserState  {
    users: IUser[];
}

// create the empty state in store
export const initialState: UserState  = {
    users: []
}

// reducer
export function userReducer(state = initialState, action: Actions): UserState  {
    switch (action.type) {
        case ActionTypes.USERS_FETCHED_SUCCESS:
            return {
                ...state,
                users: action.payload
            };
        case ActionTypes.ADD_USERS_SUCCESS:
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case ActionTypes.UPDATE_USERS_SUCCESS:
            const updatedUsers = state.users.map(user =>
                user.uuid === action.payload.uuid ? action.payload : user
            );
            return {
                ...state,
                users: updatedUsers
            };
        case ActionTypes.DELETE_USERS_SUCCESS:
            const filteredUsers = state.users.filter(user =>
                user.uuid !== action.payload.uuid
            );
            return {
                ...state,
                users: filteredUsers
            };
        default:
            return state;
    }
}
