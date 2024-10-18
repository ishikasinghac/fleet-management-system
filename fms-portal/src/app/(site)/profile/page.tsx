import UserBookingList from "@/app/components/profile/UserBookingList";

export default function page() {
    return (
        <div style={{padding: 15}}>  
            <h2> User Bookings </h2>
            <UserBookingList />
        </div>
    )
}