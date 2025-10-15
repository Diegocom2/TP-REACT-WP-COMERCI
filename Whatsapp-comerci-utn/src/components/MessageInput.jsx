import { useState } from "react";

export default function MessageInput({ onSend }) {
    const [text, setText] = useState("");

    const send = () => {
        if (!text.trim()) return;
        onSend(text.trim());
        setText("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            send();
        }
    };

    return (
        <form className="input-bar" onSubmit={(e) => e.preventDefault()}>
            <input
                className="msg-input"
                type="text"
                placeholder="Escribí un mensaje"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button type="button" className="send-btn" onClick={send}>
                ➤
            </button>
        </form>
    );
}
