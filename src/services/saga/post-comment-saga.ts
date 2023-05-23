import {api} from "../../api/api";
import {call, put, takeEvery} from "redux-saga/effects";
import {sleep} from "../../utils/sleep";
import {postCommentActions} from "../reducers/post-comment-reducer";
import {PayloadAction} from "@reduxjs/toolkit";
import {IComment} from "../../api/types/resources/comment-interface";



function* postCommentWorker(action: PayloadAction<number>) {
    yield put(postCommentActions.startLoadingPostComments())
    try {
        yield sleep(5000)
        const postComments:IComment[] = yield call(api.getPostComments, action.payload)
        yield put(postCommentActions.successLoadPostComments(postComments))
    }
    catch (e) {
        yield put(postCommentActions.errorLoadPostComments(JSON.stringify(e)))
    }
}

function* postsWatcher() {
    yield takeEvery(postCommentActions.getPostCommentAction.type,postCommentWorker)
}

export default postsWatcher