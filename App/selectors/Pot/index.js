import { createSelector } from 'reselect';
import { getPots } from '../Pots/';


export const getPotId = state => state.pot.potId;

export const getPot = createSelector(
  getPots,
  getPotId,
  (pots, potId) => pots[potId]
);
