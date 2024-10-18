package com.fleet_managment_service.service;

import com.fleet_managment_service.model.Booking;
import com.fleet_managment_service.model.CreateBookingRequest;
import com.fleet_managment_service.model.GetBookingRequest;

import java.util.List;
import java.util.Optional;

public interface BookingService {
    Booking createBooking(CreateBookingRequest createBookingRequest);

    Optional<Booking> getBookingById(String id);

    Booking updateBooking(Booking booking);

    List<Booking> getBookings(GetBookingRequest getBookingRequest);
}
