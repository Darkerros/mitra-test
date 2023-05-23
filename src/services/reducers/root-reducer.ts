import {combineReducers} from "@reduxjs/toolkit";
import {postsReducer} from "./posts-reducer";
import {postCommentReducer} from "./post-comment-reducer";
import {userInfoReducer} from "./user-info-reducer";

export const rootReducer = combineReducers({
    postsReducer,
    postCommentReducer,
    userInfoReducer
})