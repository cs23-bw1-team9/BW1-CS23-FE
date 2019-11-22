import React, { useState, useEffect } from "react";
import { Graph } from "react-d3-graph";

const Map = ({ map, current, height, width }) => {
  const config = {
    focusedNodeId: current.id,
    focusAnimationDuration: 1,
    node: {
      symbolType: "square"
    },
    link: {
      fontColor: "black",
      fontSize: 12,
      fontWeight: "normal",
      highlightColor: "blue",
      highlightFontSize: 16,
      highlightFontWeight: "bold",
      labelProperty: "label",
      mouseCursor: "pointer",
      opacity: 1,
      renderLabel: true,
      semanticStrokeWidth: true,
      strokeWidth: 1.5
    }
  };
  console.log("CURRENT", current);
  return (
    <div className="graph-container">
      <Graph className="graph" id="dungeon-map" data={map} config={config} />
    </div>
  );
};

export default Map;
