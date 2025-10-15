import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Welcome from "./components/Welcome.jsx";
import ChatWindow from "./components/ChatWindow.jsx";
import "./styles/chat.css";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Welcome />} />
                    <Route path="chat/:id" element={<ChatWindow />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
