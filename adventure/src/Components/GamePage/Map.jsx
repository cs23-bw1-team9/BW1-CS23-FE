import React, { useState, useEffect } from "react";
import { Graph } from "react-d3-graph";

const Map = ({ map, current, height, width }) => {
  const config = {
    staticGraph: true,
    staticGraphWithDragAndDrop: true,
    nodeHighlightBehavior: true,
    maxZoom: 0.63,
    minZoom: 0.63,

    node: {
      symbolType: "square"
    },
    d3: {
      linkLength: 180,
      linkStrength: 3
    }
  };

  return (
    <div className="graph-container">
      <Graph className="graph" id="dungeon-map" data={map} config={config} />
    </div>
  );
};

export default Map;
