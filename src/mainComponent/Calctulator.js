import React from "react";
import "./Calculator.css";
import personIcon from "../leftSide/images/icon-person.svg";
import billIcon from "../leftSide/images/icon-dollar.svg";

function Calctulator(props) {
  const btns = [5, 10, 15, 25, 50];
  const {
    bill,
    setBill,
    people,
    setPeople,
    procent,
    setProcent,
    custom,
    setCustom,
  } = props;

  return (
    <div className="main">
      <div className="incorectValueBill">
        <p className="BillName">Bill</p>
        <p className="incorectText">
          {bill === "0" ? "Incorrect Value" : null}
        </p>
      </div>
      <div className="inputMain">
        <img src={billIcon} title="Bill" />
        <input
          maxLength={4}
          value={bill}
          placeholder="0"
          id="custom"
          type="number"
          onChange={(event) => setBill(event.target.value)}
        />
      </div>
      <div className="mainProcentCont">
        <p className="selectTip">Select Tip %</p>
        <div className="ProcentGroup">
          {btns.map((item) => {
            return (
              <button className="procent" onClick={() => setProcent(item)}>
                {item}%
              </button>
            );
          })}
          <input
            maxLength={4}
            id="cstm"
            type="number"
            placeholder="Custom"
            onChange={(event) => setCustom(event.target.value)}
          />
        </div>
      </div>
      <div className="mainPeopleContainer">
        <div className="incorectValueBill">
          <p className="BillName">Number of People</p>
          <p className="incorectText Underincorect">
            {people === "0" ? "Incorrect Value" : null}
          </p>
        </div>
        <div className="peopleInput">
          <img src={personIcon} title="Person" />
          <input
            value={people}
            className="peopleN"
            type="number"
            placeholder="0"
            onChange={(event) => setPeople(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Calctulator;
