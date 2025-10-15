function StatusIcon({ status }) {
    if (status === "read") return <span className="ticks read">✓✓</span>;
    if (status === "delivered") return <span className="ticks delivered">✓✓</span>;
    return <span className="ticks sent">✓</span>;
}

export default function MessageBubble({ from, text, time, status }) {
    const mine = from === "me";
    return (
        <div className={`bubble-row ${mine ? "mine" : "theirs"}`}>
            <div className={`bubble ${mine ? "mine" : "theirs"}`}>
                <p className="bubble-text">{text}</p>
                <span className="bubble-meta">
                    <span className="time">{time}</span>
                    {mine && <StatusIcon status={status} />}
                </span>
            </div>
        </div>
    );
}
