import { useNavigate, useParams } from "react-router-dom";
import MessageInput from "./MessageInput.jsx";
import { chatsById, contacts } from "../data/mockData.js";

export default function ChatWindow() {
    const { id } = useParams();
    const navigate = useNavigate();

    const contact = contacts.find((c) => c.id === id);
    const messages = chatsById[id] || [];

    return (
        <div className="chat-window">
            <header className="chat-header">
                {/* 🔙 Botón de volver (solo visible en mobile) */}
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
                            <span className="bubble-meta">{msg.time}</span>
                        </div>
                    </div>
                ))}
            </div>

            <MessageInput onSend={(text) => console.log("Mensaje enviado:", text)} />
        </div>
    );
}
