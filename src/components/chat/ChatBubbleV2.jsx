import React, { useState } from 'react';
import logo from '../../assets/welogo.png';
import '../../index.css';

const ChatBubblev2 = (props) => {
  const { userInput, setEnter, keyPressed } = props;
  const [value, setValue] = useState("");

  // Handles input change
  const handleChange = (e) => {
    e.stopPropagation();
    setValue(e.target.value);
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    userInput(value); // Send input to parent
    setEnter(1); // Trigger next step or behavior
    setValue(""); // Clear input field
  };

  return (
    <section
      className="mycontainer"
      style={{
    
      }}
    >
      {/* Input Field Section */}
      <div
        className="container-textBox"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
         
        }}
      >
        <form onSubmit={handleSubmit} style={{ width: "80%" }}>
          <input
            className="placeholder1"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.01)",
              borderWidth: "0px",
              width: "100%",
              color: "white",
              fontSize: "13px",
            }}
            onChange={handleChange}
            value={value}
            placeholder="Press [T] to talk or type your response here"
            type="text"
          />
        </form>

        {/* Logo Section */}
        <div className="logo" style={{ paddingLeft: "10px" }}>
          <img src={logo} height="25px" width="80px" alt="Logo" />
        </div>
      </div>
    </section>
  );
};

export default ChatBubblev2;
