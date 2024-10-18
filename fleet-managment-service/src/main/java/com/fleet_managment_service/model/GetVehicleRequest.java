package com.fleet_managment_service.model;

public class GetVehicleRequest {
    private String vehicletype;

    private String ownerid;

    public GetVehicleRequest(String vehicletype, String ownerid) {
        this.vehicletype = vehicletype;
        this.ownerid = ownerid;
    }

    public GetVehicleRequest() {
    }

    public String getVehicletype() {
        return vehicletype;
    }

    public void setVehicletype(String vehicletype) {
        this.vehicletype = vehicletype;
    }

    public String getOwnerid() {
        return ownerid;
    }

    public void setOwnerid(String ownerid) {
        this.ownerid = ownerid;
    }
}
