"use client";

import React, { useEffect, useState } from "react";

const ReverseGeocoding = () => {

  let latitude = 8.6479156  ;
  let longitude = -82.9436736;

  const [latlng, setLatlng] = useState(`${latitude},${longitude}`);
  const [map, setMap] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);
  const [geocoder, setGeocoder] = useState(null);


    navigator.geolocation.getCurrentPosition((position) => {
      console.log("lat: ", position.coords.latitude, " lon: ", position.coords.longitude);
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
    });
  
  useEffect(() => {
    loadGoogleMapsScript();
  }, []);

  //* Coloca la posicion de la vista del mapa
  function initGoogleMaps() {
    window.initMap = () => {
      const mapElement = document.getElementById("map");
      const googleMap = new google.maps.Map(mapElement, {
        center: { lat: 9.93333, lng: -84.08333 }, // * Son las de CR
        zoom: 8,
      });
      const geocoderInstance = new google.maps.Geocoder(); //* Obtenemos la direccion con long y lat, o viceversa
      const infoWindowInstance = new google.maps.InfoWindow(); //* el mapita

      setMap(googleMap);
      setGeocoder(geocoderInstance);
      setInfoWindow(infoWindowInstance);
    };
  }

  //* Gepeto dió esto para porder cargar el mapa
  const loadGoogleMapsScript = () => {
    //* busca si hy script con la url de googlemaps
    const existingScript = document.querySelector(
      'script[src*="maps.googleapis.com/maps/api/js"]'
    );
    if (!existingScript) {
      console.log("Creando un script");
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=Key&callback=initMap&libraries=places`;
      script.defer = true;
      script.async = true;
      document.head.appendChild(script);

      script.addEventListener("load", () => {
        initGoogleMaps();
      });
    } else if (window.google && window.google.maps) {
      console.log("Iniciando el map");
      initGoogleMaps();
    } else {
      console.log("esperando que termine cargar");
      existingScript.addEventListener("load", initGoogleMaps());
    }
  };

  const handleGeocode = async () => {
    const latlngStr = latlng.split(",", 2);
    console.log("ho", latlngStr)
    const latlngObj = {
      lat: parseFloat(latlngStr[0]),
      lng: parseFloat(latlngStr[1]),
    };

    try {
      const response = await geocoder.geocode({ location: latlngObj });
      const marker = new google.maps.Marker({
        position: latlngObj,
        map: map,
      });

      map.setZoom(11);
      map.setCenter(latlngObj);
      infoWindow.setContent(response.results[0].formatted_address);
      console.log("dir: ", response.results[0].formatted_address); //* eta pal wasa
      infoWindow.open(map, marker);
    } catch (e) {
      window.alert(`Geocoder failed due to: ${e}`);
    }
  };

  return (
    <div>
      <div
        id="floating-panel"
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: "5",
          backgroundColor: "white",
          padding: "10px",
          border: "1px solid #999",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        }}
      >
        <input
          id="latlng"
          type="text"
          value={latlng}
          onChange={(e) => setLatlng(e.target.value)}
          style={{ width: "225px" }}
        />
        <input
          id="submit"
          type="button"
          value="Reverse Geocode"
          onClick={handleGeocode}
        />
      </div>
      <div id="map" style={{ height: "500px", width: "100%" }}></div>
    </div>
  );
};

export default ReverseGeocoding;
