import * as types from '../../constants/ActionTypes/pot/';


export default function Pot(state =
  {
    potId: null,
    data: {
      pot: {}
    }
  }, action) {
  switch (action.type) {
    case 'SET_CURRENT_POT':
      return Object.assign({}, state, {
        potId: action.potId
      });
    default:
      return state;
  }
}
