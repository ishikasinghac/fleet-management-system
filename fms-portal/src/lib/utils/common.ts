import { BookingStatus, VehicleType } from "../constants";

export function getVehicleImageUrl(vehicletype : string) {
    switch (vehicletype) {
        case VehicleType.MINI_TEMPO:
            return "/mini_tempo.jpeg"
        case VehicleType.TEMPO:
            return "/tempo.webp"
        case VehicleType.MINI_VAN:
            return "/mini_van.jpeg"
        case VehicleType.VAN:
            return "/van.png"
        case VehicleType.TRUCK:
            return "/truck.jpeg"
        case VehicleType.LARGE_TRUCK:
            return "/large_truck.jpeg"
        default:
            return "/default.jpeg";
    }
}

export function getColorMappingForStatus(status : string){
    switch (status) {
        case BookingStatus.CREATED:
            return "#edbb99";
        case BookingStatus.ACCEPTED:
            return "#fad7a0";
        case BookingStatus.COMPLETED:
            return "#27ae60";
        case BookingStatus.REJECTED:
            return "#e74c3c";
        default:
            return "#f9e79f";
    }
}