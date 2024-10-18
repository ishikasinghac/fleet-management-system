package com.fleet_managment_service.service.impl;

import com.fleet_managment_service.model.Booking;
import com.fleet_managment_service.model.CreateBookingRequest;
import com.fleet_managment_service.model.GetBookingRequest;
import com.fleet_managment_service.repo.BookingRepository;
import com.fleet_managment_service.service.BookingService;
import com.fleet_managment_service.utils.PriceEstimationEngineUtility;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class BookingServiceImpl implements BookingService {

    private final BookingRepository bookingRepository;

    public BookingServiceImpl(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    @Override
    public Booking createBooking(CreateBookingRequest createBookingRequest) {
        Booking booking = new Booking();
        booking.setUserId(createBookingRequest.getUserId());
        booking.setDriverId(createBookingRequest.getDriverId());
        booking.setDropLocation(createBookingRequest.getDropLocation());
        booking.setPickupLocation(createBookingRequest.getPickupLocation());
        booking.setVehicleType(createBookingRequest.getVehicleType());
        booking.setUsername(createBookingRequest.getUsername());
        booking.setDrivername(createBookingRequest.getDrivername());
        booking.setStatus("CREATED");

        int estimatedPrice = PriceEstimationEngineUtility.estimatePrice(
                createBookingRequest.getPickupLocation(),
                createBookingRequest.getDropLocation(),
                createBookingRequest.getVehicleType()
        );

        booking.setEstimatedAmount(estimatedPrice);

        Booking save = bookingRepository.save(booking);

        return save;
    }

    @Override
    public Optional<Booking> getBookingById(String id) {
        Optional<Booking> bookingOptional = bookingRepository.findById(id);
        return bookingOptional;
    }

    @Override
    public Booking updateBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    @Override
    public List<Booking> getBookings(GetBookingRequest getBookingRequest) {
        if(!Objects.equals(getBookingRequest.getUserId(), "")) {
            return bookingRepository.findByUserId(getBookingRequest.getUserId());
        }

        if(!Objects.equals(getBookingRequest.getDriverId(), "")) {
            return bookingRepository.findByDriverId(getBookingRequest.getDriverId());
        }

        if(!Objects.equals(getBookingRequest.getStatus(), "")) {
             return bookingRepository.findByStatus(getBookingRequest.getStatus());
        }

        return bookingRepository.findAll();
    }
}
