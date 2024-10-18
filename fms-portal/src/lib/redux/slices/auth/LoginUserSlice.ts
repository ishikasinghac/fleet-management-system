import { APICallState } from "@/lib/constants";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
import { LoginUserInitialState, LoginUserRequest, LoginUserResponse, RegisterUserInitialState, RegisterUserRequest, RegisterUserResponse } from "@/lib/types/userTypes";


export const loginUser = createAsyncThunk<
    LoginUserResponse,
    {
        requestData: LoginUserRequest
    }
>(
    "user/login", async ({ requestData }) => {
        try {
            const response = await axios<LoginUserResponse>({
                baseURL: process.env.NEXT_PUBLIC_BASE_URL,
                url: process.env.NEXT_PUBLIC_LOGIN_USER_URL,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                data: requestData,
                withCredentials: true,
            })

            return response.data;
        }
        catch (error: any) {
            console.error(error);
            return error.response.data
        }
    });

const initialState: LoginUserInitialState = {
    data: {
        email: "",
        username: "",
        usertype: "",
        id: "",
    },
    status: APICallState.IDLE,
    error: {}
}

const loginUserSlice = createSlice({
    name: "loginUserSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.status = APICallState.LOADING;
            state.error = "";
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.status = APICallState.SUCCEEDED;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.status = APICallState.FAILED;
            state.error = action.error;
        });
    }
})


export const selectLoginUserData = (state: RootState) => state.loginUserSlice.data;

export const selectError = (state: RootState) => state.loginUserSlice.error;
export const selectStatus = (state: RootState) => state.loginUserSlice.status;

export default loginUserSlice.reducer;