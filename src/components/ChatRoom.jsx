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
        // list.scrollTop = list.scrollHeight + list.offsetHeight;
        const list = document.getElementsByClassName("messages-list");
        list[0].scrollTop = list[0].scrollHeight - list[0].offsetHeight;
        // list.scrollIntoView(true);
        // list.scrollTop = 0;
        console.log(list[0].scrollTop);
    };

    return (
        <div className="chat-room-container">
            <div className="title-container">
                <h2 className="room-name">Sala: {pathname.replace('/', '')}</h2>
            </div>
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