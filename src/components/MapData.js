import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useState, useEffect } from "react";
import Map, {
  Marker,
  NavigationControl,
  Popup,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";

// import { useState, React } from "react";

function MapData({ data }) {
  // const [lng] = useState(78.4602);
  // const [lat] = useState(17.3672);
  const [lng] = useState(78.4867);
  const [lat] = useState(17.385);
  const [showPopup, setShowPopup] = useState(true);
  const [popup, setPopup] = useState(null);
  return (
    <div className="App">
      <Map
        mapboxAccessToken="pk.eyJ1Ijoia2VlcnRoYW5hMTQiLCJhIjoiY2w5enNmdnp2MDFvYjNucDIxOGFycHV6cSJ9.iHCOeRSUPyvKWRIditZzQA"
        style={{
          width: 1150,
          height: 500,
          borderRadius: "0",
          border: "2px solid black",
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 12,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {data.map((item) => (
          <Marker longitude={item.longitude} latitude={item.latitude} />
        ))}
        {data.map((item) => (
          <Popup
            longitude={item.longitude}
            latitude={item.latitude}
            anchor="left"
            onClose={() => setShowPopup(false)}
          >
            <p className="mill_name">{item.HospitalName}</p>
            <p>Aarogya Sri Card : {item.AarogyaSriCard}</p>
            <a href={item.directionLink}>click</a>
            {/* <p> accepts aarogyashree </p> */}
          </Popup>
        ))}
        {/* {
          data.map((item1) => (  (<Marker longitude={item1.longitude} latitude={item1.latitide} />) ))
        }
        {
          data.map((item1) =>  (<Popup longitude={item1.longitude} latitude={item1.latitude}
                anchor="left"
                onClose={() => setShowPopup(false)}>
                <p className="mill_name">{item1.HospitalName}</p>
              </Popup>
          )
          )
        } */}

        {/* <Marker longitude={78.3026} latitude={17.5545} ></Marker> */}

        {/* <GeolocateControl /> */}

        <NavigationControl position="bottom-right" />
        <FullscreenControl />

        <GeolocateControl />
      </Map>
    </div>
  );
}

export default MapData;
