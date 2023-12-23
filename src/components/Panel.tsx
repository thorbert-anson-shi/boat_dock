import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  title: string;
}

const Panel = ({ children, title = "-" }: Props) => {
  const [buttonText, setButtonText] = useState("Send");
  const [isSailing, setAvailability] = useState(true);

  return (
    <>
      <div className="card align-items-center">
        <div className="card-body">
          <div className="card-title">
            <h5>{title}</h5>
          </div>

          <p>{children}</p>

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
                data-bs-whatever={title.slice(0, 5)}
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
