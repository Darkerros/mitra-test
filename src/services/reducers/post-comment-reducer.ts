import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IComment} from "../../api/types/resources/comment-interface";

interface IPostCommentReducerState {
    postComments: IComment[];
    isLoading: boolean;
    isSuccessLoading: boolean;
    isErrorLoad: boolean;
    errorMessage: string | null;
}

const PostCommentReducerState:IPostCommentReducerState = {
    postComments: [],
    isLoading: false,
    isSuccessLoading: false,
    isErrorLoad: false,
    errorMessage: null
}

const PostCommentSlice = createSlice({
    name: 'PostCommentSlice',
    initialState: PostCommentReducerState,
    reducers: {
        startLoadingPostComments(state) {
            state.isLoading = true;
            state.isSuccessLoading = false;
            state.isErrorLoad = false;
            state.errorMessage = null;
            state.postComments = [];
        },
        successLoadPostComments(state, action: PayloadAction<IComment[]>) {
            state.isLoading = false;
            state.isSuccessLoading = true;
            state.postComments = action.payload;
        },
        errorLoadPostComments(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.isSuccessLoading = false;
            state.isErrorLoad = true;
            state.errorMessage = action.payload
        },
    }
})

const getPostCommentAction = createAction('GET_POST_COMMENT', (postId:number) => ({ payload: postId}))

export const postCommentActions = { ...PostCommentSlice.actions, getPostCommentAction }
export const postCommentReducer = PostCommentSlice.reducer