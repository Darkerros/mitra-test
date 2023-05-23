import {api} from "../../api/api";
import {call, put, takeEvery} from "redux-saga/effects";
import {postsActions} from "../reducers/posts-reducer";
import {IPost} from "../../api/types/resources/post-interface";
import {sleep} from "../../utils/sleep";

function* postsWorker() {
    yield put(postsActions.startLoadingPosts())
    try {
        yield sleep(5000)
        const posts:IPost[] = yield call(api.getAllPosts)
        yield put(postsActions.successLoadPosts(posts))
    }
    catch (e) {
        yield put(postsActions.errorLoadPosts(JSON.stringify(e)))
    }
}

function* postsWatcher() {
    yield takeEvery(postsActions.getAllPostsAction.type,postsWorker)
}

export default postsWatcher