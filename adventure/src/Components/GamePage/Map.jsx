import React, { useState, useEffect } from "react";
import { Graph } from "react-d3-graph";

const Map = ({ map, current, height, width }) => {
  const config = {
    staticGraph: true,
    staticGraphWithDragAndDrop: true,
    focusedNodeId: current.id,
    focusAnimationDuration: 1,
    node: {
      symbolType: "square"
    },
    d3: {
      alphaTarget: 0,
      gravity: -400,
      linkLength: 180,
      linkStrength: 1
    }
  };
  return (
    <div className="graph-container">
      <Graph className="graph" id="dungeon-map" data={map} config={config} />
    </div>
  );
};

export default Map;
