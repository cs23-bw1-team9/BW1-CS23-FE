import React, { useState, useEffect } from "react";
import axios from "axios";

const GamePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [map, setMap] = useState({});
  const [data, setData] = useState({});

  const move = (e, direction) => {
    e.preventDefault();
    axios
      .post("https://cs23-bw1-team9.herokuapp.com/api/adv/move/", {direction})
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  };
  
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://cs23-bw1-team9.herokuapp.com/api/adv/init/")
      .then(res => {
        setIsLoading(false);
        const {map, ...data} = res.data
        setMap(map)
        setData(data)
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
        localStorage.removeItem("key");
      });
  }, []);
  return (
    <p>GamePage</p>
  )
};

export default GamePage;
