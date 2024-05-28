'use client'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useEffect, useState } from 'react';


const ReverseGeocoding = () => {

  if(true !== hola)

  // const [latlng, setLatlng] = useState('40.714224,-73.961452');
  // const [map, setMap] = useState(null);
  // const [infoWindow, setInfoWindow] = useState(null);
  // const [geocoder, setGeocoder] = useState(null);

  // useEffect(() => {
  //   // Load the Google Maps API script
  //   const script = document.createElement('script');
  //   script.src = `https://maps.googleapis.com/maps/api/js?key=INSERT_YOUR_API_KEY&callback=initMap&libraries=marker&v=beta&solution_channel=GMP_CCS_reversegeocoding_v2`;
  //   script.defer = true;
  //   document.head.appendChild(script);

  //   // Initialize the map and geocoder
  //   window.initMap = () => {
  //     const geocoderInstance = new google.maps.Geocoder();
  //     const mapElement = document.querySelector('gmp-map').innerMap;
  //     const infoWindowInstance = new google.maps.InfoWindow();

  //     setGeocoder(geocoderInstance);
  //     setMap(mapElement);
  //     setInfoWindow(infoWindowInstance);
  //   };
  // }, []);

  // const handleGeocode = async () => {
  //   const latlngStr = latlng.split(',', 2);
  //   const latlngObj = {
  //     lat: parseFloat(latlngStr[0]),
  //     lng: parseFloat(latlngStr[1]),
  //   };

  //   try {
  //     const response = await geocoder.geocode({ location: latlngObj });
  //     const marker = document.querySelector('gmp-advanced-marker');

  //     map.setZoom(11);
  //     marker.position = latlngObj;
  //     infoWindow.setContent(response.results[0].formatted_address);
  //     infoWindow.open({ anchor: marker });
  //   } catch (e) {
  //     window.alert(`Geocoder failed due to: ${e}`);
  //   }
  // };

  // return (
  //   <div>
  //     <gmp-map center="40.731,-73.997" zoom="8" map-id="DEMO_MAP_ID">
  //       <div id="floating-panel" slot="control-block-start-inline-center">
  //         <input
  //           id="latlng"
  //           type="text"
  //           value={latlng}
  //           onChange={(e) => setLatlng(e.target.value)}
  //           style={{ width: '225px' }}
  //         />
  //         <input
  //           id="submit"
  //           type="button"
  //           value="Reverse Geocode"
  //           onClick={handleGeocode}
  //         />
  //       </div>
  //       <gmp-advanced-marker></gmp-advanced-marker>
  //     </gmp-map>
  //   </div>
  // );
  <h1>Hola</h1>
};

export default ReverseGeocoding;