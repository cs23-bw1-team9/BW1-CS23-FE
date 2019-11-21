import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from "./Map";

const GamePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [map, setMap] = useState({});
  const [current, setCurrent] = useState({});
  
  useEffect(() => {
    setIsLoading(true);
    axios.get("https://cs23-bw1-team9.herokuapp.com/api/adv/init/")
      .then(res => {
        const {map, ...current} = res.data
        map.nodes.map(node => {
          return {
            ...node,
            color: node.id === current.id
            ? "#f00"
            : "#fff"
          }
        })
        setMap(map)
        setCurrent(current)
        setIsLoading(false);
      })
      .catch(err => {
          console.error(err);
          localStorage.removeItem("key");
          setIsLoading(false);
      });
    }, []);

  const move = (e, direction) => {
    e.preventDefault();
    axios.post("https://cs23-bw1-team9.herokuapp.com/api/adv/move/", {direction})
      .then(res => setCurrent(res.data))
      .catch(err => console.error(err));
  };

  return (
    <Map map={map} />
  )
};

export default GamePage;
