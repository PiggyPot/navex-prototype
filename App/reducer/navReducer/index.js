import { NavigationExperimental } from 'react-native';
import { PUSH_ROUTE, POP_ROUTE, JUMP_TO } from '../../constants/ActionTypes/NavActions';

const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental;

const initialNavState = {
  index: 0,
  routes: [{key: 'Pots'}]
};

export default function navReducer(state = initialNavState, action, route) {
  switch (action.type) {
    case PUSH_ROUTE: {
      return NavigationStateUtils.push(state, action.route);
    }
    case POP_ROUTE: {
      return NavigationStateUtils.pop(state);
    }
    case JUMP_TO: {
      return NavigationStateUtils.jumpTo(state, action.key)
    }
    default:
      return state;
  }
}
