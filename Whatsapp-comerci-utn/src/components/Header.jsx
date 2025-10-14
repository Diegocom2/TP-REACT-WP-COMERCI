// src/components/Header.jsx
export default function Header({ contact, onBack }) {
    if (!contact) return null;
    return (
        <div className="header_message_hijo">
            <div className="info-group">
                <button className="back-arrow-button" onClick={onBack} aria-label="Volver">←</button>
                <div className="chatfoto">
                    <img className="contacto_foto" src={contact.avatar} alt={contact.name} />
                </div>
                <div className="chatHeader">
                    <div className="titulo_right">{contact.name}</div>
                    <div className="status">En línea</div>
                </div>
            </div>
            <div className="chat_actions">
                <i className="bi bi-camera-video"></i>
                <i className="bi bi-telephone"></i>
                <i className="bi bi-three-dots-vertical"></i>
            </div>
        </div>
    );
}
