import { APICallState } from "../constants"

export type AddVehicleRequest = {
    ownername : string,
    number: string,
    vehicletype : string,
    ownerid: string,
}

export type AddVehicleResponse = {
    id : string,
    ownername : string,
    number: string,
    vehicletype : string,
    ownerid: string,
}

export type AddVehicleInitialState = {
    status : APICallState,
    error : unknown,
    data : AddVehicleResponse
}

export type GetVehicleRequest = {
    vehicletype : string,
    ownerid : string,
}

export type Vehicle = {
    ownername : string,
    number : string,
    ownerid : string,
    vehicletype: string,
}

export type GetVehicleResponse = Vehicle[];

export type GetVehicleInitialState = {
    data : GetVehicleResponse,
    status : APICallState,
    error : unknown,
}