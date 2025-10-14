// src/data/conversations.js
export const contacts = [
    {
        id: "c1",
        name: "Yo (Tú)",
        avatar: "https://i.pravatar.cc/100?img=64",
        lastMessage: "Jejej",
        lastTime: "12:29",
        messages: [
            { id: "m1", from: "them", text: "Receta-Comerci_Diego-2.pdf", time: "12:20", type: "file" },
            { id: "m2", from: "me", text: "Start point 83kg Día 1", time: "02:17" },
            { id: "m3", from: "me", text: "Hola como va", time: "12:29", seen: true },
            { id: "m4", from: "me", text: "Todo bien", time: "12:29", seen: true },
            { id: "m5", from: "me", text: "Genial y tus cosas", time: "12:29", seen: true },
            { id: "m6", from: "me", text: "Jejej", time: "12:29", seen: true },
        ],
    },
    {
        id: "c2",
        name: "Maru",
        avatar: "https://i.pravatar.cc/100?img=47",
        lastMessage: "Dale, voy",
        lastTime: "11:03",
        messages: [
            { id: "m1", from: "them", text: "¿Nos vemos 19:30?", time: "10:59" },
            { id: "m2", from: "me", text: "Sí, perfecto", time: "11:01", seen: true },
            { id: "m3", from: "them", text: "Dale, voy", time: "11:03" },
        ],
    },
    {
        id: "c3",
        name: "Profe UTN",
        avatar: "https://i.pravatar.cc/100?img=12",
        lastMessage: "Subí el proyecto a Vercel",
        lastTime: "09:15",
        messages: [
            { id: "m1", from: "them", text: "Subí el proyecto a Vercel", time: "09:15" },
        ],
    },
];
