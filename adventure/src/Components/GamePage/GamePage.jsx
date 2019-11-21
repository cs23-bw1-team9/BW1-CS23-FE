import React, { useState, useEffect } from "react";
import axios from "axios";
// import Map from "./Map";

const GamePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [map, setMap] = useState({});
  const [data, setData] = useState({});
  const [current, setCurrent] = useState({});
  
  useEffect(() => {
    setIsLoading(true);
    axios.get("https://cs23-bw1-team9.herokuapp.com/api/adv/init/")
      .then(res => {
        setIsLoading(false);
        const {map, ...data} = res.data
        setMap(map)
        setData(data)
        setCurrent(map.find(room => room.x === data.x && room.y === data.y))
      })
      .catch(err => {
          console.error(err);
          setIsLoading(false);
          localStorage.removeItem("key");
      });
    }, []);

  const move = (e, direction) => {
    e.preventDefault();
    axios.post("https://cs23-bw1-team9.herokuapp.com/api/adv/move/", {direction})
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  };

  return (
    <Map
      map={map}
      data={data}
      current={current}
    />
  )
};

export default GamePage;
