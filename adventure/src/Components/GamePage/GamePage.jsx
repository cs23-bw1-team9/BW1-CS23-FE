import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import axiosAuth from "../Auth/axiosAuth"
import Map from "./Map";

const GamePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [rooms, setRooms] = useState({});
  const [current, setCurrent] = useState({});
  const mapRef = useRef(null);
  const [rectCoords, setRectCoords] = useState({
    height: 0,
    width: 0
  });
  let coords = {height: 0, width: 0}
  if(mapRef.current !== null) {
    coords = mapRef.current.getBoundingClientRect();
    coords.height *= 0.81;
    setRectCoords({
      height: coords.height,
      width: coords.width
    });
  }

  useEffect(() => {
    console.log('EFFECT')
    setIsLoading(true);
    axiosAuth()
      .get("https://cs23-bw1-team9.herokuapp.com/api/adv/init/")
      .then(res => {
        const { map, ...rest } = res.data;
        let {nodes, links} = map
        // console.log('RESULT', rest)
        nodes = nodes.map(node => {
          return {
            ...node,
            x: node.x * (coords.width / 20) + 0.5 * coords.width,
            y: node.y * -(coords.width / 20) + 0.5 * coords.height,
            // size: node.id === current.room_id
            //   ? coords.width / 3
            //   : coords.width / 6,
            color: node.id === rest.id ? "#f00" : "#000"
          };
        })
        setRooms({nodes, links});
        setCurrent(rest);
        // console.log('CURRENT',current)
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err)
        setIsLoading(false);
      });
  }, []);

  const move = (e, direction) => {
    e.preventDefault();
    axiosAuth()
      .post("https://cs23-bw1-team9.herokuapp.com/api/adv/move/", {direction})
      .then(res => setCurrent(res.data))
      .catch(err => console.error(err));
  };
  
  return isLoading 
    ? (<p>Loading...</p>)
    : (<div class="map-container" ref={mapRef}>
        <Map map={rooms} current={current} />
      </div>)
};

export default GamePage;
