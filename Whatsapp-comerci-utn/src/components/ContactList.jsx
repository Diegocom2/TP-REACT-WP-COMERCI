import { Link, useLocation } from "react-router-dom";

export default function ContactList({ items }) {
    const { pathname } = useLocation();

    return (
        <ul className="contact-list" role="list">
            {items.map((c) => {
                const isActive = pathname === `/chat/${c.id}`;
                return (
                    <li key={c.id} className={`contact-item ${isActive ? "active" : ""}`}>
                        <Link to={`/chat/${c.id}`} className="contact-link">
                            <img className="avatar" src={c.avatar} alt={c.name} loading="lazy" />
                            <div className="meta">
                                <div className="name-row">
                                    <span className="name">{c.name}</span>
                                    <span className="time">{/* espacio para hora */}</span>
                                </div>
                                <div className="last">{c.lastMessage}</div>
                            </div>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
