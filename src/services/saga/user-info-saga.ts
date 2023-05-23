import {api} from "../../api/api";
import {call, put, takeEvery} from "redux-saga/effects";
import {sleep} from "../../utils/sleep";
import {PayloadAction} from "@reduxjs/toolkit";
import {userInfoActions} from "../reducers/user-info-reducer";
import {IUser} from "../../api/types/resources/user-interface";



function* userInfoWorker(action: PayloadAction<number>) {
    yield put(userInfoActions.startLoadingUserInfo())
    try {
        yield sleep(5000)
        const user:IUser = yield call(api.getUserById, action.payload)
        yield put(userInfoActions.successLoadUserInfo(user))
    }
    catch (e) {
        yield put(userInfoActions.errorLoadUserInfo(JSON.stringify(e)))
    }
}

function* userInfoWatcher() {
    yield takeEvery(userInfoActions.getUserInfoAction.type,userInfoWorker)
}

export default userInfoWatcher