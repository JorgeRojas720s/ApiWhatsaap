import React from "react";
import { locationIcon } from "./assets/icons";
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

 const position = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log("lat: ", position.coords.latitude, " lon: ", position.coords.longitude);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
  });
 }

  return (
    <div>
      <div className="form-conteiner">
        <div class="form-content">
          <h1>WAMAPP</h1>
          <div className="inputs-conteiner">
            {data.map(({ label, className, placeholder, type }) => {
              return (
                <div>
                  <p className={`${className}-p`}>{label}</p>
                  {className === "message" ? (
                    <textarea className={className} placeholder={placeholder} />
                  ) : className === "location" ? (
                    <div className="location-conteiner">
                      <input
                        className={className}
                        placeholder={placeholder}
                        type={type}
                        disabled
                      />
                      <button
                        className="get-location"
                        onClick={() => alert("get location")}
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
                    />
                  )}
                </div>
              );
            })}

            <button className="send" onClick={() => alert("zent")}>
              ZENT
            </button>
          </div>
        </div>
      </div>

    </div>
    
  );
};

export default App;
