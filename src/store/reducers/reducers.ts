import { UPDATE_PRIVACY, UPDATE_USER } from '../actions/actions';
import { ActionType, ReduxState } from '../../types'

const initialState: ReduxState = {
    user: {
        name: null,
        title: null,
        email: null,
        password: null,
    },
    privacy: {
        updates: false,
        communication: false,
    }
}

function rootReducer(state = initialState, action: ActionType): ReduxState {
  switch(action.type) {
    case UPDATE_PRIVACY:
      return {
        ...state,
        privacy: {
            updates: action.privacy.updates,
            communication: action.privacy.communication,
        }
      };
    case UPDATE_USER:
      return {
        ...state,
        user: {
            name: action.user.name,
            title: action.user.title,
            email: action.user.email,
            password: action.user.password,
        }
      };

    default:
      return state;
  };
}

export default rootReducer;