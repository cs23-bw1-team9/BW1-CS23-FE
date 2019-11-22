import React, { useState, useEffect } from "react";
import { Graph } from "react-d3-graph";

const Map = ({ map, current, height, width }) => {
  const config = {
    panAndZoom: false,
    staticGraph: true,
    staticGraphWithDragAndDrop: true,
    nodeHighlightBehavior: true,
    maxZoom: 0.5,
    minZoom: 0.5,
    focusedNodeId: current.id,
    focusAnimationDuration: 1,
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
