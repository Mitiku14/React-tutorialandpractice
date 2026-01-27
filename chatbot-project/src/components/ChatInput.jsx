
import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';
function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    if (inputText.trim() === '') return;

    const userMessage = {
      message: inputText,
      sender: 'user',
      id: crypto.randomUUID(),
    };

    // 4k: Create the loading message with the spinner image
    const loadingMessage = {
      message: (
        <img
          src="https://supersimpledev.dev/images/loading-spinner.gif"
          style={{ height: '40px', margin: '-15px' }}
        />
      ),
      sender: 'robot',
      id: 'loading-id',
    };

    // Update state with user message AND the spinner
    const newChatMessages = [...chatMessages, userMessage, loadingMessage];
    setChatMessages(newChatMessages);
    setInputText('');

    // Simulate chatbot response delay
    setTimeout(() => {
      const response = Chatbot.getResponse(inputText);

      setChatMessages([
        ...chatMessages,
        userMessage,
        {
          message: response,
          sender: 'robot',
          id: crypto.randomUUID(),
        },
      ]);
    }, 1000); // 1 second delay to see the spinner
  }

  // Feature: Handle Enter Key
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      sendMessage();
    }
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        onChange={saveInputText}
        onKeyDown={handleKeyDown}
        value={inputText}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}
export default ChatInput;