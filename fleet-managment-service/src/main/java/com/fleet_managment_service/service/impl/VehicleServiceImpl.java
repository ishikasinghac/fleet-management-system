package com.fleet_managment_service.service.impl;

import com.fleet_managment_service.model.Vehicle;
import com.fleet_managment_service.repo.VehicleRepository;
import com.fleet_managment_service.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleServiceImpl implements VehicleService {

    private final VehicleRepository vehicleRepository;

    @Autowired
    public VehicleServiceImpl(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }

    @Override
    public Vehicle addVehicle(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    @Override
    public List<Vehicle> getAllVehicle() {
        return vehicleRepository.findAll();
    }

    @Override
    public List<Vehicle> getVehicleByType(String vehicletype) {
        List<Vehicle> vehicles = vehicleRepository.findByVehicletype(vehicletype);
        return vehicles;
    }

    @Override
    public List<Vehicle> getVehicleByOwner(String ownerid) {
        List<Vehicle> vehicles = vehicleRepository.findByOwnerid(ownerid);
        return vehicles;
    }
}
