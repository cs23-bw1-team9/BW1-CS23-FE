import React, { useState, useEffect, useRef } from "react";
import axiosAuth from "../Auth/axiosAuth";
import Map from "./Map";
import Controls from "./controls";

const GamePage = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [rooms, setRooms] = useState({});
  const [current, setCurrent] = useState({});

  useEffect(() => {
    setIsLoading(true);
    axiosAuth()
      .get("https://cs23-bw1-team9.herokuapp.com/api/adv/init/")
      .then(res => {
        const { map, ...rest } = res.data;
        let {nodes, links} = map
        nodes = nodes.map(node => {
          return {
            ...node,
            x: node.x,
            y: node.y,
            color: node.id === rest.id ? "#f00" : "#000"
          };
        })
        setRooms({nodes, links});
        setCurrent(rest);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, [current.id]);

  const move = (e, direction) => {
    e.preventDefault();
    axiosAuth()
      .post("https://cs23-bw1-team9.herokuapp.com/api/adv/move/", {direction})
      .then(res => {
        setCurrent(res.data);
      })
      .catch(err => {
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
