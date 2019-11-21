import React, { useState, useEffect } from "react";
import { Graph } from "react-d3-graph";

const config = {}

const Map = ({map}) => {
  return (
    <Graph
      id="dungeon-map"
      data={map}
    />
  )
}

export default Map;