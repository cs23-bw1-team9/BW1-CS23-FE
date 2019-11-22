import React, { useState, useEffect, useRef } from "react";
import axiosAuth from "../Auth/axiosAuth";
import Map from "./Map";
import Controls from "./controls";

const GamePage = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [rooms, setRooms] = useState({});
  const [current, setCurrent] = useState({});
  // const mapRef = useRef(null);
  // const [rectCoords, setRectCoords] = useState({
  //   height: 0,
  //   width: 0
  // });
  // let coords = {height: 0, width: 0}
  // if(mapRef.current !== null) {
  //   coords = mapRef.current.getBoundingClientRect();
  //   coords.height *= 0.81;
  //   setRectCoords({
  //     height: coords.height,
  //     width: coords.width
  //   });
  // }

  useEffect(() => {
    console.log("EFFECT");
    setIsLoading(true);
    axiosAuth()
      .get("https://cs23-bw1-team9.herokuapp.com/api/adv/init/")
      .then(res => {
        // console.log('THEN')
        const { map, ...rest } = res.data;
        let {nodes, links} = map
        nodes = nodes.map(node => {
          return {
            ...node,
            x: node.x,
            y: node.y,
            // x: node.x * (coords.width / 20) + 0.5 * coords.width,
            // y: node.y * -(coords.width / 20) + 0.5 * coords.height,
            // size: node.id === current.room_id
            //   ? coords.width / 3
            //   : coords.width / 6,
            color: node.id === rest.id ? "#f00" : "#000"
          };
        })
        setRooms({nodes, links});
        setCurrent(rest);
        setIsLoading(false);
        // console.log('END THEN')
      })
      .catch(err => {
        // console.log('CATCH')
        console.error(err);
        setIsLoading(false);
      });
  }, [current.id]);

  const move = (e, direction) => {
    console.log('MOVED')
    e.preventDefault();
    axiosAuth()
      .post("https://cs23-bw1-team9.herokuapp.com/api/adv/move/", {direction})
      .then(res => {
        console.log('THEN')
        setCurrent(res.data);
      })
      .catch(err => {
        console.log('CATCH')
        console.error(err)
      });
  };

  return (
    <div className="game-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div class="map-container" >
          <Map map={rooms} current={current} />
          <Controls move={move} />
        </div>
      )}
    </div>
  );
};

export default GamePage;
