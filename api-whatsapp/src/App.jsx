import React from "react";

const App = () => {
  return (
    <div>
      {/* <img src="./assets/images/APIbgAll.jpg" /> */}
      <div className="form-conteiner">
        <input className="number" placeholder="Numver" type="number" />
        <textarea className="message" placeholder="Messach" />
        <div>
          <input className="location" readOnly placeholder="Lokachon" />
          <button
            className="get-location"
            onClick={() => alert("get-location")}
          ></button>
        </div>
        <button className="send" onClick={() => alert("zent")}></button>
      </div>
    </div>
  );
};

export default App;
