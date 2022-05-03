import { AuthReducer } from "./reducers/AuthReducer";
import PostsReducer from "./reducers/PostsReducer";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

const initialState = {
  sidebarShow: true,
};

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    default:
      return state;
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  auth: AuthReducer,
  show: changeState,
  posts: PostsReducer,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
export default store;
