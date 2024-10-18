"use client";

import { useState } from 'react';
import Vehicle from '../vehicle/Vehicle';
import { GetVehicleRequest } from '@/lib/types/vehicleTypes';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/hooks';
import { getVehicle, selectGetVehicleData } from '@/lib/redux/slices/vehicle/GetVehicleSlice';

const BookVehicle = () => {
    const dispatch = useAppDispatch();
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropLocation, setDropLocation] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Pickup Location:', pickupLocation);
        console.log('Drop Location:', dropLocation);
        console.log('Vehicle Type:', vehicleType);
        const requestData : GetVehicleRequest = {
            vehicletype : vehicleType ?? "",
            ownerid : ""
        }

        dispatch(getVehicle({requestData}));
    };

    const vehicleDataAtPage = useAppSelector((state) => selectGetVehicleData(state));

    const dataAtPage = [
        {
            ownerName: "Sanjay Singh",
            vehicleNumber: "DL 01 CS 2424",
            vehicleType: "Tempo",
            estimatedPrice: "5000"
        },
        {
            ownerName: "Sanjay Singh",
            vehicleNumber: "DL 01 CS 2424",
            vehicleType: "Tempo",
            estimatedPrice: "5000"
        },
        {
            ownerName: "Sanjay Singh",
            vehicleNumber: "DL 01 CS 2424",
            vehicleType: "Tempo",
            estimatedPrice: "5000"
        },
        {
            ownerName: "Sanjay Singh",
            vehicleNumber: "DL 01 CS 2424",
            vehicleType: "Tempo",
            estimatedPrice: "5000"
        },
        {
            ownerName: "Sanjay Singh",
            vehicleNumber: "DL 01 CS 2424",
            vehicleType: "Tempo",
            estimatedPrice: "5000"
        },
        {
            ownerName: "Sanjay Singh",
            vehicleNumber: "DL 01 CS 2424",
            vehicleType: "Tempo",
            estimatedPrice: "5000"
        },
        {
            ownerName: "Sanjay Singh",
            vehicleNumber: "DL 01 CS 2424",
            vehicleType: "Tempo",
            estimatedPrice: "5000"
        },
        {
            ownerName: "Sanjay Singh",
            vehicleNumber: "DL 01 CS 2424",
            vehicleType: "Tempo",
            estimatedPrice: "5000"
        },
    ]

    return (
        <div style={styles.container}>
            <div style={{ width: "40%", border: "1px solid #ccc", height: "80vh"}}>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label htmlFor="pickup" style={styles.label}>Pickup Location</label>
                        <select
                            id="pickup"
                            value={pickupLocation}
                            onChange={(e) => setPickupLocation(e.target.value)}
                            style={styles.select}
                            required
                        >
                            <option value="" disabled>Select pickup location</option>
                            <option value="delhi">Delhi</option>
                            <option value="noida">Noida</option>
                            <option value="ghaziabad">Ghaziabad</option>
                            <option value="gurugram">Gurugram</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="mumbai">Mumbai</option>
                        </select>
                    </div>

                    <div style={styles.inputGroup}>
                        <label htmlFor="drop" style={styles.label}>Drop Location</label>
                        <select
                            id="drop"
                            value={dropLocation}
                            onChange={(e) => setDropLocation(e.target.value)}
                            style={styles.select}
                            required
                        >
                            <option value="" disabled>Select pickup location</option>
                            <option value="delhi">Delhi</option>
                            <option value="noida">Noida</option>
                            <option value="ghaziabad">Ghaziabad</option>
                            <option value="gurugram">Gurugram</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="mumbai">Mumbai</option>
                        </select>
                    </div>

                    <div style={styles.inputGroup}>
                        <label htmlFor="vehicle" style={styles.label}>Vehicle Type</label>
                        <select
                            id="vehicle"
                            value={vehicleType}
                            onChange={(e) => setVehicleType(e.target.value)}
                            style={styles.select}
                            required
                        >
                            <option value="" disabled>Select vehicle type</option>
                            <option value="mini tempo">Mini Tempo</option>
                            <option value="tempo">Tempo</option>
                            <option value="mini van">Mini Van</option>
                            <option value="van">Van</option>
                            <option value="truck">Truck</option>
                            <option value="large truck">Large Truck</option>
                        </select>
                    </div>

                    <button type="submit" style={styles.button}>Search</button>
                </form>
            </div>
            <div style={{ width: "55%", border: "1px solid #ccc", height: "80vh"}}>
                <h2 style={{ width: "100%", textAlign: "center"}}>
                    Vehicles
                </h2>
                <div style={{ width: "100%",height: "70vh", 
                overflowY: "auto", display: "flex", padding: 15,
                flexDirection: "column", gap: 10,
                }}>
                        {
                            vehicleDataAtPage &&
                            vehicleDataAtPage.map((vehicle) => (
                                <Vehicle 
                                    vehicle={vehicle} 
                                    pickupLocation={pickupLocation}
                                    dropLocation={dropLocation}
                                />
                            ))
                        }
                        {
                            vehicleDataAtPage.length === 0 
                            && <> No vehicle for this request or Search by filling details</>
                        }
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        width: "100%",
    },
    form: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        width: '100%',
        
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    inputGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
    },
    select: {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '16px',
        appearance: 'none', 
    },
    button: {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
    },
}

export default BookVehicle;
