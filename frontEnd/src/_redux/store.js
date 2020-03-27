import { createStore, combineReducers, applyMiddleware } from "redux";
import todos from "../_reducers/todos";
import { logger, promise } from "../middleware";

// Global state
const rootReducers = combineReducers({
  todos
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
