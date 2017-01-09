import { createSelector } from 'reselect';

export const getPots = state => state.pots.data.pots;

export const getPotsAsArray = createSelector(
  getPots,
  pots => Object.keys(pots).map((key) => pots[key])
);

export const getActivePots = createSelector(
  getPotsAsArray,
  pots => pots.filter(pot => pot.state === 'ACTIVE')
);

export const getCompletedPots = createSelector(
  getPotsAsArray,
  pots => pots.filter(pot => pot.state === 'COMPLETE')
);

export const getArchivedPots = createSelector(
  getPotsAsArray,
  pots => pots.filter(pot => pot.state === 'ARCHIVED')
);

export const getTotalSavedToDate = createSelector(
  getPotsAsArray,
  pots => pots.reduce((prev, pot) => pot.balance + prev, 0)
);

export const getTotalOpenPots = createSelector(
  getActivePots,
  getCompletedPots,
  (activePots, completedPots) => [...completedPots, ...activePots].reduce((prev, pot) => pot.balance + prev, 0)
);
