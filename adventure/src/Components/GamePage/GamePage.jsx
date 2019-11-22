import React, { useState, useEffect, useRef } from "react";
import axiosAuth from "../Auth/axiosAuth";
import Map from "./Map";
import Controls from "./controls";

const GamePage = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [rooms, setRooms] = useState({});
  const [current, setCurrent] = useState({});

  useEffect(() => {
    console.log("EFFECT");
    setIsLoading(true);
    axiosAuth()
      .get("https://cs23-bw1-team9.herokuapp.com/api/adv/init/")
      .then(res => {
        const { map, ...rest } = res.data;
        map.nodes.map(node => {
          return {
            ...node,
            x: node.x * 0.5,
            y: node.y * 0.5,
            color: node.id === current.id ? "#000" : "#fff"
          };
        });
        setRooms(map);
        console.log(rooms);
        setCurrent(rest);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const move = (e, direction) => {
    e.preventDefault();
    axiosAuth()
      .post("https://cs23-bw1-team9.herokuapp.com/api/adv/move/", { direction })
      .then(res => {
        setCurrent(res.data);
      })
      .catch(err => console.error(err));
  };
  console.log(props);

  return (
    <div className="game-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Map map={rooms} />
          <Controls move={move} />
        </>
      )}
    </div>
  );
};

export default GamePage;
