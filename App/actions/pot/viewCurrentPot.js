import { SET_CURRENT_POT } from '../../constants/ActionTypes/pot';

export default function viewCurrentPot(potId) {
  return {
    type: SET_CURRENT_POT,
    potId: potId
  };
}
