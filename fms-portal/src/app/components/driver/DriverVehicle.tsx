import { Vehicle } from "@/lib/types/vehicleTypes";
import { getVehicleImageUrl } from "@/lib/utils/common";
import { Button, Grid } from "@mui/material";
import Image from "next/image";

interface DriverVehicleProps {
    vehicle : Vehicle,
}

export default function DriverVehicle({vehicle} : DriverVehicleProps) {
    return (
        <Grid item xs={12} md={6}>
            <div
                style={{    
                    width: "100%",
                    height: 200,
                    background: "#fff",
                    borderRadius: 10,
                    padding: 15,
                    border: "2px solid #ccc",
                }}
            >
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <div>
                        <div style={{ fontSize: 22 }}>{vehicle?.ownername}</div>
                        <div style={{ fontWeight: "lighter" }}>{vehicle?.number}</div>
                        <div>{vehicle?.vehicletype}</div>
                    </div>
                    <div>
                        <Image src={getVehicleImageUrl(vehicle.vehicletype ?? "")} alt={"Img"} height={100} width={150} />
                    </div>
                </div>
                <div style={{width : "100%", justifyContent: "center", display: "flex", marginTop: 5}}>
                    <Button variant="contained"> Modify Vehicle</Button>
                </div>
            </div>
        </Grid>
    );
}
