import Item from "../interfaces/Item";
import apiService from "../assets/apiService";

interface Props {
  data: Item;
}

const Panel = ({ data }: Props) => {
  return (
    <>
      <div
        className="card align-items-center"
        style={{ backgroundColor: data.is_sailing ? "red" : "#6060bd" }}
      >
        <div className="card-body">
          <div className="card-title">
            <h5>{data.name}</h5>
          </div>

          <div className="boat-info">
            <ul>
              <li>Description: {data.description}</li>
              <li>Capacity: {data.capacity}</li>
              <li>Color: {data.color}</li>
            </ul>
          </div>

          <div className="btn-group" role="group">
            <button className="btn btn-primary" onClick={() => {}}>
              {!data.is_sailing ? "Send" : "Retrieve"}
            </button>
            {!data.is_sailing ? (
              <>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#infoPanelModal"
                  data-bs-whatever={data.id}
                >
                  Edit
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    apiService.delete(`perahu/${data.id}`);
                  }}
                >
                  Delete
                </button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Panel;
