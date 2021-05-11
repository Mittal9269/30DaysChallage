import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Chart from "./Chart";
import BarFunction from "./BarFunction";

export default function Card(props) {
  const [data, setdata] = useState({
    first: 0,
    second: 0,
    third: 0,
    four: 0,
    five: 0
  });
  const onSub = (e) => {
    e.preventDefault();
    console.log(data);
    let total =
      parseInt(data.first) +
      parseInt(data.second) +
      parseInt(data.third) +
      parseInt(data.four) +
      parseInt(data.five);
    console.log(total);
    localStorage.setItem(props.name, total);
    alert(`Thank for filling the form`);
    window.location.reload();

    // setdata("");
  };
  const inputVal = (event) => {
    const { name, value } = event.target;

    setdata((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  };
  return (
    <>
      <div className="col-md-3 col-10 mx-auto">
        <div className="card">
          {/* <img src={<Chart />} class="card-img-top" alt="Hello" /> */}
          <Chart value={localStorage.getItem(props.name)} />
          <div className="card-body">
            <h2 className="card-title">{props.name}</h2>
            <form onSubmit={onSub}>
              <input
                type="number"
                id="exampleFormControlInput1"
                name="first"
                value={setdata.first}
                onChange={inputVal}
                placeholder="Enter %"
              />
              <input
                type="number"
                id="exampleFormControlInput2"
                name="second"
                value={setdata.second}
                onChange={inputVal}
                placeholder="Enter %"
              />
              <input
                type="number"
                id="exampleFormControlInput3"
                name="third"
                value={setdata.third}
                onChange={inputVal}
                placeholder="Enter %"
              />
              <input
                type="number"
                id="exampleFormControlInput4"
                name="four"
                value={setdata.four}
                onChange={inputVal}
                placeholder="Enter %"
              />
              <input
                type="number"
                id="exampleFormControlInput5"
                name="five"
                value={setdata.five}
                onChange={inputVal}
                placeholder="Enter %"
              />
              <button type="submit" className="mr-4 btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
