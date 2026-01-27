import {useRef, useEffect } from 'react';
import { ChatMessage} from './ChatMessage';
import './ChatMessages.css';
function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  // 4j: Display welcome message if no chat messages exist
  if (chatMessages.length === 0) {
    return (
      <div className="chat-messages-container">
        <p className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox
          below.
        </p>
      </div>
    );
  }

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => (
        <ChatMessage
          message={chatMessage.message}
          sender={chatMessage.sender}
          key={chatMessage.id}
        />
      ))}
    </div>
  );
}

export default ChatMessages;
