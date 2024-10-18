"use client";

import { Box, Grid } from "@mui/material"
import { useEffect } from "react";
import { GetBookingRequest } from "@/lib/types/bookingTypes";
import { USER_ID } from "@/lib/constants";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";
import { getBooking, selectGetBookingData } from "@/lib/redux/slices/booking/GetBookingSlice";
import UserBooking from "./UserBooking";


export default function UserBookingList() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        const requestData : GetBookingRequest = {
            driverId : "",
            userId : localStorage.getItem(USER_ID) ?? "",
            status : "",
        }

        dispatch(getBooking({requestData}));
    }, []);

    const dataAtPage = useAppSelector((state) => selectGetBookingData(state));

    return (
        <>
            <Box sx={{ width: '90%' }}>
                <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
                    {
                        dataAtPage &&
                        dataAtPage.map((booking) => (
                            <Grid item xs={12} md={6}>
                                <UserBooking booking={booking} page=""/>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>

        </>
    )
}