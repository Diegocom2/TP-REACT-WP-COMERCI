import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MessageInput from "./MessageInput.jsx";
import { chatsById, contacts } from "../data/mockData.js";

export default function ChatWindow() {
    const { id } = useParams();
    const navigate = useNavigate();

    const contact = contacts.find((c) => c.id === id);
    const [messages, setMessages] = useState(chatsById[id] || []);

    useEffect(() => {
        setMessages(chatsById[id] || []);
    }, [id]);

    const handleSendMessage = (text) => {
        if (!text.trim()) return;

        const now = new Date();
        const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

        const newMessage = {
            id: Date.now(),
            text,
            time,
            from: "me",
        };

        // Actualiza los mensajes locales
        setMessages((prev) => {
            const updated = [...prev, newMessage];
            // Guarda en el objeto global chatsById para persistencia temporal
            chatsById[id] = updated;
            return updated;
        });
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
                        <p className="chat-status">{contact.status}</p>
                    </div>
                </div>
            </header>

            <div className="chat-messages">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`bubble-row ${msg.from === "me" ? "mine" : "theirs"}`}
                    >
                        <div className={`bubble ${msg.from === "me" ? "mine" : "theirs"}`}>
                            <p>{msg.text}</p>
                            <div className="bubble-meta">
                                <span>{msg.time}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <MessageInput onSend={handleSendMessage} />
        </div>
    );
}
