import React, { useState, useEffect } from "react";
import { Graph } from "react-d3-graph";

const config = {
  automaticRearrangeAfterDropNode: true,
  collapsible: false,
  directed: false,
  focusAnimationDuration: 0.75,
  focusZoom: 1,
  highlightDegree: 1,
  highlightOpacity: 1,
  linkHighlightBehavior: true,
  maxZoom: 5,
  minZoom: 0.1,
  nodeHighlightBehavior: true,
  panAndZoom: false,
  staticGraph: true,
  staticGraphWithDragAndDrop: true,
  d3: {
    alphaTarget: 0,
    gravity: -400,
    linkLength: 180,
    linkStrength: 1
  },
  node: {
    color: "#d3d3d3",
    fontColor: "black",
    fontSize: 12,
    fontWeight: "normal",
    highlightColor: "SAME",
    highlightFontSize: 12,
    highlightFontWeight: "bold",
    highlightStrokeColor: "blue",
    highlightStrokeWidth: "SAME",
    mouseCursor: "pointer",
    opacity: 1,
    renderLabel: false,
    size: 50,
    strokeColor: "none",
    strokeWidth: 2,
    svg: "",
    symbolType: "circle"
  },
  link: {
    fontColor: "black",
    fontSize: 12,
    fontWeight: "normal",
    highlightColor: "blue",
    highlightFontSize: 8,
    highlightFontWeight: "bold",
    labelProperty: "label",
    mouseCursor: "pointer",
    opacity: 1,
    renderLabel: true,
    semanticStrokeWidth: true,
    strokeWidth: 1.5
  }
};

const Map = ({map}) => {
  // console.log(map)
  return (
    <Graph
      id="dungeon-map"
      data={map}
      config={config}
    />
  )
}

export default Map;