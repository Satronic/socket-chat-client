import React from "react";

import "../styles/ChatRoomStyle.css";
import { useChat } from "../hooks/useChat";
import { useLocation } from 'react-router-dom';

export const ChatRoom = () => {
    let { pathname } = useLocation();
    const { messages, sendMessage } = useChat(pathname); // Creates a websocket and manages messaging
    const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = () => {
        sendMessage(newMessage);
        setNewMessage("");
    };

    return (
        <div className="chat-room-container">
            <h2 className="room-name">Room: {pathname}</h2>
            <div className="messages-container">
                <ol className="messages-list">
                    {messages.map((message, i) => (
                        <li
                            key={i}
                            className={`message-item ${message.ownedByCurrentUser ? "my-message" : "received-message"
                                }`}
                        >
                            {message.body}
                        </li>
                    ))}
                </ol>
            </div>
            <div className="new-message__container">
                <textarea
                    value={newMessage}
                    onChange={handleNewMessageChange}
                    placeholder="Write message..."
                    className="new-message__input"
                />
                <button onClick={handleSendMessage} className="new-message__button">
                    Send
                </button>
            </div>

        </div>
    );
};