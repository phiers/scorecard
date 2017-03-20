/* eslint-disable */
import { startFetchArchivedRounds } from 'archivedRoundActions';
import { startFetchCourses } from 'courseActions';
import { startFetchGroupRoundList } from 'groupRoundActions';
import { startFetchPlayers } from 'playerActions';
import { startFetchActiveRound } from 'roundActions';
import store from 'configureStore';
/* eslint-enable */

// Make sure one fetch is done before next one starts, using promises returned
const loadData = () => {
  store.dispatch(startFetchPlayers())
  .then(() =>
    store.dispatch(startFetchCourses()))
    .then(() =>
      store.dispatch(startFetchActiveRound()))
        .then(() =>
          store.dispatch(startFetchArchivedRounds()))
            .then(() =>
              store.dispatch(startFetchGroupRoundList()));
};

export default loadData;
