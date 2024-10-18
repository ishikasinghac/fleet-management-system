package com.fleet_managment_service.controller;


import com.fleet_managment_service.model.GetVehicleRequest;
import com.fleet_managment_service.model.Vehicle;
import com.fleet_managment_service.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/api/vehicle")
public class VehicleController {

  @Autowired
  private VehicleService vehicleService;

  @PostMapping("/add")
  public ResponseEntity<Vehicle> addVehicle(@RequestBody Vehicle vehicle){

    Vehicle save = vehicleService.addVehicle(vehicle);
    return ResponseEntity.ok(save);
  }

  @PostMapping("/get")
  public ResponseEntity<List<Vehicle>> getVehicles(@RequestBody GetVehicleRequest getVehicleRequest){
    System.out.println(getVehicleRequest.getVehicletype());

    if(!Objects.equals(getVehicleRequest.getVehicletype(), "")) {
      return ResponseEntity.ok(vehicleService.getVehicleByType(getVehicleRequest.getVehicletype()));
    }

    if(!Objects.equals(getVehicleRequest.getOwnerid(), "")) {
      return ResponseEntity.ok(vehicleService.getVehicleByOwner(getVehicleRequest.getOwnerid()));
    }

    return ResponseEntity.ok(vehicleService.getAllVehicle());
  }

  @PostMapping("/delete")
  public ResponseEntity<Vehicle> deleteVehicle(@RequestBody Vehicle vehicle){

    return ResponseEntity.ok(vehicle);
  }
}
