import * as types from '../../constants/ActionTypes/Application';

export const initialUserState = {};

export const initialWaitingForState = {};

export const initialState = {
  currentAppState: '',
  isOffline: false,
  maintenanceMode: {
    on: false,
    message: ''
  },
  updateRequired: false,
  user: {
    ...initialUserState
  },
  waitingFor: {
    ...initialWaitingForState
  }
};

export default function Application(state = {...initialState}, action) {
  const reducerActions = {
    [types.RECEIVE_LOGIN]() {
      return {
        ...state,
        user: {
          ...state.user,
          ...action.data
        }
      };
    }
  };

  return reducerActions[action.type] ? reducerActions[action.type](state, action) : state;
}
