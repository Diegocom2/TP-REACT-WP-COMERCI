// src/components/MessageInput.jsx
import { useState } from "react";

export default function MessageInput({ onSend }) {
    const [text, setText] = useState("");

    const handleSend = (e) => {
        e.preventDefault();
        const trimmed = text.trim();
        if (!trimmed) return;
        onSend(trimmed);
        setText("");
    };

    return (
        <div className="formulario_padre content_formulario_padre">
            <form onSubmit={handleSend} className="content_formulario_hijo">
                <button type="button" className="emoji_form bi bi-emoji-smile" />
                <textarea
                    className="textarea_form"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Mensaje"
                    rows={1}
                />
                <button type="submit" className="button_enviar">
                    <i className="bi bi-send-fill" />
                </button>
            </form>
        </div>
    );
}
