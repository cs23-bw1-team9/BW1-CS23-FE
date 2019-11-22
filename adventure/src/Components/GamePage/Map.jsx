import React, { useState, useEffect } from "react";
import { Graph } from "react-d3-graph";


const Map = ({map, current}) => {
  const data = {
    ...map,
    focusedNodeId: current
  }
  const config = {
    staticGraph: true,
  };
  return (
    <div className="graph-container">
      <Graph
        className="graph"
        id="dungeon-map"
        data={data}
        config={config}
      />
    </div>
  )
}

export default Map;
