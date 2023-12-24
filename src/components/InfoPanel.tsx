import { useState } from "react";
import Item from "../interfaces/Item.tsx";
import apiService from "../assets/api_calls.ts";

interface Props {
  shipList: Item[];
}

const InfoPanel = ({ shipList }: Props) => {
  const [shipInfo, setShipInfo] = useState<Item>({
    name: "",
    bought_at: "",
    updated_at: "",
    description: "",
    capacity: 0,
    color: "RED",
    is_sailing: false,
  });
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Modal title
            </h1>
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
            <label htmlFor="buyDateInput">Date bought: </label>
            <input
              id="buyDateInput"
              type="date"
              placeholder="bought at"
              onChange={(event) => {
                setShipInfo((prevShipInfo) => ({
                  ...prevShipInfo,
                  bought_at: event.target.value,
                }));
              }}
            />
            <br />
            <label htmlFor="updateDateInput">Last updated: </label>
            <input
              id="updateDateInput"
              type="date"
              placeholder="updated at"
              onChange={(event) => {
                setShipInfo((prevShipInfo) => ({
                  ...prevShipInfo,
                  updated_at: event.target.value,
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
                await apiService.post("perahu", shipInfo);
              }}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
