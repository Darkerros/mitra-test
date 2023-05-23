import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../../api/types/resources/post-interface";

interface IPostsReducerState {
    posts: IPost[];
    isLoading: boolean;
    isSuccessLoading: boolean;
    isErrorLoad: boolean;
    errorMessage: string | null;
}

const PostReducerState:IPostsReducerState = {
    posts: [],
    isLoading: false,
    isSuccessLoading: false,
    isErrorLoad: false,
    errorMessage: null
}

const PostsSlice = createSlice({
    name: 'PostSlice',
    initialState: PostReducerState,
    reducers: {
        startLoadingPosts(state) {
            state.isLoading = true;
            state.isSuccessLoading = false;
            state.isErrorLoad = false;
            state.errorMessage = null;
        },
        successLoadPosts(state, action: PayloadAction<IPost[]>) {
            state.isLoading = false;
            state.isSuccessLoading = true;
            state.posts = action.payload;
        },
        errorLoadPosts(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.isSuccessLoading = false;
            state.isErrorLoad = true;
            state.errorMessage = action.payload
        },
    }
})

const getAllPostsAction = createAction('GET_ALL_POSTS')

export const postsActions = { ...PostsSlice.actions, getAllPostsAction }
export const postsReducer = PostsSlice.reducer