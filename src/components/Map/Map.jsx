import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Make sure to import this CSS file for Leaflet styles
import "./Map.scss"

const MapComponent = () => {
  const position = [51.505, -0.09]; // Initial coordinates (latitude, longitude)

  return (
    <>
      <div className="Map">
        <div className="head-sec">
            <div className="head-txt">
              <div>
                <b>More than 50,000 students has enrolled this year</b>
              </div>
            </div>  
          <div>
            <div className="box-1">
              <img src="/images/Group 1.svg" alt="icon1" />
              <div>
                <p>students</p>
                <b>150.000+</b>
              </div>
            </div>
            <div className="box-2">
              <img src="/images/Group 2.svg" alt="icon2" />
              <div>
                <p>Time Zones</p>
                <b>10+</b>
              </div>
            </div>
          </div>
        </div>
        <div className="map-section">
          <MapContainer
            center={position}
            zoom={13}
            style={{ width: "100%", height: "400px" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>A marker showing the location.</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default MapComponent;
