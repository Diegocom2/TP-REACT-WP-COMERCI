import React from "react";
import { Link } from "react-router-dom";
import { contacts } from "../data/mockData.js";

export default function ContactList() {
    return (
        <ul className="contact-list">
            {contacts.map((c) => (
                <li key={c.id} className="contact-item">
                    <Link to={`/chat/${c.id}`} className="contact-link">
                        <div className="contact-avatar">
                            <img src={c.avatar} alt={c.name} />
                        </div>
                        <div className="contact-info">
                            <span className="contact-name">{c.name}</span>
                            <span className="contact-status">{c.status}</span>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

