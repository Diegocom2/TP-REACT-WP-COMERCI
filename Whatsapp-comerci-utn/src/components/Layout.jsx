import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ContactList from "./ContactList.jsx";

export default function Layout() {
    const location = useLocation();
    const isChat = location.pathname.startsWith("/chat");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="app-layout">
            {(!isChat || !isMobile) && (
                <aside className="sidebar">
                    <header className="sidebar-header">
                        <h2>WhatsApp</h2>
                        <div className="sidebar-icons">
                            <span className="material-icons">photo_camera</span>
                            <span className="material-icons">more_vert</span>
                        </div>
                    </header>

                    <div className="search-bar">
                        <input type="text" placeholder="Preguntar a Meta AI o buscar" />
                    </div>

                    <div className="filters">
                        <button className="active">Todos</button>
                        <button>No leídos</button>
                        <button>Favoritos</button>
                        <button>Grupos</button>
                    </div>

                    <ContactList />
                </aside>
            )}

            <main className="chat-panel">
                <Outlet />
                {!isChat && (
                    <div className="welcome-screen">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                            alt="WhatsApp icon"
                            className="welcome-icon"
                        />
                        <h1>Bienvenido a WhatsApp</h1>
                        <p>Seleccioná un contacto para comenzar una conversación.</p>
                    </div>
                )}
            </main>
        </div>
    );
}
