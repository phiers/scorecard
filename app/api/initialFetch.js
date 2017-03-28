import { browserHistory } from 'react-router';
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
  store.dispatch(startFetchActiveRound())
  .then(() =>
    store.dispatch(startFetchPlayers()))
    .then(() =>
      store.dispatch(startFetchCourses()))
        .then(() =>
          store.dispatch(startFetchGroupRoundList()))
            .then(() =>
              store.dispatch(startFetchArchivedRounds()))
                .then(() => browserHistory.push('start'));
};

export default loadData;
