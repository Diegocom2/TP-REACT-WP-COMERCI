// src/components/ChatWindow.jsx
import { useEffect, useRef } from "react";
import Header from "./Header";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

export default function ChatWindow({ contact, onBack, onSend }) {
    const listRef = useRef(null);

    // Auto-scroll al final cuando cambia la conversación
    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollTop = listRef.current.scrollHeight;
        }
    }, [contact]);

    if (!contact) {
        // Pantalla de bienvenida cuando no hay chat
        return (
            <div className="contenedordos_hijo" style={{ background: "var(--wp-bg)" }}>
                <div className="content_hijo_home">
                    <img className="logo-wp" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="logo" />
                    <p className="texto-noselect">Bienvenido al chat de WhatsApp</p>
                </div>
            </div>
        );
    }

    return (
        <div className="contenedordos_padre_ms">
            <div className="contenedordos_hijo_ms">
                <Header contact={contact} onBack={onBack} />

                <div className="content_message_screen">
                    <div className="message_list" ref={listRef}>
                        {contact.messages.map((m) => (
                            <MessageBubble key={m.id} msg={m} />
                        ))}
                    </div>
                </div>

                <MessageInput onSend={onSend} />
            </div>
        </div>
    );
}
