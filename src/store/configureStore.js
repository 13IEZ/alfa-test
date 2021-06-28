
import {applyMiddleware, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import dogsReducer from './reducers/dogsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
	dogsReducer,
	composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;