import { PUSH_ROUTE, POP_ROUTE, JUMP_TO } from '../../constants/ActionTypes/NavActions';

export function push(route) {
  return {
    type: PUSH_ROUTE,
    route
  };
}

export function pop() {
  return {
    type: POP_ROUTE
  };
}

export function jumpTo(key) {
  return {
    type: JUMP_TO,
    key
  };
}
