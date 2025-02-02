import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCode, FiUser, FiCpu } from "react-icons/fi";
import { useDarkMode } from "../context/DarkModeContext";

function HomePage() {
    const navigate = useNavigate();
    const { darkMode } = useDarkMode();

    const handleNavigation = (path) => {
        navigate(path);
    };

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
                <div style={styles.header}>
                    <FiCpu style={styles.icon} />
                    <h1 style={darkMode ? styles.titleDark : styles.title}>Ioan Salagean</h1>
                    <p style={darkMode ? styles.subtitleDark : styles.subtitle}>Full-Stack & Embedded Systems Developer</p>
                </div>

                <motion.div
                    style={styles.content}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <p style={darkMode ? styles.descriptionDark : styles.description}>
                        <span style={styles.highlight}>Computer Science student</span> passionate about
                        bridging hardware and software. Specializing in <span style={styles.highlight}>embedded systems </span>
                        and web development. I enjoy working on projects that challenge me and allow me to learn new things.
                    </p>

                    <div style={styles.highlights}>
                        <div style={darkMode ? styles.highlightCardDark : styles.highlightCard}>
                            <FiCode style={styles.cardIcon} />
                            <span>C/C++, C#, Java, Javascript</span>
                        </div>
                        <div style={darkMode ? styles.highlightCardDark : styles.highlightCard}>
                            <FiCpu style={styles.cardIcon} />
                            <span>IoT & Embedded</span>
                        </div>
                    </div>

                    <div style={styles.buttonGroup}>
                        <motion.button
                            style={styles.button}
                            onClick={() => handleNavigation("/projects")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiCode style={styles.buttonIcon} />
                            View Projects
                        </motion.button>
                        <motion.button
                            style={darkMode ? styles.buttonSecondaryDark : styles.buttonSecondary}
                            onClick={() => handleNavigation("/about")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiUser style={darkMode ? styles.buttonIconDark : styles.buttonIcon} />
                            Full Profile
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

const styles = {
    section: {
        padding: "2rem",
        background: "linear-gradient(45deg, #f3f4f6 0%, #e5e7eb 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
    },
    sectionDark: {
        padding: "2rem",
        background: "linear-gradient(45deg, #1f2937 0%, #111827 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
    },
    container: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        padding: "2.5rem",
        borderRadius: "24px",
        maxWidth: "800px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
    },
    containerDark: {
        backgroundColor: "rgba(31, 41, 55, 0.9)",
        padding: "2.5rem",
        borderRadius: "24px",
        maxWidth: "800px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(31, 41, 55, 0.3)",
    },
    header: {
        textAlign: "center",
        marginBottom: "2rem",
    },
    icon: {
        fontSize: "3rem",
        color: "#3b82f6",
        marginBottom: "1rem",
    },
    title: {
        fontSize: "2.5rem",
        color: "#1f2937",
        marginBottom: "0.5rem",
        fontWeight: "600",
        letterSpacing: "-0.025em",
    },
    titleDark: {
        fontSize: "2.5rem",
        color: "#f9f9f9",
        marginBottom: "0.5rem",
        fontWeight: "600",
        letterSpacing: "-0.025em",
    },
    subtitle: {
        fontSize: "1.25rem",
        color: "#6b7280",
        fontWeight: "500",
    },
    subtitleDark: {
        fontSize: "1.25rem",
        color: "#d1d5db",
        fontWeight: "500",
    },
    description: {
        fontSize: "1.1rem",
        color: "#4b5563",
        lineHeight: "1.6",
        marginBottom: "2rem",
        textAlign: "center",
    },
    descriptionDark: {
        fontSize: "1.1rem",
        color: "#d1d5db",
        lineHeight: "1.6",
        marginBottom: "2rem",
        textAlign: "center",
    },
    highlight: {
        color: "#3b82f6",
        fontWeight: "500",
    },
    highlights: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1rem",
        marginBottom: "2rem",
    },
    highlightCard: {
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        padding: "1.25rem",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        color: "#1f2937",
        fontWeight: "500",
    },
    highlightCardDark: {
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        padding: "1.25rem",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        color: "#d1d5db",
        fontWeight: "500",
    },
    cardIcon: {
        fontSize: "1.5rem",
        color: "#3b82f6",
    },
    buttonGroup: {
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        flexWrap: "wrap",
    },
    button: {
        padding: "1rem 2rem",
        background: "linear-gradient(45deg, #3b82f6 0%, #2563eb 100%)",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        transition: "all 0.3s ease",
    },
    buttonSecondary: {
        padding: "1rem 2rem",
        background: "linear-gradient(45deg, #3b82f6 0%, #2563eb 100%)",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        transition: "all 0.3s ease",
    },
    buttonSecondaryDark: {
        padding: "1rem 2rem",
        background: "linear-gradient(45deg, #3b82f6 0%, #2563eb 100%)",
        color: "#d1d5db",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        transition: "all 0.3s ease",
    },
    buttonIcon: {
        color: "#fff",
        fontSize: "1.25rem",
    },
    buttonIconDark: {
        color: "#fff",
        fontSize: "1.25rem",
    },
    "@media (max-width: 768px)": {
        container: {
            padding: "1rem",
            borderRadius: "8px",
        },
    }
};

export default HomePage;