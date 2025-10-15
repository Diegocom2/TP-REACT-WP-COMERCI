import React from "react";
import { Outlet } from "react-router-dom";
import ContactList from "./ContactList.jsx";

export default function Layout() {
    return (
        <div className="app-layout">
            {/* === Sidebar (panel izquierdo) === */}
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

                {/* Lista de contactos */}
                <ContactList />
            </aside>

            {/* === Panel principal (chat / bienvenida) === */}
            <main className="chat-panel">
                <Outlet />
            </main>
        </div>
    );
}
