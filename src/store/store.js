import { configureStore } from '@reduxjs/toolkit';
import { loadState, saveState } from 'localStorage/localStorage';
import postReducer from './postSlice';

const store = configureStore({
  reducer: { posts: postReducer },
  preloadedState: loadState(),
});

store.subscribe(() => saveState(store.getState()));

export default store;
