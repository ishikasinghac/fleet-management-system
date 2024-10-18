package com.fleet_managment_service.controller;

import com.fleet_managment_service.model.Booking;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import com.fleet_managment_service.model.CreateBookingRequest;
import com.fleet_managment_service.model.GetBookingRequest;
import com.fleet_managment_service.model.UpdateBookingRequest;
import com.fleet_managment_service.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/booking")
public class BookingController {

  @Autowired
  private BookingService bookingService;

  @PostMapping("/create")
  public ResponseEntity<Booking> createBooking(@RequestBody CreateBookingRequest createBookingRequest){

    Booking booking = bookingService.createBooking(createBookingRequest);
    return ResponseEntity.ok(booking);

  }

  @PutMapping("/update")
  public ResponseEntity<Optional<Booking>> updateBooking(@RequestBody UpdateBookingRequest updateBookingRequest){
    Optional<Booking> booking = bookingService.getBookingById(updateBookingRequest.getId());

    if(booking.isPresent()) {
      Booking lastbooking = booking.get();
      lastbooking.setStatus(updateBookingRequest.getStatus());
      bookingService.updateBooking(lastbooking);
      return ResponseEntity.ok(booking);
    }

    return ResponseEntity.ok(Optional.empty());
  }

  @PostMapping("/get")
  public ResponseEntity<List<Booking>> getBookings(@RequestBody GetBookingRequest getBookingRequest) {
    List<Booking> bookings = bookingService.getBookings(getBookingRequest);

    return ResponseEntity.ok(bookings);
  }

  @PostMapping("/getByUserId")
  public ResponseEntity<List<Booking>> getByUserId(@RequestBody String userId){
    List<Booking> bookings = new ArrayList<>();
    return ResponseEntity.ok(bookings);
  }

  @PostMapping("/getByDriverId")
  public ResponseEntity<List<Booking>> getByDriverId(@RequestBody String userId){
    List<Booking> bookings = new ArrayList<>();
    return ResponseEntity.ok(bookings);
  }
}
