// src/App.jsx
import { useMemo, useState } from "react";
import "./styles.css";
import { contacts as seed } from "./data/conversations";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";

function nowHHMM() {
  const d = new Date();
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

export default function App() {
  const [contacts, setContacts] = useState(seed);
  const [activeId, setActiveId] = useState(null);

  const active = useMemo(
    () => contacts.find((c) => c.id === activeId) || null,
    [contacts, activeId]
  );

  const openChat = (id) => setActiveId(id);
  const goBack = () => setActiveId(null);

  const sendMessage = (text) => {
    if (!active) return;
    const time = nowHHMM();
    setContacts((prev) =>
      prev.map((c) =>
        c.id !== active.id
          ? c
          : {
              ...c,
              lastMessage: text,
              lastTime: time,
              messages: [
                ...c.messages,
                { id: `m${c.messages.length + 1}`, from: "me", text, time, seen: true },
              ],
            }
      )
    );
  };

  return (
    <div className="hero">
      <div className="contenedorhero_basehijo">
        {/* Izquierda: lista */}
        <ChatList contacts={contacts} onOpen={openChat} />

        {/* Derecha: chat */}
        <ChatWindow contact={active} onBack={goBack} onSend={sendMessage} />
      </div>
    </div>
  );
}
