import { NEXT_PAGE, UPDATE_PRIVACY, UPDATE_USER } from '../actions/actions';
import { ActionType, ReduxState, FormState, formItems } from '../../types';

const initialState: ReduxState = {
    page: FormState.USER,
    user: {
        name: null,
        role: null,
        email: null,
        password: null,
    },
    privacy: {
        updates: false,
        communication: false,
    },
};

const rootReducer = (state = initialState, action: ActionType): ReduxState => {
    switch (action.type) {
        case NEXT_PAGE:
            return {
                ...state,
                page: formItems[formItems.indexOf(state.page) + 1],
            };

        case UPDATE_PRIVACY:
            return {
                ...state,
                privacy: {
                    updates: action.privacy.updates,
                    communication: action.privacy.communication,
                },
            };

        case UPDATE_USER:
            return {
                ...state,
                user: {
                    name: action.user.name,
                    role: action.user.role,
                    email: action.user.email,
                    password: action.user.password,
                },
            };

        default:
            return state;
    }
};

export default rootReducer;
