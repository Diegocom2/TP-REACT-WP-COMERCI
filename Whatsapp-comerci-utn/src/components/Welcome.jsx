import React from "react";

export default function Welcome() {
    return (
        <div className="welcome-screen">
            <h1>Bienvenido a WhatsApp</h1>
            <p>Seleccioná un contacto para comenzar una conversación.</p>
            <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp logo"
                className="welcome-icon"
            />
        </div>
    );
}
