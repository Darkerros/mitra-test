import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import {rootSagaWatchers} from "./saga/root-saga-watchers";
import {rootReducer} from "./reducers/root-reducer";

const sagaMidleware = createSagaMiddleware()

export const store = configureStore({
    devTools: true,
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([sagaMidleware])
})

sagaMidleware.run(rootSagaWatchers)

export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch

