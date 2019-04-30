import {createStore, applyMiddleware, compose} from 'redux';// додали compose
import thunk from 'redux-thunk';// дає можливість писати асинхронні екшени
import rootReducer from '../reducers';
// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// const store = createStore(rootReducer,devTools, applyMiddleware(thunk));
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;