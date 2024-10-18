import { APICallState } from "@/lib/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
import { GetVehicleInitialState, GetVehicleRequest, GetVehicleResponse } from "@/lib/types/vehicleTypes";

export const getVehicle = createAsyncThunk<
    GetVehicleResponse,
    {
        requestData: GetVehicleRequest
    }
>(
    "user/get-vehicle", async ({ requestData }) => {
        try {
            const response = await axios<GetVehicleResponse>({
                baseURL: process.env.NEXT_PUBLIC_BASE_URL,
                url: process.env.NEXT_PUBLIC_GET_VEHICLE_URL,
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

const initialState: GetVehicleInitialState = {
    data: [],
    status: APICallState.IDLE,
    error: {}
}

const getVehicleSlice = createSlice({
    name: "getVehicleSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getVehicle.pending, (state) => {
            state.status = APICallState.LOADING;
            state.error = "";
        });
        builder.addCase(getVehicle.fulfilled, (state, action) => {
            state.status = APICallState.SUCCEEDED;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(getVehicle.rejected, (state, action) => {
            state.status = APICallState.FAILED;
            state.error = action.error;
        });
    }
})


export const selectGetVehicleData = (state: RootState) => state.getVehicleSlice.data;

export const selectError = (state: RootState) => state.getVehicleSlice.error;
export const selectStatus = (state: RootState) => state.getVehicleSlice.status;

export default getVehicleSlice.reducer;