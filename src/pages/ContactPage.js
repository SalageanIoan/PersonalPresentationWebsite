import React from "react";
import { motion } from "framer-motion";
import { FiInstagram, FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import { useDarkMode } from "../context/DarkModeContext";
import { colors } from "../styles/colors";

function ContactPage() {
    const { darkMode } = useDarkMode();

    const socialLinks = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/ioan-salagean-47331428b/",
            icon: <FiLinkedin />,
            color: "#0077b5",
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/ionut_salagean/?igsh=eHp2M3FxYzFocTd1&utm",
            icon: <FiInstagram />,
            color: "#e4405f",
        },
        {
            name: "GitHub",
            url: "https://github.com/SalageanIoan",
            icon: <FiGithub />,
            color: "#333",
        },
        {
            name: "Email",
            url: "mailto:ionu2044@gmail.com",
            icon: <FiMail />,
            color: "#ea4335",
        },
    ];

    return (
        <motion.section
            style={darkMode ? styles.sectionDark : styles.section}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                style={darkMode ? styles.containerDark : styles.container}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <h1 style={darkMode ? styles.titleDark : styles.title}>Let's Connect!</h1>
                <p style={darkMode ? styles.descriptionDark : styles.description}>
                    I'm always open to networking, collaboration, or just a friendly chat.
                    Feel free to reach out through any of the platforms below!
                </p>

                <div style={styles.socialLinksContainer}>
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ ...styles.socialCard, backgroundColor: link.color }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {link.icon}
                            <span>{link.name}</span>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    );
}

const styles = {
    section: {
        padding: "2rem",
        background: `linear-gradient(45deg, ${colors.lightGray} 0%, ${colors.gray} 100%)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
    },
    sectionDark: {
        padding: "2rem",
        background: `linear-gradient(45deg, ${colors.darkerGray} 0%, ${colors.darkGray} 100%)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
    },
    container: {
        backgroundColor: colors.white,
        padding: "2.5rem",
        borderRadius: "24px",
        maxWidth: "600px",
        width: "100%",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
    },
    containerDark: {
        backgroundColor: colors.darkCardBackground,
        padding: "2.5rem",
        borderRadius: "24px",
        maxWidth: "600px",
        width: "100%",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
        textAlign: "center",
    },
    title: {
        fontSize: "2.5rem",
        color: colors.darkerGray,
        marginBottom: "1rem",
        fontWeight: "600",
    },
    titleDark: {
        fontSize: "2.5rem",
        color: colors.darkText,
        marginBottom: "1rem",
        fontWeight: "600",
    },
    description: {
        fontSize: "1.1rem",
        color: colors.textGray,
        marginBottom: "2rem",
    },
    descriptionDark: {
        fontSize: "1.1rem",
        color: colors.lightTextGray,
        marginBottom: "2rem",
    },
    socialLinksContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
    },
    socialCard: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "1.2rem",
        padding: "1rem 2rem",
        borderRadius: "12px",
        textDecoration: "none",
        fontWeight: "bold",
        width: "100%",
        maxWidth: "400px",
        transition: "0.2s ease",
        gap: "0.5rem",
    },
};

export default ContactPage;
