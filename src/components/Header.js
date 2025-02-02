import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiFolder, FiUser, FiMail, FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";

const Header = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <motion.header
            style={darkMode ? styles.headerDark : styles.header}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div style={styles.logo}>
                <Link to="/" style={styles.logoLink}>
                    <img
                        src="/logo.png"
                        alt="Portfolio Logo"
                        style={styles.logo}
                    />
                </Link>
            </div>
            <nav style={styles.nav}>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link to="/" style={styles.navLink}>
                        <FiHome style={styles.navIcon} />
                        Home
                    </Link>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link to="/projects" style={styles.navLink}>
                        <FiFolder style={styles.navIcon} />
                        Projects
                    </Link>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link to="/about" style={styles.navLink}>
                        <FiUser style={styles.navIcon} />
                        About
                    </Link>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link to="/contact" style={styles.navLink}>
                        <FiMail style={styles.navIcon} />
                        Contact
                    </Link>
                </motion.div>
            </nav>
            <motion.button
                onClick={toggleDarkMode}
                style={styles.toggleButton}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
            >
                {darkMode ? <FiSun style={styles.toggleIcon} /> : <FiMoon style={styles.toggleIcon} />}
            </motion.button>
            <motion.button
                onClick={toggleMenu}
                style={styles.menuButton}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
            >
                {menuOpen ? <FiX style={styles.menuIcon} /> : <FiMenu style={styles.menuIcon} />}
            </motion.button>
            {menuOpen && (
                <motion.div
                    style={darkMode ? styles.dropdownMenuDark : styles.dropdownMenu}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Link to="/" style={styles.dropdownLink} onClick={toggleMenu}>
                        <FiHome style={styles.navIcon} />
                        Home
                    </Link>
                    <Link to="/projects" style={styles.dropdownLink} onClick={toggleMenu}>
                        <FiFolder style={styles.navIcon} />
                        Projects
                    </Link>
                    <Link to="/about" style={styles.dropdownLink} onClick={toggleMenu}>
                        <FiUser style={styles.navIcon} />
                        About
                    </Link>
                    <Link to="/contact" style={styles.dropdownLink} onClick={toggleMenu}>
                        <FiMail style={styles.navIcon} />
                        Contact
                    </Link>
                </motion.div>
            )}
        </motion.header>
    );
};

const styles = {
    header: {
        backgroundColor: "#333",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
    },
    headerDark: {
        backgroundColor: "#111",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
    },
    logo: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
    },
    nav: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        gap: '2.5rem',
    },
    navLink: {
        textDecoration: "none",
        color: "white",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        fontSize: "1rem",
        fontWeight: "500",
        transition: "color 0.3s ease",
    },
    navIcon: {
        fontSize: "1.2rem",
        color: "white",
    },
    toggleButton: {
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "white",
        fontSize: "1.5rem",
    },
    toggleIcon: {
        fontSize: "1.5rem",
    },
    menuButton: {
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "white",
        fontSize: "1.5rem",
        display: "none",
    },
    menuIcon: {
        fontSize: "1.5rem",
    },
    dropdownMenu: {
        position: "absolute",
        top: "100%",
        right: 0,
        backgroundColor: "#333",
        padding: "1rem",
        borderRadius: "0.5rem",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
    },
    dropdownMenuDark: {
        position: "absolute",
        top: "100%",
        right: 0,
        backgroundColor: "#111",
        padding: "1rem",
        borderRadius: "0.5rem",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
        zIndex: 1000,
    },
    dropdownLink: {
        textDecoration: "none",
        color: "white",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        fontSize: "1rem",
        fontWeight: "500",
        padding: "0.5rem 0",
        transition: "color 0.3s ease",
    },
    '@media (max-width: 768px)': {
        nav: {
            display: 'none',
        },
        menuButton: {
            display: 'block',
        },
    },
};

export default Header;