import { useState } from "react";

function MessageBoard() {
  const [displayBox, setDisplay] = useState([]);
  const [msg, setMsg] = useState("");

  const submitMsg = function (event) {
    event.preventDefault();
    const newDisplay = [...displayBox];
    newDisplay.push(msg);
    setDisplay(newDisplay);
  };

  const deleteDisplay = function (displayIndex) {
    const newDisplay = [...displayBox];
    newDisplay.splice(displayIndex, 1);
    setDisplay(newDisplay);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(event) => setMsg(event.target.value)}
          />
        </label>
        <button className="submit-message-button" onClick={submitMsg}>
          Submit
        </button>
      </div>
      <div class="board">
        <h1>
          {displayBox.map((text, index) => {
            return (
              <div className="message">
                {text}{" "}
                <button
                  className="delete-button"
                  onClick={() => deleteDisplay(index)}
                >
                  x
                </button>
              </div>
            );
          })}
        </h1>
      </div>
    </div>
  );
}

export default MessageBoard;
