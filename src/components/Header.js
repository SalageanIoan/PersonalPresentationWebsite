import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiFolder, FiUser, FiMail, FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";

const Header = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);
    
    const MobileMenu = () => (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={darkMode ? styles.mobileMenuDark : styles.mobileMenu}
        >
            <Link to="/" style={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
                <FiHome /> Home
            </Link>
            <Link to="/projects" style={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
                <FiFolder /> Projects
            </Link>
            <Link to="/about" style={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
                <FiUser /> About
            </Link>
            <Link to="/contact" style={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
                <FiMail /> Contact
            </Link>
        </motion.div>
    );

    return (
        <motion.header
            style={darkMode ? styles.headerDark : styles.header}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div style={styles.logo}>
                <Link to="/" style={styles.logoLink}>
                    <img src="/logo.png" alt="Portfolio Logo" style={styles.logo} />
                </Link>
            </div>

            {!isMobile ? (
                <nav style={styles.nav}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to="/" style={styles.navLink}>
                            <FiHome style={styles.navIcon} /> Home
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to="/projects" style={styles.navLink}>
                            <FiFolder style={styles.navIcon} /> Projects
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to="/about" style={styles.navLink}>
                            <FiUser style={styles.navIcon} /> About
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to="/contact" style={styles.navLink}>
                            <FiMail style={styles.navIcon} /> Contact
                        </Link>
                    </motion.div>
                </nav>
            ) : (
                <div className="menu-container" style={styles.mobileMenuContainer}>
                    <motion.button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={styles.menuButton}
                        whileHover={{ scale: 1.1 }}
                    >
                        {isMenuOpen ? <FiX style={styles.toggleIcon} /> : <FiMenu style={styles.toggleIcon} />}
                    </motion.button>

                    {isMenuOpen && <MobileMenu />}
                </div>
            )}

            <motion.button
                onClick={toggleDarkMode}
                style={styles.toggleButton}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
            >
                {darkMode ? <FiSun style={styles.toggleIcon} /> : <FiMoon style={styles.toggleIcon} />}
            </motion.button>
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
        padding: "0.5rem",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    mobileMenuContainer: {
        position: 'relative',
    },
    mobileMenu: {
        position: 'absolute',
        top: '60px',
        right: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: 1001,
    },
    mobileMenuDark: {
        position: 'absolute',
        top: '60px',
        right: '20px',
        backgroundColor: '#1f2937',
        borderRadius: '8px',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
        zIndex: 1001,
    },
    mobileLink: {
        textDecoration: 'none',
        color: '#1f2937',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 1rem',
        borderRadius: '6px',
        transition: 'background-color 0.2s',
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