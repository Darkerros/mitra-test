import {all} from "redux-saga/effects";
import postsWatcher from "./posts-saga";
import postCommentWatcher from "./post-comment-saga";
import userInfoWatcher from "./user-info-saga";

export function* rootSagaWatchers() {
    yield all([
        postsWatcher(),
        postCommentWatcher(),
        userInfoWatcher()
    ])
}