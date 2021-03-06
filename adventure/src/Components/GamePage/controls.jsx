import React from "react";

function Controls({ e, ...props }) {
  return (
    <div className="controls-container">
      <h3 className="hub-right-heading">Controls</h3>
      <div className="controls-buttons">
        <div className="direction-controls">
          <button
            className=" direction-button"
            onClick={e => props.move(e, "n")}
          >
            N
          </button>

          <button
            className=" direction-button"
            onClick={e => props.move(e, "e")}
          >
            E
          </button>
          <button
            className=" direction-button"
            onClick={e => props.move(e, "w")}
          >
            W
          </button>
          <button
            className=" direction-button"
            onClick={e => props.move(e, "s")}
          >
            S
          </button>
        </div>
      </div>
    </div>
  );
}
export default Controls;
