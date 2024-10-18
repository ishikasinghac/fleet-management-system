
export enum APICallState {
    IDLE = "idle",
    LOADING = "loading",
    SUCCEEDED = "succeeded",
    FAILED = "failed"
}

export enum UserType {
    DRIVER = "driver",
    USER = "user",
}

export enum VehicleType {
    MINI_TEMPO = "mini tempo",
    TEMPO = "tempo",
    MINI_VAN = "mini van",
    VAN = "van",
    TRUCK = "truck",
    LARGE_TRUCK = "large truck",
}

export enum BookingStatus {
    CREATED = "CREATED",
    ACCEPTED = "ACCEPTED",
    GOING_TO_PICK = "GOING_TO_PICK",
    PICKED = "PICKED",
    IN_TRANSIT = "IN_TRANSIT",
    OUT_FOR_DELIVERY = "OUT_FOR_DELIVERY",
    DELIVERED = "DELIVERED",
    COMPLETED = "COMPLETED",
    REJECTED = "REJECTED",
}

export const USER_ID = "user_id";
export const USER_EMAIL = "user_email";
export const USER_TYPE = "user_type";
export const USER_NAME = "user_name";


