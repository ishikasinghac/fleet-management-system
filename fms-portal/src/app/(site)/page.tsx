import VehicleList from "../components/vehicle/VehicleList";

export default function Home() {
  return (
    <div style={{ margin: 20 }}>
      <h3>
        All vehicles
      </h3>
      <VehicleList vehicletype=""/>
    </div>
  );
}