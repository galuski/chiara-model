import { useState } from "react";
import { HamburgerBtn } from "./HamburgerBtn";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = (isOpen) => {
        setMenuOpen(isOpen);
    };
    return (
        <header>
            <Logo />
            <Navbar menuOpen={menuOpen}/>
            <HamburgerBtn onToggle={handleToggle}/>
        </header>
    )
}