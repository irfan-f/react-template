// store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // import your root reducer
import rootSelectors from './selectors'; // import your root selectors

const store = configureStore({
  reducer: rootReducer,
});

const selectors = rootSelectors;

export {
  store,
  selectors,
};
