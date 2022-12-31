import React, { useState } from "react";
import "./Equal.css";
function Equal(props) {
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

  const [show, setShow] = useState(false);

  const Amountequal = (bill / people).toFixed(2);
  const AmountequalProcent = (bill / people / procent).toFixed(2);

  return (
    <div className="mainEqual">
      <div className="tipsAmount">
        <div className="Amount">
          <h3>Tip Amount</h3>
          <p>/ Person</p>
        </div>
        <div className="equal">
          <span>$</span>
          <span className="equalNumber">
            {Amountequal === "NaN" || Amountequal === "Infinity"
              ? "0.00"
              : Amountequal}
          </span>
        </div>
      </div>
      <div className="tipsAmount">
        <div className="Amount">
          <h3>Total</h3>
          <p>/ Person</p>
        </div>
        <div className="equal">
          <span>$</span>
          <span className="equalNumber">
            {AmountequalProcent === "NaN" || AmountequalProcent === "Infinity"
              ? "0.00"
              : AmountequalProcent}
          </span>
        </div>
      </div>
      <div className="click">
        <button
          className="reset"
          onClick={() => {
            setBill("");
            setPeople("");
            custom("");
          }}
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default Equal;
