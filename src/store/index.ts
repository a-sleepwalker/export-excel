import {createStore, combineReducers, applyMiddleware, Store, ReducersMapObject} from 'redux';
import sagaMiddlewareFactory from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import requireContext from 'require-context.macro';
import {loadModules} from '@/utils';

export const sagaMiddleware = sagaMiddlewareFactory();

const reducers: ReducersMapObject = loadModules(requireContext('./reducers', false, /\.ts$/), {});

const store: Store = createStore(
  combineReducers({
    ...reducers,
  }),
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

export const dynamicReducer = (reducer: object): void => {
  const r = store.getState();
  store.replaceReducer({...r, ...reducer});
};

export default store;
