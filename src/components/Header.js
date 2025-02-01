import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiFolder, FiUser, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const Header = () => {
    return (
        <motion.header
            style={styles.header}
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
};

export default Header;