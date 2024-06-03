import React from "react";
import { useState } from "react";
import { locationIcon } from "./assets/icons";
import { ReverseGeocoding } from "./MapsApi/ReverseGeocoding";
const data = [
  {
    label: "Numver",
    labelClassName: "number-label",
    className: "number",
    placeholder: "Numver",
    type: "number",
  },

  {
    label: "Messach",
    labelClassName: "message-label",
    className: "message",
    placeholder: "Messach",
    type: "",
  },

  {
    label: "Lokachon",
    labelClassName: "location-label",
    className: "location",
    placeholder: "Lokachon",
    type: "",
  },
];

const App = () => {
  let latitude, longitude;
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState("");
  const [direcction, setDirecction] = useState("");

  const position = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      console.log(
        "lat: ",
        position.coords.latitude,
        " lon: ",
        position.coords.longitude
      );
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      setDirecction(await ReverseGeocoding(latitude, longitude));
      console.log("direcction: ", direcction);
      setLocation(direcction.substring(direcction.indexOf(",") + 2));
    });
  };

  function sendData() {
    console.log("🚀 ~ App ~ number:", number);
    console.log("🚀 ~ App ~ message:", message);
    console.log("🚀 ~ App ~ location:", location);
    
  };

  return (

    <div>
      <div className="form-conteiner">
        <div className="form-content">
          <h1>WAMAPP</h1>
          <div className="inputs-conteiner">
            {data.map(({ label, className, placeholder, type }, index) => {
              return (
                <div key={index}>
                  <p className={`${className}-p`}>{label}</p>
                  {className === "message" ? (
                    <textarea
                      className={className}
                      placeholder={placeholder}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  ) : className === "location" ? (
                    <div className="location-conteiner">
                      <input
                        className={className}
                        placeholder={placeholder}
                        type={type}
                        value={location}
                        disabled
                      />
                      <button
                        className="get-location"
                        onClick={() => position()}
                      >
                        <img
                          src={locationIcon}
                          alt="location icon"
                          width={40}
                          height={40}
                        />
                      </button>
                    </div>
                  ) : (
                    <input
                      className={className}
                      placeholder={placeholder}
                      type={type}
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  )}
                </div>
              );
            })}

            <button className="send" onClick={() => sendData()}>
              ZENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
