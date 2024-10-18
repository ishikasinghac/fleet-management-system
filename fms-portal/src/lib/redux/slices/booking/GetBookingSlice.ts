import { APICallState } from "@/lib/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
import { Booking, GetBookingInitialResponse, GetBookingRequest, GetBookingResponse } from "@/lib/types/bookingTypes";

export const getBooking = createAsyncThunk<
    Booking[],
    {
        requestData: GetBookingRequest
    }
>(
    "/booking/get", async ({ requestData }) => {
        try {
            const response = await axios<Booking[]>({
                baseURL: process.env.NEXT_PUBLIC_BASE_URL,
                url: process.env.NEXT_PUBLIC_GET_BOOKING_URL,
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

const initialState: GetBookingInitialResponse = {
    data: [],
    status: APICallState.IDLE,
    error: ""
}

const getBookingSlice = createSlice({
    name: "getBookingSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBooking.pending, (state) => {
            state.status = APICallState.LOADING;
            state.error = "";
        });
        builder.addCase(getBooking.fulfilled, (state, action) => {
            state.status = APICallState.SUCCEEDED;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(getBooking.rejected, (state, action) => {
            state.status = APICallState.FAILED;
            state.error = action.error;
        });
    }
})


export const selectGetBookingData = (state: RootState) => state.getBookingSlice.data;

export const selectError = (state: RootState) => state.getBookingSlice.error;
export const selectStatus = (state: RootState) => state.getBookingSlice.status;

export default getBookingSlice.reducer;