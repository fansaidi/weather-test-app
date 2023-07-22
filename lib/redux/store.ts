/* Core */
import {
  configureStore,
  type ConfigureStoreOptions,
  type ThunkAction,
  type Action,
} from '@reduxjs/toolkit'
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  type TypedUseSelectorHook,
} from 'react-redux'

/* Instruments */
import { reducer, rootReducer } from './rootReducer'
import { middleware } from './middleware'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const configureStoreDefaultOptions: ConfigureStoreOptions = { reducer }

export const makeReduxStore = (
  options: ConfigureStoreOptions = configureStoreDefaultOptions
) => {
  const store = configureStore(options)

  return store
}

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const reduxStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middleware)
  },
})

export const persistor = persistStore(reduxStore)
export const useDispatch = () => useReduxDispatch<ReduxDispatch>()
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector

/* Types */
export type ReduxStore = typeof reduxStore
export type ReduxState = ReturnType<typeof reduxStore.getState>
export type ReduxDispatch = typeof reduxStore.dispatch
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>
