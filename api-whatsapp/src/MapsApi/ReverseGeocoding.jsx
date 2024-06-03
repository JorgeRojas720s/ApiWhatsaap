// 'use client'

// import React from "react";


// export function ReverseGeocoding (latitude, longitude) {
  
//   let latlng = `${latitude},${longitude}`;
//   let geocoder;
//   let direction;

// const loadGoogleMapsScript = () => {
//   //* busca si hy script con la url de googlemaps
//   const existingScript = document.querySelector(
//     'script[src*="maps.googleapis.com/maps/api/js"]'
//   );
//   if (!existingScript) {
//     console.log("Creando un script");
//     const script = document.createElement("script");
//     script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDZ9Vho50731KbpOer3CRSc1nTHLBZMY5s&libraries=places`;
//     script.defer = true;
//     script.async = true;
//     document.head.appendChild(script);

//     script.addEventListener("load", () => {
//       initGeocodeInstance()
//       handleGeocode();
//     });
//   } else if (window.google && window.google.maps) {
//     console.log("Iniciando el map");
//     initGeocodeInstance()
//     handleGeocode();
//   } else {
//     console.log("esperando que termine cargar");
//     existingScript.addEventListener("load",initGeocodeInstance());
//     handleGeocode();
//   }
// };

// const initGeocodeInstance = () =>{
//   const geocoderInstance = new google.maps.Geocoder();
//   geocoder = geocoderInstance;
//   console.log('hr', geocoder)
// }

// const handleGeocode = async () => {
//   const latlngStr = latlng.split(",", 2);
//   console.log("ho", latlngStr)
//   const latlngObj = {
//     lat: parseFloat(latlngStr[0]),
//     lng: parseFloat(latlngStr[1]),
//   };

//   try {
//     const response = await geocoder.geocode({ location: latlngObj });

//     console.log("dir: ", response.results[0].formatted_address); //* eta pal wasa
//     direction = response.results[0].formatted_address;
//     return direction;
//   } catch (e) {
//     window.alert(`Geocoder failed due to: ${e}`);
//   }
// };

// loadGoogleMapsScript();
// };


import React from "react";
import {API_KEY} from "../../API_KEY"

export async function ReverseGeocoding(latitude, longitude) {
  let latlng = `${latitude},${longitude}`;
  let geocoder;
  let direction;

  const loadGoogleMapsScript = () => {
    return new Promise((resolve, reject) => {
      const existingScript = document.querySelector(
        'script[src*="maps.googleapis.com/maps/api/js"]'
      );
      if (!existingScript) {
        console.log("Creando un script");
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
        script.defer = true;
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
          resolve();
        };

        script.onerror = () => {
          reject(new Error("Google Maps script failed to load"));
        };
      } else if (window.google && window.google.maps) {
        console.log("Google Maps script already loaded");
        resolve();
      } else {
        console.log("esperando que termine cargar");
        existingScript.addEventListener("load", () => {
          resolve();
        });
      }
    });
  };

  const initGeocodeInstance = () => {
    geocoder = new google.maps.Geocoder();
    console.log("Geocoder initialized", geocoder);
  };

  const handleGeocode = async () => {
    const latlngStr = latlng.split(",", 2);
    console.log("latlngStr", latlngStr);
    const latlngObj = {
      lat: parseFloat(latlngStr[0]),
      lng: parseFloat(latlngStr[1]),
    };

    try {
      const response = await geocoder.geocode({ location: latlngObj });
      console.log("Address: ", response.results[0].formatted_address);
      direction = response.results[0].formatted_address;
      return direction;
    } catch (e) {
      window.alert(`Geocoder failed due to: ${e}`);
    }
  };

  await loadGoogleMapsScript();
  initGeocodeInstance();
  return await handleGeocode();
}
