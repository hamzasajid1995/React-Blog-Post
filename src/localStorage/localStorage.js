// Pass in Redux store's state to save it to the user's browser local storage
export const saveState = state => {
  console.log('saveState');
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    console.log(error);
  }
};

// Loads the state and returns an object that can be provided as the
// preloadedState parameter of store.js's call to configureStore
export const loadState = () => {
  console.log('loadState');

  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};
