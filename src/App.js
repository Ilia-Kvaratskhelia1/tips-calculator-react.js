import "./App.css";
import { useState } from "react";
import Calctulator from "./mainComponent/Calctulator";
import Equal from "./mainComponent/Equal/Equal";

function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [procent, setProcent] = useState("");
  const [custom, setCustom] = useState("");
  return (
    <div className="mainContainer">
      <div className="mainLeftCont">
        <Calctulator
          bill={bill}
          setBill={setBill}
          people={people}
          setPeople={setPeople}
          procent={procent}
          setProcent={setProcent}
          custom={custom}
          setCustom={setCustom}
        />
      </div>
      <div className="rightSide">
        <Equal
          bill={bill}
          setBill={setBill}
          people={people}
          setPeople={setPeople}
          procent={procent}
          setProcent={setProcent}
          custom={custom}
          setCustom={setCustom}
        />
      </div>
    </div>
  );
}

export default App;
