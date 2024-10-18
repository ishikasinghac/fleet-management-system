import { APICallState } from "@/lib/constants";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
import { RegisterUserInitialState, RegisterUserRequest, RegisterUserResponse } from "@/lib/types/userTypes";


export const registerUser = createAsyncThunk<
    RegisterUserResponse,
    {
        requestData: RegisterUserRequest
    }
>(
    "user/register", async ({ requestData }) => {
        try {
            const response = await axios<RegisterUserResponse>({
                baseURL: process.env.NEXT_PUBLIC_BASE_URL,
                url: process.env.NEXT_PUBLIC_REGISTER_USER_URL,
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

const initialState: RegisterUserInitialState = {
    data: {
        msg: ""
    },
    status: APICallState.IDLE,
    error: {}
}

const registerUserSlice = createSlice({
    name: "registerUserSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.status = APICallState.LOADING;
            state.error = "";
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.status = APICallState.SUCCEEDED;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.status = APICallState.FAILED;
            state.error = action.error;
        });
    }
})


export const selectRegisterUserData = (state: RootState) => state.registerUserSlice.data;

export const selectError = (state: RootState) => state.registerUserSlice.error;
export const selectStatus = (state: RootState) => state.registerUserSlice.status;

export default registerUserSlice.reducer;