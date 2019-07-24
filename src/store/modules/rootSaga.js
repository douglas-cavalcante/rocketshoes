import { all } from 'redux-saga/effects';

import cart from './card/sagas';

export default function* rootSaga() {
  return yield all([cart]);
}
