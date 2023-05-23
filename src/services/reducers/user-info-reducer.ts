import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../api/types/resources/user-interface";

interface IUserInfoReducerState {
    userInfo: null | IUser;
    isLoading: boolean;
    isSuccessLoading: boolean;
    isErrorLoad: boolean;
    errorMessage: string | null;
}

const UserInfoReducerState:IUserInfoReducerState = {
    userInfo: null,
    isLoading: false,
    isSuccessLoading: false,
    isErrorLoad: false,
    errorMessage: null
}

const UserInfoSlice = createSlice({
    name: 'UserInfoSlice',
    initialState: UserInfoReducerState,
    reducers: {
        startLoadingUserInfo(state) {
            state.isLoading = true;
            state.isSuccessLoading = false;
            state.isErrorLoad = false;
            state.errorMessage = null;
            state.userInfo = null;
        },
        successLoadUserInfo(state, action: PayloadAction<IUser>) {
            state.isLoading = false;
            state.isSuccessLoading = true;
            state.userInfo = action.payload;
        },
        errorLoadUserInfo(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.isSuccessLoading = false;
            state.isErrorLoad = true;
            state.errorMessage = action.payload
        },
    }
})

const getUserInfoAction = createAction('GET_USER_INFO', (userId:number) => ({ payload: userId}))

export const userInfoActions = { ...UserInfoSlice.actions, getUserInfoAction }
export const userInfoReducer = UserInfoSlice.reducer