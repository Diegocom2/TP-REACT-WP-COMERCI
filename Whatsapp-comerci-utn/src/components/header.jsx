import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const { pathname } = useLocation();
    const title = pathname.startsWith("/chat/") ? "Chat" : "WhatsApp React";

    return (
        <header className="topbar">
            <div className="topbar-inner">
                <Link className="brand" to="/">
                    💬 {title}
                </Link>
            </div>
        </header>
    );
}
