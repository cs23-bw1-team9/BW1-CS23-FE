import React, { useState, useEffect } from "react";
import { Graph } from "react-d3-graph";


const Map = ({map, current, height, width}) => {
  const config = {
    focusedNodeId: current.id,
    focusAnimationDuration: 0,
    node: {
      symbolType: "square"
    }
  };
  return (
    <div className="graph-container">
      <Graph
        className="graph"
        id="dungeon-map"
        data={map}
        config={config}
      />
    </div>
  )
}

export default Map;
