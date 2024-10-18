package com.fleet_managment_service.model;

public class CreateBookingRequest {
    private String pickupLocation;
    private String dropLocation;
    private String vehicleType;
    private String userId;
    private String driverId;

    private String username;
    private String drivername;

    public CreateBookingRequest(String pickupLocation, String dropLocation, String vehicleType, String userId, String driverId, String username, String drivername) {
        this.pickupLocation = pickupLocation;
        this.dropLocation = dropLocation;
        this.vehicleType = vehicleType;
        this.userId = userId;
        this.driverId = driverId;
        this.username = username;
        this.drivername = drivername;
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

    public CreateBookingRequest() {
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

    @Override
    public String toString() {
        return "CreateBookingRequest{" +
                "pickupLocation='" + pickupLocation + '\'' +
                ", dropLocation='" + dropLocation + '\'' +
                ", vehicleType='" + vehicleType + '\'' +
                ", userId='" + userId + '\'' +
                ", driverId='" + driverId + '\'' +
                '}';
    }
}
