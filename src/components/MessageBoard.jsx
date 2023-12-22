import React, { useState } from "react";

function MessageBoard() {
  const [messageInput, setMessageInput] = useState("");
  const [messageList, setMessageList] = useState([]);

  const handleAddMessageList = () => {
    const newMessageList = [...messageList];
    newMessageList.push(messageInput);
    setMessageList(newMessageList);
  };

  const handleRemoveMessageList = (messageIndex) => {
    const newMessageList = [...messageList];
    newMessageList.splice(messageIndex, 1);
    setMessageList(newMessageList);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(event) => {
              setMessageInput(event.target.value);
            }}
            value={messageInput}
          />
        </label>
        <button
          className="submit-message-button"
          onClick={handleAddMessageList}>
          Submit
        </button>
      </div>
      <div className="board">
        {messageList.map((message, index) => {
          return (
            <div className="message" key={index}>
              <h1>{message}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  handleRemoveMessageList(index);
                }}>
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
