import {all} from "redux-saga/effects";
import postsWatcher from "./posts-saga";
import postCommentSaga from "./post-comment-saga";

export function* rootSagaWatchers() {
    yield all([
        postsWatcher(),
        postCommentSaga(),
    ])
}