package com.fleet_managment_service.repo;

import com.fleet_managment_service.model.Vehicle;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface VehicleRepository extends MongoRepository<Vehicle, String> {
    List<Vehicle> findByVehicletype(String vehicletype);

    List<Vehicle> findByOwnerid(String ownerid);
}
