import { APICallState } from "@/lib/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
import { Booking, CreateBookingIntialState, CreateBookingRequest } from "@/lib/types/bookingTypes";

export const createBooking = createAsyncThunk<
    Booking,
    {
        requestData: CreateBookingRequest
    }
>(
    "/booking/create", async ({ requestData }) => {
        try {
            const response = await axios<Booking>({
                baseURL: process.env.NEXT_PUBLIC_BASE_URL,
                url: process.env.NEXT_PUBLIC_CREATE_BOOKING_URL,
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

const initialState: CreateBookingIntialState = {
    data: {},
    status: APICallState.IDLE,
    error: ""
}

const createBookingSlice = createSlice({
    name: "createBookingSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createBooking.pending, (state) => {
            state.status = APICallState.LOADING;
            state.error = "";
        });
        builder.addCase(createBooking.fulfilled, (state, action) => {
            state.status = APICallState.SUCCEEDED;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(createBooking.rejected, (state, action) => {
            state.status = APICallState.FAILED;
            state.error = action.error;
        });
    }
})


export const selectCreateBookingData = (state: RootState) => state.createBookingSlice.data;

export const selectError = (state: RootState) => state.createBookingSlice.error;
export const selectStatus = (state: RootState) => state.createBookingSlice.status;

export default createBookingSlice.reducer;