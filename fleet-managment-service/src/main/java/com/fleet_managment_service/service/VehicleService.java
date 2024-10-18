package com.fleet_managment_service.service;

import com.fleet_managment_service.model.Vehicle;

import java.util.List;

public interface VehicleService {

    Vehicle addVehicle(Vehicle vehicle);
    List<Vehicle> getAllVehicle();

    List<Vehicle> getVehicleByType(String vehicleType);

    List<Vehicle> getVehicleByOwner(String ownerid);
}
