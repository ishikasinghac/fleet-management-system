import { APICallState } from "@/lib/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
import { AddVehicleInitialState, AddVehicleRequest, AddVehicleResponse } from "@/lib/types/vehicleTypes";

export const addVehicle = createAsyncThunk<
    AddVehicleResponse,
    {
        requestData: AddVehicleRequest
    }
>(
    "user/add-vehicle", async ({ requestData }) => {
        try {
            const response = await axios<AddVehicleResponse>({
                baseURL: process.env.NEXT_PUBLIC_BASE_URL,
                url: process.env.NEXT_PUBLIC_ADD_VEHICLE_URL,
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

const initialState: AddVehicleInitialState = {
    data: {
        id: "",
        ownername: "",
        ownerid: "",
        vehicletype: "",
        number: "",
    },
    status: APICallState.IDLE,
    error: {}
}

const addVehicleSlice = createSlice({
    name: "addVehicleSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addVehicle.pending, (state) => {
            state.status = APICallState.LOADING;
            state.error = "";
        });
        builder.addCase(addVehicle.fulfilled, (state, action) => {
            state.status = APICallState.SUCCEEDED;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(addVehicle.rejected, (state, action) => {
            state.status = APICallState.FAILED;
            state.error = action.error;
        });
    }
})


export const selectAddVehicleData = (state: RootState) => state.addVehicleSlice.data;

export const selectError = (state: RootState) => state.addVehicleSlice.error;
export const selectStatus = (state: RootState) => state.addVehicleSlice.status;

export default addVehicleSlice.reducer;