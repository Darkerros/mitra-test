import {all} from "redux-saga/effects";
import postsWatcher from "./posts-saga";

export function* rootSagaWatchers() {
    yield all([postsWatcher()])
}