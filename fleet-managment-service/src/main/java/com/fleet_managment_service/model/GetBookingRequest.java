package com.fleet_managment_service.model;

public class GetBookingRequest {
    private String userId;
    private String driverId;
    private String status;

    public GetBookingRequest(String userId, String driverId, String status) {
        this.userId = userId;
        this.driverId = driverId;
        this.status = status;
    }

    public GetBookingRequest() {
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
