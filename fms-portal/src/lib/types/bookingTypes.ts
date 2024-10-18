import { APICallState } from "../constants"

export type CreateBookingRequest = {
    pickupLocation: string,
    dropLocation: string,
    vehicleType: string,
    userId: string,
    driverId: string,
    username: string,
    drivername: string,
}

export type Booking = {
    id: string,
    userId: string,
    driverId: string,
    estimatedAmount: string,
    time: string,
    pickupLocation: string,
    dropLocation: string,
    vehicleType: string,
    status: string,
    drivername: string,
    username: string,
}

export type CreateBookingIntialState = {
    data: unknown,
    status: APICallState,
    error: unknown,
}

export type GetBookingRequest = {
    userId: string,
    driverId: string,
    status: string,
}

export type GetBookingResponse = Booking[];

export type GetBookingInitialResponse = {
    data: Booking[],
    status: APICallState,
    error: unknown,
}

export type UpdateBookingRequest = {
    id: string,
    status: string,
}