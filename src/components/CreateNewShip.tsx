import { useState } from "react";
import apiService from "../assets/apiService";
import Item from "../interfaces/Item";

interface Props {
  change: (shipInfo: Item) => void;
}

const CreateNewShip = ({ change }: Props) => {
  const [shipInfo, setShipInfo] = useState({
    name: "",
    description: "",
    capacity: 0,
    color: "RED",
  });
  return (
    <>
      <div className="modal fade" tabIndex={-1} id="createShipModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create New Ship</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="nameInput">Name: </label>
              <input
                id="nameInput"
                type="text"
                placeholder="name"
                onChange={(event) => {
                  setShipInfo((prevShipInfo) => ({
                    ...prevShipInfo,
                    name: event.target.value,
                  }));
                }}
              />
              <br />
              <label htmlFor="descriptionInput">Description: </label>
              <input
                id="descriptionInput"
                type="text"
                placeholder="description"
                onChange={(event) => {
                  setShipInfo((prevShipInfo) => ({
                    ...prevShipInfo,
                    description: event.target.value,
                  }));
                }}
              />
              <br />
              <label htmlFor="capacityInput">Capacity: </label>
              <input
                id="capacityInput"
                type="number"
                min="1"
                max="1000"
                placeholder="capacity"
                onChange={(event) => {
                  setShipInfo((prevShipInfo) => ({
                    ...prevShipInfo,
                    capacity: event.target.valueAsNumber,
                  }));
                }}
              />
              <br />
              <label htmlFor="colorInput">Color: </label>
              <select
                name="colors"
                id="colors"
                onChange={(event) => {
                  setShipInfo((prevShipInfo) => ({
                    ...prevShipInfo,
                    color: event.target.value,
                  }));
                }}
              >
                <option value="RED">Red</option>
                <option value="ORANGE">Orange</option>
                <option value="YELLOW">Yellow</option>
                <option value="GREEN">Green</option>
                <option value="BLUE">Blue</option>
                <option value="INDIGO">Indigo</option>
                <option value="VIOLET">Violet</option>
                <option value="WHITE">White</option>
                <option value="BLACK">Black</option>
              </select>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={async () => {
                  console.log(shipInfo);
                  const response = await apiService.post("perahu", shipInfo);
                  if (response.statusCode == 400) {
                    console.log("We need better inputs bois");
                  } else {
                    console.log(response.perahu);
                  }
                  change(response.perahu);
                }}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewShip;
