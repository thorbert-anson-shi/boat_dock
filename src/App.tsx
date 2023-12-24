import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

import "./App.css";

import InfoPanel from "./components/InfoPanel";
import Panel from "./components/Panel";
import Item from "./interfaces/Item";

import React, { useEffect, useState } from "react";
import CreateNewShip from "./components/CreateNewShip";
import apiService from "./assets/apiService";

function App() {
  const [shipList, setShipList] = useState<Item[]>([]);

  const handleCreate = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log("I have been created");
  };

  return (
    <>
      <CreateNewShip />
      <InfoPanel />
      <div className="parallax">
        <div className="hero parallax__layer--back snap-anchor">
          <h1 style={{ fontSize: "10rem" }}>waves</h1>
          <h5 style={{ fontSize: "4rem" }}>
            Manage your ships and make sure they're in ship shape!
          </h5>
        </div>

        <div className="bg parallax__layer--base snap-anchor">
          <div className="wave">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <div className="container text-left">
            <div className="row row-cols-12 justify-content-center">
              {shipList.length > 0 &&
                shipList.map((item) => (
                  <div className="col-md-3" key={item.id}>
                    <Panel data={item}></Panel>
                  </div>
                ))}
              {shipList.length == 0 && <h1>Nothing to see here...</h1>}
            </div>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#createShipModal"
              id="plus_button"
              onClick={(event) => handleCreate(event)}
            >
              <i className="fa fa-plus-square-o" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
