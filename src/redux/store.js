import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import listStoreConfig from "./reducers/list";

const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    return (
      (handlers[action.type] && handlers[action.type](state, action)) || state
    );
  };
};

const listReducers = createReducer(
  listStoreConfig.initialState,
  listStoreConfig.actions
);

const rootReducer = combineReducers({
  list: listReducers
});

export default createStore(rootReducer, composeWithDevTools());
