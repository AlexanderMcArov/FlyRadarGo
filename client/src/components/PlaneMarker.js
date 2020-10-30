import React from 'react';
import { Marker } from 'react-leaflet';

const PlaneMarker = ({ plane,setSelectedPlane }) => {
    // const icao24 = plane[0];
    const lon = plane[5];
    const lat = plane[6];

    return <Marker position={[lat, lon]} onclick = {() => setSelectedPlane(plane)}>
        {/* <Popup> */}
            {/* <ul>
                {callsign && callsign.length > 0  && (
                    <li><b>Callsign:</b>
                        {callsign}
                    </li>
                )}
                {origin && (
                    <li><b>Origin:</b>
                        {origin}
                    </li>
                )}

                {baro && (
                    <li><b>Altitude:</b>
                        {Math.round (baro)} m
                    </li>
                )}

                  {velocity && (
                    <li><b>Velocity:</b>
                        {Math.round (velocity * 3.6)} k/h 
                        <br/>
                        {Math.round(velocity * 1.944)} knots
                    </li>
                    )}

                     {track && (
                    <li><b>Heading:</b>
                        {Math.round (track)}° 
                    </li>
                    )}

                    {verticalRate && (
                    <li><b>Climb speed:</b>
                        {verticalRate ? Math.round (verticalRate * 60) : ""} meters/min
                    </li>
                    )}

             <li><b>{onGround ? "On ground" : "In air"}</b></li>
            </ul> */}
        {/* </Popup>  */}
    </Marker>
}
export default PlaneMarker;

