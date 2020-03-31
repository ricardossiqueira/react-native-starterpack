import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/rootReducer';
import {logger} from '../middlewares/logger';
import devToolsEnhancer from 'remote-redux-devtools';

export const store = createStore(rootReducer, devToolsEnhancer());
