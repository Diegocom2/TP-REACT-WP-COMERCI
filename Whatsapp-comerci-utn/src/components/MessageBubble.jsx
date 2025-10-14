// src/components/MessageBubble.jsx
function DoubleCheck({ seen }) {
    // Celeste WhatsApp actual
    return (
        <span
            aria-label={seen ? "Leído" : "Enviado"}
            className={`wc-checks ${seen ? "seen" : ""}`}
        >
            {/* SVG liviano para doble check */}
            <svg width="16" height="16" viewBox="0 0 24 24" className="tick">
                <path d="M1.5 13.5l4 4 7-7" />
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" className="tick second">
                <path d="M7 13.5l4 4 10-10" />
            </svg>
        </span>
    );
}

export default function MessageBubble({ msg }) {
    const isMe = msg.from === "me";
    return (
        <div className={`bubble-row ${isMe ? "right" : "left"}`}>
            <div className={`message-bubble ${isMe ? "me" : "them"}`}>
                {/* No mostramos nombres dentro del chat */}
                <p className="p_message">{msg.text}</p>
                <div className="metadata">
                    <span className="p_time">{msg.time}</span>
                    {isMe && <DoubleCheck seen={!!msg.seen} />}
                </div>
            </div>
        </div>
    );
}
