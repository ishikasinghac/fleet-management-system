import { USER_ID, USER_NAME } from "@/lib/constants";
import { useAppDispatch } from "@/lib/hooks/hooks";
import { createBooking } from "@/lib/redux/slices/booking/CreateBookingSlice";
import { CreateBookingRequest } from "@/lib/types/bookingTypes";
import { Vehicle as VehicleType } from "@/lib/types/vehicleTypes";
import { getVehicleImageUrl } from "@/lib/utils/common";
import { Button, Grid } from "@mui/material";
import { unwrapResult } from "@reduxjs/toolkit";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface VehicleProps {
    vehicle : VehicleType,
    pickupLocation : string,
    dropLocation : string,
}

export default function Vehicle({vehicle, pickupLocation, dropLocation} : VehicleProps) {

    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleBookVehicle = (vehicle : VehicleType) => {
        const requestData : CreateBookingRequest = {
            pickupLocation: pickupLocation,
            dropLocation : dropLocation,
            vehicleType : vehicle.vehicletype,
            driverId : vehicle.ownerid,
            userId : localStorage.getItem(USER_ID) ?? "",
            username: localStorage.getItem(USER_NAME) ?? "",
            drivername : vehicle.ownername,
        }

        dispatch(createBooking({requestData}))
        .then(unwrapResult)
        .then((booking) => {
            console.log(booking);
            router.push("/profile");
        });
    }

    return (
        <Grid item xs={6} md={3}>
            <div
                style={{    
                    width: "100%",
                    height: 200,
                    background: "#fff",
                    borderRadius: 10,
                    padding: 15,
                    border: "2px solid #ccc",
                }}
            >
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <div>
                        <div style={{ fontSize: 22 }}>{vehicle?.ownername}</div>
                        <div style={{ fontWeight: "lighter" }}>{vehicle?.number}</div>
                        <div>{vehicle?.vehicletype}</div>
                    </div>
                    <div>
                        <Image src={getVehicleImageUrl(vehicle.vehicletype ?? "")} alt={"Img"} height={100} width={150} />
                    </div>
                </div>
                <div style={{width : "100%", justifyContent: "center", display: "flex", marginTop: 10   }}>
                    <Button variant="contained" onClick={() => handleBookVehicle(vehicle)}> Book Vehicle</Button>
                </div>
            </div>
        </Grid>
    );
}
