package com.fleet_managment_service.utils;

import java.util.HashMap;

public class PriceEstimationEngineUtility {
    public static int estimatePrice(String pickupLocation, String dropLocation, String vehicleType) {
        HashMap<String, Integer> cityDistanceMap = new HashMap<>();
        cityDistanceMap.put("delhi", 10);
        cityDistanceMap.put("ghaziabad", 20);
        cityDistanceMap.put("noida", 30);
        cityDistanceMap.put("gurugram", 40);
        cityDistanceMap.put("bangalore", 90);
        cityDistanceMap.put("mumbai", 100);

        Integer distance = Math.abs(cityDistanceMap.get(pickupLocation.toLowerCase())
                - cityDistanceMap.get(dropLocation.toLowerCase()));

        Integer basefare = getBaseFareForVehicleType(vehicleType.toLowerCase());

        return distance * basefare + basefare;
    }

    private static int getBaseFareForVehicleType(String vehicleType) {
        return switch (vehicleType.toLowerCase()) {
            case "mini tempo" -> 80;
            case "tempo" -> 100;
            case "mini van" -> 150;
            case "van" -> 200;
            case "truck" -> 250;
            case "large truck" -> 400;
            default -> 100;
        };
    }
}
