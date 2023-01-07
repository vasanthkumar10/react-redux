import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyBike, sellBike } from "./bikeSlice";

export function Bikeview() {
  const numOfBikes = useSelector((state) => state.bike.numOfBikes);
  const dispatch = useDispatch();

  const [bikeCount, setBikeCount] = useState(0);

  return (
    <div>
      <h1>Num of bikes - {numOfBikes}</h1>
      <button onClick={() => dispatch(buyBike())}>Buy bike</button>
      <div>
        <input
          type="number"
          value={bikeCount}
          onChange={(e) => setBikeCount(parseInt(e.target.value))}
        />
        <button onClick={() => dispatch(sellBike(bikeCount))}>
          Add bike to garage
        </button>
      </div>
    </div>
  );
}
