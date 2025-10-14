// src/components/ChatList.jsx
export default function ChatList({ contacts, onOpen }) {
    return (
        <div className="contenedoruno_hijo">
            {/* Barra superior tipo WhatsApp */}
            <div className="content_chatList">
                <div className="content_logo-wp">
                    <h1 className="titulo_left">WhatsApp</h1>
                </div>
                <div className="icons_right_chatList">
                    <i className="bi bi-camera"></i>
                    <i className="bi bi-three-dots-vertical"></i>
                </div>
            </div>

            {/* Buscador */}
            <div className="contenedor_buscador">
                <div className="buscador_box">
                    <button className="icon_buscador bi bi-search" />
                    <input type="text" placeholder="Pregúntale a Meta AI" />
                </div>
            </div>

            {/* Filtros (solo estilo) */}
            <div className="chat-filters">
                <button className="filter-button active">Todos</button>
                <button className="filter-button">No leído</button>
                <button className="filter-button">Favoritos</button>
                <button className="filter-button">Grupos</button>
            </div>

            {/* Lista */}
            <ul className="contact_list">
                {contacts.map(c => (
                    <li key={c.id} className="contact-list">
                        <a onClick={() => onOpen(c.id)}>
                            <div className="photo_profile">
                                <img className="photo" src={c.avatar} alt={c.name} />
                            </div>
                            <div className="name_contact">
                                <h2>{c.name}</h2>
                                <span className="state_contact">{c.lastMessage}</span>
                            </div>
                            <div className="state_contact">{c.lastTime}</div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
