// === CONTACTOS ===
export const contacts = [
    {
        id: "1",
        name: "Mariana López",
        avatar: "https://i.pravatar.cc/150?img=47",
        lastMessage: "¿Llegás bien?",
        lastTime: "18:02",
        status: "disponible",
    },
    {
        id: "2",
        name: "Juan Pérez",
        avatar: "https://i.pravatar.cc/150?img=12",
        lastMessage: "Dale, confirmado.",
        lastTime: "16:44",
        status: "en línea",
    },
    {
        id: "3",
        name: "Nicolás Romero",
        avatar: "https://i.pravatar.cc/150?img=14", // 👈 imagen masculina
        lastMessage: "¿Jugamos un pádel esta semana? 🎾",
        lastTime: "15:10",
        status: "ayer a las 21:47",
    },

    {
        id: "4",
        name: "Flor Acosta",
        avatar: "https://i.pravatar.cc/150?img=32",
        lastMessage: "Gracias!",
        lastTime: "09:23",
        status: "ocupada",
    },
];

// === MENSAJES POR CHAT ===
export const chatsById = {
    "1": [
        { id: "m1", from: "them", text: "Hola! ¿Dónde estás?", time: "17:58", status: "read" },
        { id: "m2", from: "me", text: "Ya casi llego 🚗", time: "18:00", status: "read" },
        { id: "m3", from: "them", text: "Perfecto, te espero acá 👍", time: "18:02", status: "read" },
    ],
    "2": [
        { id: "m1", from: "them", text: "¿Confirmamos para mañana?", time: "16:40", status: "delivered" },
        { id: "m2", from: "me", text: "Sí, a las 10 estoy.", time: "16:42", status: "sent" },
        { id: "m3", from: "them", text: "Genial 🙌", time: "16:44", status: "read" },
    ],
    "3": [
        { id: "m1", from: "them", text: "Che, ¿jugamos un pádel esta semana? 🎾", time: "15:05", status: "read" },
        { id: "m2", from: "me", text: "De una, el jueves a la tarde me viene bárbaro 💪", time: "15:08", status: "read" },
        { id: "m3", from: "them", text: "Perfecto, reservo la cancha entonces 😎", time: "15:10", status: "read" },
    ],
    "4": [
        { id: "m1", from: "them", text: "Buen día ☀️", time: "09:18", status: "read" },
        { id: "m2", from: "me", text: "Buen día, ¿cómo vas?", time: "09:20", status: "read" },
        { id: "m3", from: "them", text: "Todo bien, gracias por el material 📚", time: "09:23", status: "read" },
    ],
};
