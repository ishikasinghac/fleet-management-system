import { BookingStatus, USER_NAME } from "@/lib/constants";
import { useAppDispatch } from "@/lib/hooks/hooks";
import { updateBooking } from "@/lib/redux/slices/booking/UpdateBookingSlice";
import { Booking as BookingType, UpdateBookingRequest } from "@/lib/types/bookingTypes";
import { getColorMappingForStatus } from "@/lib/utils/common";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";


interface BookingProps {
    booking: BookingType,
    page: string,
}

export default function UserBooking({ booking, page }: BookingProps) {
    const dispatch = useAppDispatch();
    const [status, setStatus] = useState("");

    const handleSelectChange = (e: any) => {
        setStatus(e.target.value);
    };

    const updateBookingStatus = (id : string, status : string) => {
        const requestData : UpdateBookingRequest = {
            id : id,
            status : status,
        }
        dispatch(updateBooking({requestData}));
    }

    return (
        <div style={{ border: "1px solid #ccc", borderRadius: 10, padding: 15 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginLeft: 30, marginRight: 30 }}>
                <div style={{ fontWeight: "bold" }}>
                    {
                        booking?.drivername
                    }
                </div>
                <div style={{ padding: 4, background: getColorMappingForStatus(booking.status), borderRadius: 5, paddingLeft: 8, paddingRight: 8 }}>
                    {
                        booking?.status
                    }
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginLeft: 30, marginRight: 30 }}>
                <div>
                    <p> Pick-up Location</p>
                    <p style={{ fontSize: 20, fontWeight: "lighter" }}>
                        {booking?.pickupLocation}
                    </p>
                </div>
                <div>
                    <p> Drop Location</p>
                    <p style={{ fontSize: 20, fontWeight: "lighter" }}>
                        {
                            booking?.dropLocation
                        }
                    </p>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginLeft: 30, marginRight: 30 }}>
                <div>Estimated Price</div>
                <div>{booking?.estimatedAmount}</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginLeft: 30, marginRight: 30 }}>
                <div>Vehicle Type</div>
                <div>{booking?.vehicleType}</div>
            </div>
        </div>
    )
}

const styles = {
    inputGroup: {
        marginTop: '15px',
    },
    select: {
        width: '200px',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px',
        appearance: 'none', // For modern look across browsers
    },
}