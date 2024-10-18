import { APICallState, UserType } from "../constants"

export type RegisterUserRequest = {
    username : string,
    email : string,
    password : string,
    usertype : UserType
}

export type RegisterUserResponse = {
    msg : string
}

export type RegisterUserInitialState = {
    status : APICallState,
    error : unknown,
    data : RegisterUserResponse,
}

export type LoginUserRequest = {
    email : string,
    password: string,
}

export type LoginUserResponse = {
    id : string,
    username : string, 
    email : string,
    usertype : string,
}

export type LoginUserInitialState = {
    status : APICallState,
    error : unknown,
    data : LoginUserResponse,
}