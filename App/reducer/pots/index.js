import * as types from '../../constants/ActionTypes/pots/';


export const initialState = {
  isLoading: true,
  dataBlob: {},
  dataSource: {},
  data: {
    pots: {}
  }
};

export default function Pots(state = {...initialState}, action) {
  switch (action.type) {
    case types.RECIEVE_POTS:
      return {
        ...initialState,
        isLoading: false,
        data: {
          ...initialState.data,
          pots: action.pots
        }
      };
    default:
      return state;
  }
}
