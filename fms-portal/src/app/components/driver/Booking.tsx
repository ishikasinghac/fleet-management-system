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

export default function Booking({ booking, page }: BookingProps) {
    const dispatch = useAppDispatch();
    const [status, setStatus] = useState("");

    useEffect(() => {
        setStatus(booking.status);
    }, []);

    // Handle dropdown value change
    const handleSelectChange = (e: any) => {
        setStatus(e.target.value);
        updateBookingStatus(booking.id, e.target.value);
    };

    const updateBookingStatus = (id : string, status : string) => {
        const requestData : UpdateBookingRequest = {
            id : id,
            status : status,
        }
        dispatch(updateBooking({requestData}));
    }

    function acceptBooking(booking: BookingType): void {
        updateBookingStatus(booking.id, BookingStatus.ACCEPTED)
        setStatus(BookingStatus.ACCEPTED);
    }

    function rejectBooking(booking: BookingType): void {
        updateBookingStatus(booking.id, BookingStatus.REJECTED)
        setStatus(BookingStatus.REJECTED);
    }

    return (
        <div style={{ border: "1px solid #ccc", borderRadius: 10, padding: 15 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginLeft: 30, marginRight: 30 }}>
                <div style={{ fontWeight: "bold" }}>
                    {
                        localStorage.getItem(USER_NAME) ?? ""
                    }
                </div>
                <div style={{ padding: 4, background: getColorMappingForStatus(status), borderRadius: 5, paddingLeft: 8, paddingRight: 8 }}>
                    {
                        status
                    }
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginLeft: 30, marginRight: 30 }}>
                <div>
                    <p> Pick-up Location</p>
                    <p style={{ fontSize: 20, fontWeight: "lighter" }}>
                        {booking.pickupLocation}
                    </p>
                </div>
                <div>
                    <p> Drop Location</p>
                    <p style={{ fontSize: 20, fontWeight: "lighter" }}>
                        {
                            booking.dropLocation
                        }
                    </p>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginLeft: 30, marginRight: 30 }}>
                <div>Estimated Price</div>
                <div>{booking.estimatedAmount}</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginLeft: 30, marginRight: 30 }}>
                <div>Vehicle Type</div>
                <div>{booking.vehicleType}</div>
            </div>
            {
                status === BookingStatus.CREATED
                    ? (
                        <div style={{ display: "flex", justifyContent: "space-evenly", marginLeft: 30, marginRight: 30, margin: 10 }}>
                            <div>
                                <Button variant="contained" color="primary" onClick={() => acceptBooking(booking)}>
                                    Accept
                                </Button>
                            </div>
                            <div>
                                <Button variant="contained" color="error" onClick={() => rejectBooking(booking)}>
                                    Reject
                                </Button>
                            </div>
                        </div>
                    ) : (
                        status !== BookingStatus.REJECTED &&
                        <div style={{ display: "flex", justifyContent: "space-evenly", marginLeft: 30, marginRight: 30, margin: 10 }}>
                            <h4 style={styles.header}>Update Status</h4 >
                            <div style={styles.inputGroup}>
                                <select
                                    id="status"
                                    value={status}
                                    onChange={handleSelectChange}
                                    style={styles.select}
                                    required
                                >
                                    <option value="" disabled>Status</option>
                                    {/* <option value={BookingStatus.CREATED}>{BookingStatus.CREATED}</option> */}
                                    <option value={BookingStatus.ACCEPTED}>{BookingStatus.ACCEPTED}</option>
                                    <option value={BookingStatus.GOING_TO_PICK}>{BookingStatus.GOING_TO_PICK}</option>
                                    <option value={BookingStatus.PICKED}>{BookingStatus.PICKED}</option>
                                    <option value={BookingStatus.IN_TRANSIT}>{BookingStatus.IN_TRANSIT}</option>
                                    <option value={BookingStatus.OUT_FOR_DELIVERY}>{BookingStatus.OUT_FOR_DELIVERY}</option>
                                    <option value={BookingStatus.DELIVERED}>{BookingStatus.DELIVERED}</option>
                                    <option value={BookingStatus.COMPLETED}>{BookingStatus.COMPLETED}</option>
                                </select>
                            </div>
                        </div>
                    )
            }
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