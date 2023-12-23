import Panel from "./components/Panel";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

import "./App.css";
import InfoPanel from "./components/InfoPanel";

function App() {
  let items = [
    "thorbert",
    "anson",
    "shi",
    "tober",
    "ski",
    "helohelo",
    "haihai",
    "felicia",
    "alana",
  ];

  return (
    <>
      <div className="hero">
        <h1>waves</h1>
        <h5>Manage your ships and make sure they're in ship shape!</h5>
      </div>
      <InfoPanel />
      <div className="bg">
        <div className="container text-left">
          <div className="row row-cols-12 justify-content-center">
            {items.map((item) => (
              <div className="col-md-3" key={item.toLowerCase()}>
                <Panel title={item.toUpperCase()}>{item}</Panel>
              </div>
            ))}
          </div>
        </div>
      </div>
      <script src="./assets/snippets.js"></script>
    </>
  );
}

export default App;
