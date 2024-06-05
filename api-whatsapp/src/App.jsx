import React, { useEffect, useState } from "react";
import { locationIcon } from "./assets/icons";
import { ReverseGeocoding } from "./MapsApi/ReverseGeocoding";

// const runScript = require("runscript");

const data = [
  {
    label: "Number",
    labelClassName: "number-label",
    className: "number",
    placeholder: "Number",
    type: "number",
  },
  {
    label: "Message",
    labelClassName: "message-label",
    className: "message",
    placeholder: "Message",
    type: "",
  },
  {
    label: "Location",
    labelClassName: "location-label",
    className: "location",
    placeholder: "Location",
    type: "",
  },
];

const App = () => {
  let latitude, longitude;
  const [telphone, setTelphone] = useState("");
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState("");
  const [direction, setDirection] = useState("");

  
  // useEffect(() => {
  //   runScript("node -v", { stdio: "pipe" })
  //     .then((stdio) => {
  //       console.log(stdio);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  const position = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      const dir = await ReverseGeocoding(latitude, longitude);
      setDirection(dir);
      setLocation(dir.substring(dir.indexOf(",") + 2));
    });
  };

  const sendData = async () => {
    const payload = {
      tel: telphone,
      message: message,
      location: location,
    };

    try {
      const response = await fetch("/api/enviarMensaje", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success) {
        alert("Mensaje Enviadoo");
      } else {
        alert("Fallo en el envio");
      }
    } catch (error) {
      console.error("Error : ", error);
      alert("Ocuirro un error");
    }
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
                      value={telphone}
                      onChange={(e) => setTelphone(e.target.value)}
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
