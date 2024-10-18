package com.fleet_managment_service.repo;

import com.fleet_managment_service.model.Booking;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface BookingRepository extends MongoRepository<Booking, String> {
    List<Booking> findByUserId(String userId);

    List<Booking> findByDriverId(String driverId);

    List<Booking> findByStatus(String status);
}
