import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

import "./App.css";

import InfoPanel from "./components/InfoPanel";
import Panel from "./components/Panel";
import Item from "./interfaces/Item";

import { useEffect, useState } from "react";
import CreateNewShip from "./components/CreateNewShip";
import apiService from "./assets/api_calls";

function App() {
  const [shipList, setShipList] = useState<Item[]>([]);

  const newShip: Item = {
    name: "Thorbert",
    bought_at: "date1",
    updated_at: "date2",
    description: "big boat",
    color: "BLACK",
    capacity: 100,
    is_sailing: false,
  };

  useEffect(() => {
    setShipList(shipList.concat(newShip));
    console.log(apiService.get("perahu"));
  }, []);
  return (
    <>
      <CreateNewShip />
      <InfoPanel shipList={shipList} />
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
                  <div className="col-md-3" key={item.name.toLowerCase()}>
                    <Panel
                      name={item.name.toUpperCase()}
                      bought_at={item.bought_at}
                      updated_at={item.updated_at}
                      description={item.description}
                    ></Panel>
                  </div>
                ))}
              {shipList.length == 0 && <h1>Nothing to see here...</h1>}
            </div>
            <button id="plus_button">
              <i className="fa fa-plus-square-o"></i>
            </button>
          </div>
        </div>
      </div>
      {/* <script src="./assets/api_calls.ts"></script> */}
    </>
  );
}

export default App;
