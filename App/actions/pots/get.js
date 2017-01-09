import { RECIEVE_POTS } from '../../constants/ActionTypes/pots/';

export default function get(pots) {
  return {
    type: RECIEVE_POTS,
    pots
  };
}
