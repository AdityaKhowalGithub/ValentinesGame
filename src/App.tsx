import { useState } from "react";
import "./App.css";
import BeeGame from "./BeeGame";

const phrases = [
  "No",
  "Please???",
  "Pookie please",
  "Brother Erika Please",
  " : ( stinky",
  "no is not an answer!!! >:(",
];

function App() {
  const [nocount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = nocount * 20 + 16;
  function handleNoClick() {
    setNoCount(nocount + 1);
  }
  function getNoButtonText() {
    return phrases[Math.min(nocount, phrases.length - 1)];
  }

  return (
    <>
      <div className="game">
        <BeeGame />
      </div>
    </>
  );
}

export default App;
