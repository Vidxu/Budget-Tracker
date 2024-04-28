import React from 'react';

function Chatbot() {
  const sendMessage = () => {
    const userMessage = document.getElementById("user-input").value;
    const chatBox = document.getElementById("chat-box");

    const userMessageElement = document.createElement("div");
    userMessageElement.className = "message user-message";
    userMessageElement.innerHTML = "<p>" + userMessage + "</p>";
    chatBox.appendChild(userMessageElement);

    const counselorMessageElement = document.createElement("div");
    counselorMessageElement.className = "message counselor-message";
    counselorMessageElement.innerHTML = "<p>Thank you for reaching out.How can I help you?</p>";
    chatBox.appendChild(counselorMessageElement);

    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear input field
    document.getElementById("user-input").value = "";
  };

  return (
    <div>
      <h2>Customer care</h2>
      <center>
        <div className="chat-box" id="chat-box">
          <div className="message counselor-message">
            <p>Hello! How can I assist you today?</p>
          </div>
        </div>
        <div className="input-container">
          <input type="text" id="user-input" placeholder="Type your message..." />
          <button className='send' onClick={sendMessage}>Send</button>
        </div>
      </center>
    </div>
  );
}

export default Chatbot;
