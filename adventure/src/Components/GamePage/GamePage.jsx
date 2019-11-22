import React, { useState, useEffect, useRef } from "react";
import axiosAuth from "../Auth/axiosAuth";
import Map from "./Map";
import Controls from "./controls";
import Logo from "../../Components/LandingPage/Logo";
const GamePage = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [rooms, setRooms] = useState({});
  const [current, setCurrent] = useState({});

  useEffect(() => {
    setIsLoading(true);
    axiosAuth()
      .get("https://cs23-bw1-team9.herokuapp.com/api/adv/init/")
      .then(res => {
        const { map, id } = res.data;
        let { nodes, links } = map;
        nodes = nodes.map(node => {
          return {
            ...node,
            x: node.x * 50,
            y: node.y * 50,
            color: node.id === id ? "#f00" : "#FF7E00",
            symbolType: node.id === id ? "star" : "square",
            size: node.id === id ? 450 : 200
          };
        });
        setRooms({ nodes, links });
        setCurrent(id);
        setIsLoading(false);
      });
  }, [current.id]);

  const move = (e, direction) => {
    e.preventDefault();
    axiosAuth()
      .post("https://cs23-bw1-team9.herokuapp.com/api/adv/move/", { direction })
      .then(res => setCurrent(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div className="game-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Logo component={Logo} />
          <div class="map-container">
            <Map map={rooms} current={current} />
            <Controls move={move} />
          </div>
        </>
      )}
    </div>
  );
};

export default GamePage;
