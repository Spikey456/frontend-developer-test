import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const stores = () => {
    let store = createStore(persistedReducer,{},applyMiddleware(thunk))
    let persistor = persistStore(store)
    return { store, persistor }
}

export default stores;