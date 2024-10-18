import { APICallState } from "@/lib/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
import { Booking, UpdateBookingRequest } from "@/lib/types/bookingTypes";

export const updateBooking = createAsyncThunk<
    Booking,
    {
        requestData: UpdateBookingRequest
    }
>(
    "/booking/update", async ({ requestData }) => {
        try {
            const response = await axios<Booking>({
                baseURL: process.env.NEXT_PUBLIC_BASE_URL,
                url: process.env.NEXT_PUBLIC_UPDATE_BOOKING_URL,
                method: "PUT",
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

const initialState = {
    data: {},
    status: APICallState.IDLE,
    error: {}
}

const updateBookingSlice = createSlice({
    name: "updateBookingSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateBooking.pending, (state) => {
            state.status = APICallState.LOADING;
            state.error = "";
        });
        builder.addCase(updateBooking.fulfilled, (state, action) => {
            state.status = APICallState.SUCCEEDED;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(updateBooking.rejected, (state, action) => {
            state.status = APICallState.FAILED;
            state.error = action.error;
        });
    }
})


export const selectUpdateBookingData = (state: RootState) => state.updateBookingSlice.data;

export const selectError = (state: RootState) => state.updateBookingSlice.error;
export const selectStatus = (state: RootState) => state.updateBookingSlice.status;

export default updateBookingSlice.reducer;