import Panel from "./components/Panel";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

import "./App.css";
import InfoPanel from "./components/InfoPanel";

function App() {
  let items = [
    {
      name: "Thorbert",
      bought_at: "24/5/2005",
      updated_at: "30/4/2023",
      description: "big phat boat",
    },
  ];

  return (
    <>
      <InfoPanel />
      <div className="parallax">
        <div className="hero parallax__layer--back">
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
              {items.map((item) => (
                <div className="col-md-3" key={item.name.toLowerCase()}>
                  <Panel
                    name={item.name.toUpperCase()}
                    bought_at={item.bought_at}
                    updated_at={item.updated_at}
                    description={item.description}
                  ></Panel>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <script src="./assets/snippets.js"></script>
    </>
  );
}

export default App;
