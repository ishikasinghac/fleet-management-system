package com.fleet_managment_service.model;

public class UpdateBookingRequest {

    private String id;
    private String status;

    public UpdateBookingRequest(String id, String status) {
        this.id = id;
        this.status = status;
    }

    public UpdateBookingRequest() {
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
