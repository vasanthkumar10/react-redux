import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// useSelector -> store.getState()
// useDispatch -> store.dispatch()
import { buyCar, sellCar } from "./carSlice";

export function Carview() {
  const numOfCars = useSelector((state) => state.car.numOfCars);
  const dispatch = useDispatch();

  const [carCount, setCarCount] = useState(0);

  return (
    <div>
      <h1>num of cars - {numOfCars}</h1>
      <button onClick={() => dispatch(buyCar())}>Buy car</button>
      <div>
        <input
          type="number"
          value={carCount}
          onChange={(e) => setCarCount(parseInt(e.target.value))}
        />
        <button onClick={() => dispatch(sellCar(carCount))}>
          Add car to garage
        </button>
      </div>
    </div>
  );
}
