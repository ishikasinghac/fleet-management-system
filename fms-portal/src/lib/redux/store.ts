import { configureStore } from '@reduxjs/toolkit'
import RegisterUserSlice from './slices/auth/RegisterUserSlice';
import LoginUserSlice from './slices/auth/LoginUserSlice';
import AddVehicleSlice from './slices/vehicle/AddVehicleSlice';
import GetVehicleSlice from './slices/vehicle/GetVehicleSlice';
import CreateBookingSlice from './slices/booking/CreateBookingSlice';
import GetBookingSlice from './slices/booking/GetBookingSlice';
import UpdateBookingSlice from './slices/booking/UpdateBookingSlice';

const store = configureStore({
  reducer: {
    registerUserSlice: RegisterUserSlice,
    loginUserSlice: LoginUserSlice,
    addVehicleSlice: AddVehicleSlice,
    getVehicleSlice: GetVehicleSlice,
    createBookingSlice: CreateBookingSlice,
    getBookingSlice: GetBookingSlice,
    updateBookingSlice: UpdateBookingSlice,
  },
})

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

