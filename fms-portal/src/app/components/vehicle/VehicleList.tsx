"use client";

import { Box, Grid } from "@mui/material";
import Vehicle from "./Vehicle";
import { useEffect } from "react";
import { GetVehicleRequest } from "@/lib/types/vehicleTypes";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";
import { getVehicle, selectGetVehicleData } from "@/lib/redux/slices/vehicle/GetVehicleSlice";

export default function VehicleList({vehicletype} : {vehicletype : string}) {

    const dispatch = useAppDispatch();
    const dataAtPage = useAppSelector((state) => selectGetVehicleData(state));
    
    useEffect(() => {
        const requestData : GetVehicleRequest = {
            vehicletype : vehicletype ?? "",
            ownerid : ""
        }
        dispatch(getVehicle({requestData}));
        
    }, []);

    return (
        <Box sx={{ width: '100%'}}>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    dataAtPage.map((vehicle) => (
                        <Vehicle vehicle={vehicle}/>
                    ))
                }
            </Grid>
        </Box>
    )
}