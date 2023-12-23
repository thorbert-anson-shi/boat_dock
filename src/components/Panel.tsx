import { useState } from "react";

interface Props {
  name: string;
  bought_at: string;
  updated_at: string;
  description: string;
}

const Panel = (props: Props) => {
  const [buttonText, setButtonText] = useState("Send");
  const [isSailing, setAvailability] = useState(true);

  return (
    <>
      <div className="card align-items-center">
        <div className="card-body">
          <div className="card-title">
            <h5>{props.name}</h5>
          </div>

          <div className="boat-info">
            <ul>
              <li>Bought at: {props.bought_at}</li>
              <li>Updated at: {props.updated_at}</li>
              <li>Description: {props.description}</li>
            </ul>
          </div>

          <div className="btn-group" role="group">
            <button
              className="btn btn-primary"
              onClick={() => {
                setAvailability(!isSailing);
                setButtonText(isSailing ? "Retrieve" : "Send");
              }}
            >
              {buttonText}
            </button>
            {isSailing && (
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever={props.name.slice(0, 5)}
              >
                Edit
              </button>
            )}
            <button className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Panel;
