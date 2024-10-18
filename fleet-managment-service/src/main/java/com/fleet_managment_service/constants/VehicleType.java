package com.fleet_managment_service.constants;

public enum VehicleType {
    MINI_TEMPO("Mini Tempo"),
    TEMPO("Tempo"),
    MINI_VAN("Mini Van"),
    VAN("Van"),
    TRUCK("Truck"),
    LARGE_TRUCK("Large Truck");


    private final String type;

    VehicleType(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
}
