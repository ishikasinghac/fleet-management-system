"use client";

import { Grid } from "@mui/material"
import DriverVehicle from "./DriverVehicle"
import { useEffect, useState } from "react";
import { AddVehicleRequest, GetVehicleRequest, Vehicle } from "@/lib/types/vehicleTypes";
import { USER_ID, USER_NAME } from "@/lib/constants";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";
import { addVehicle } from "@/lib/redux/slices/vehicle/AddVehicleSlice";
import { getVehicle, selectGetVehicleData } from "@/lib/redux/slices/vehicle/GetVehicleSlice";
import { useRouter } from "next/navigation";

export default function DriverProfile() {
    const dispatch = useAppDispatch();
    const [add, setAdd] = useState<boolean>(false);
    const dataAtPage = useAppSelector((state) => selectGetVehicleData(state));
    const router = useRouter();

    useEffect(() => {
        const vehicleRequestData : GetVehicleRequest = {
            vehicletype : "",
            ownerid : localStorage.getItem(USER_ID) ?? ""
        }
        
        dispatch(getVehicle({requestData : vehicleRequestData}));

    }, [add]);

    

    const [vehicleNumber, setVehicleNumber] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Vehicle Number:', vehicleNumber);
        console.log('Vehicle Type:', vehicleType);
        
        const requestData : AddVehicleRequest = {
            ownername : localStorage.getItem(USER_NAME) ?? "User",
            ownerid : localStorage.getItem(USER_ID) ?? "UserId",
            vehicletype : vehicleType,
            number : vehicleNumber,
        }
        
        dispatch(addVehicle({requestData})).then(
            () => {
                setAdd(true);
                setVehicleNumber("");
                setVehicleType("");
            }
        );
        
    };

    return (
        <div style={{
            padding: 10, width: "100%",
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{ width: "100%", background: "#ccc", alignItems: "center", padding: 10, display: "flex", borderRadius: 10}}>
                <div style={{ width: "40%", display: "flex", justifyContent: "space-evenly", paddingTop: 10, gap: 20 }}>
                    <div>
                        <h3>
                            Name :
                            Sanjay Singh
                        </h3>
                        <h3>
                            Email :
                            sanjay@abc.com
                        </h3>
                    </div>
                    <div>
                        <h3>
                            Total Earnings Today :
                            1000 Rs
                        </h3>
                        <h3>
                            Total Earning Month :
                            25000 Rs
                        </h3>
                    </div>
                </div>
                <div style={{ width: "60%" }}>
                    <div style={styles.container}>
                        <h2 style={styles.title}>Add Vehicle</h2>
                        <form onSubmit={handleSubmit} style={styles.form}>
                            <label htmlFor="vehicleNumber" style={styles.label}>Vehicle Number:</label>
                            <input
                                type="text"
                                id="vehicleNumber"
                                name="vehicleNumber"
                                placeholder="DL 01 XX 0000"
                                value={vehicleNumber}
                                onChange={(e) => setVehicleNumber(e.target.value)}
                                required
                                style={styles.input}
                            />

                            <label htmlFor="vehicleType" style={styles.label}>Vehicle Type:</label>
                            <select
                                id="vehicleType"
                                name="vehicleType"
                                value={vehicleType}
                                onChange={(e) => setVehicleType(e.target.value)}
                                required
                                style={styles.select}
                            >
                                <option value="" disabled>Select vehicle type</option>
                                <option value="mini tempo">Mini Tempo</option>
                                <option value="tempo">Tempo</option>
                                <option value="mini van">Mini Van</option>
                                <option value="van">Van</option>
                                <option value="truck">Truck</option>
                                <option value="large truck">Large Truck</option>
                            </select>

                            {/* Submit Button */}
                            <button type="submit" style={styles.button}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            <div style={{ width: "100%", background: "#ccc", alignItems: "center", padding: 15, marginTop: 20, borderRadius: 10}}>
                <h2>
                    List Of Vehicles
                </h2>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                        dataAtPage.map((vehicle) => (
                            <DriverVehicle vehicle={vehicle}/>
                        ))
                    }
                </Grid>
            </div>
        </div>
    )
}


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        width: '300px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
    },
    title: {
        marginBottom: '20px',
        fontSize: '24px',
        fontWeight: 'bold',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    label: {
        marginBottom: '8px',
        fontSize: '14px',
    },
    input: {
        padding: '8px',
        marginBottom: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '14px',
    },
    select: {
        padding: '8px',
        marginBottom: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '14px',
    },
    button: {
        padding: '10px 15px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        transition: 'background-color 0.3s ease',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    }
};