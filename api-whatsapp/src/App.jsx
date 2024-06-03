import React from "react";
import ReverseGeocoding from './MapsApi/ReverseGeocoding'

const App = () => {

 const position = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log("lat: ", position.coords.latitude, " lon: ", position.coords.longitude);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
  });
 }

  return (
    <ReverseGeocoding/>
    // <div>
    //   <div className="form-conteiner">
    //     <input className="number" placeholder="Numver" type="number" />
    //     <textarea className="message" placeholder="Messach" />
    //     <div>
    //       <input className="location" readOnly placeholder="Lokachon" />
    //       <button
    //         className="get-location"
    //         onClick={() => alert("get-location")}
    //       ></button>
    //     </div>
    //     <button className="send" onClick={() => position}></button>
    //   </div>

    // </div>
    
  );
};

export default App;
