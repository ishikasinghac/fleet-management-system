package com.fleet_managment_service.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "bookings")
public class Booking {

  @Id
  private String id;

  private String username;
  private String drivername;
  private String userId;
  private String driverId;
  private Number estimatedAmount;
  private String time;
  private String pickupLocation;
  private String dropLocation;
  private String vehicleType;
  private String status;

  public Booking(String id, String username, String drivername, String userId, String driverId, Number estimatedAmount, String time, String pickupLocation, String dropLocation, String vehicleType, String status) {
    this.id = id;
    this.username = username;
    this.drivername = drivername;
    this.userId = userId;
    this.driverId = driverId;
    this.estimatedAmount = estimatedAmount;
    this.time = time;
    this.pickupLocation = pickupLocation;
    this.dropLocation = dropLocation;
    this.vehicleType = vehicleType;
    this.status = status;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getUserId() {
    return userId;
  }

  public void setUserId(String userId) {
    this.userId = userId;
  }

  public String getDriverId() {
    return driverId;
  }

  public void setDriverId(String driverId) {
    this.driverId = driverId;
  }

  public Number getEstimatedAmount() {
    return estimatedAmount;
  }

  public void setEstimatedAmount(Number estimatedAmount) {
    this.estimatedAmount = estimatedAmount;
  }

  public String getTime() {
    return time;
  }

  public void setTime(String time) {
    this.time = time;
  }

  public String getPickupLocation() {
    return pickupLocation;
  }

  public void setPickupLocation(String pickupLocation) {
    this.pickupLocation = pickupLocation;
  }

  public String getDropLocation() {
    return dropLocation;
  }

  public void setDropLocation(String dropLocation) {
    this.dropLocation = dropLocation;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public String getVehicleType() {
    return vehicleType;
  }

  public void setVehicleType(String vehicleType) {
    this.vehicleType = vehicleType;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getDrivername() {
    return drivername;
  }

  public void setDrivername(String drivername) {
    this.drivername = drivername;
  }

  public Booking() {
  }
}
