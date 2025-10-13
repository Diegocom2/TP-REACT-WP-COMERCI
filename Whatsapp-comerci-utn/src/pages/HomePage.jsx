import ContactList from "../components/ContactList.jsx";
import { contacts } from "../data/contacts.js";

export default function HomePage() {
    return (
        <div className="layout">
            <aside className="sidebar">
                <div className="sidebar-header">Chats</div>
                <ContactList items={contacts} />
            </aside>
            <main className="placeholder">
                <div className="placeholder-inner">
                    <div className="emoji">👈</div>
                    <p>Elegí un contacto para empezar a chatear</p>
                </div>
            </main>
        </div>
    );
}
