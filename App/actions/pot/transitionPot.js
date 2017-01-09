import { push } from '../navActions';
import viewCurrentPot from './viewCurrentPot';

export default function transitionToPot(potId) {
  return dispatch => {
    dispatch(viewCurrentPot(potId));
    dispatch(push({key: 'Pot'}));
  };
}
