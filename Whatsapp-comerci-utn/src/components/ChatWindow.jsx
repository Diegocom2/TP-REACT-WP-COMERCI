import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { chatsById, contacts } from "../data/mockData.js";
import MessageBubble from "./MessageBubble.jsx";
import MessageInput from "./MessageInput.jsx";

export default function ChatWindow() {
    const { id } = useParams();
    const navigate = useNavigate();
    const contact = contacts.find((c) => c.id === id);
    const [messages, setMessages] = useState(chatsById[id] || []);

    const handleSend = (text) => {
        const newMsg = {
            id: Date.now(),
            from: "me",
            text,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            status: "sent",
        };
        setMessages([...messages, newMsg]);
    };

    return (
        <div className="chat-window">
            <header className="chat-header">
                <button className="back-btn" onClick={() => navigate("/")}>
                    ←
                </button>
                <div className="chat-header-info">
                    <div className="chat-avatar">
                        <img src={contact.avatar} alt={contact.name} />
                    </div>
                    <div>
                        <h3 className="chat-name">{contact.name}</h3>
                        <p className="chat-status">en línea</p>
                    </div>
                </div>
            </header>

            <div className="chat-messages">
                {messages.map((msg) => (
                    <MessageBubble
                        key={msg.id}
                        from={msg.from}
                        text={msg.text}
                        time={msg.time}
                        status={msg.status}
                    />
                ))}
            </div>

            <MessageInput onSend={handleSend} />
        </div>
    );
}
