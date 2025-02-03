import React, { useState } from "react";
import { FiSend, FiUser, FiMail, FiMessageCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";
import axios from "axios";
import {colors} from "../styles/colors";

function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [sending, setSending] = useState(false);
    const { darkMode } = useDarkMode();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);

        try {
            alert("Work in progress! Please check back later.You can contact me at ionu2044@gmail.com");
        } catch (error) {
            console.error("Error sending email:", error);
            alert("There was an error sending your message. Please try again.");
        } finally {
            setSending(false);
        }
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
                <h1 style={darkMode ? styles.titleDark : styles.title}>Contact Me</h1>
                <p style={darkMode ? styles.descriptionDark : styles.description}>
                    Have a question or want to work together? Feel free to reach out!
                </p>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <FiUser style={darkMode ? styles.inputIconDark : styles.inputIcon} />
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            style={darkMode ? styles.inputDark : styles.input}
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <FiMail style={darkMode ? styles.inputIconDark : styles.inputIcon} />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            style={darkMode ? styles.inputDark : styles.input}
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <FiMessageCircle style={darkMode ? styles.inputIconDark : styles.inputIcon} />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            style={darkMode ? styles.textareaDark : styles.textarea}
                        />
                    </div>
                    <motion.button
                        type="submit"
                        style={styles.button}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={sending}
                    >
                        {sending ? "Sending..." : <><FiSend style={styles.buttonIcon} /> Send Message</>}
                    </motion.button>
                </form>
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
        backdropFilter: "blur(10px)",
        border: `1px solid ${colors.darkBorder}`,
    },
    containerDark: {
        backgroundColor: colors.darkCardBackground,
        padding: "2.5rem",
        borderRadius: "24px",
        maxWidth: "600px",
        width: "100%",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(10px)",
        border: `1px solid ${colors.darkBorder}`,
    },
    title: {
        fontSize: "2.5rem",
        color: colors.darkerGray,
        marginBottom: "1rem",
        fontWeight: "600",
        textAlign: "center",
    },
    titleDark: {
        fontSize: "2.5rem",
        color: colors.darkText,
        marginBottom: "1rem",
        fontWeight: "600",
        textAlign: "center",
    },
    description: {
        fontSize: "1.1rem",
        color: colors.textGray,
        lineHeight: "1.6",
        marginBottom: "2rem",
        textAlign: "center",
    },
    descriptionDark: {
        fontSize: "1.1rem",
        color: colors.lightTextGray,
        lineHeight: "1.6",
        marginBottom: "2rem",
        textAlign: "center",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
    },
    inputGroup: {
        position: "relative",
        display: "flex",
        alignItems: "center",
    },
    inputIcon: {
        position: "absolute",
        left: "1rem",
        fontSize: "1.2rem",
        color: colors.textGray,
    },
    inputIconDark: {
        position: "absolute",
        left: "1rem",
        fontSize: "1.2rem",
        color: colors.lightTextGray,
    },
    input: {
        padding: "1rem 1rem 1rem 3rem",
        fontSize: "1rem",
        borderRadius: "12px",
        border: `1px solid ${colors.blueWhite}`,
        outline: "none",
        width: "100%",
        backgroundColor: colors.white,
        transition: "border-color 0.3s ease",
    },
    inputDark: {
        padding: "1rem 1rem 1rem 3rem",
        fontSize: "1rem",
        borderRadius: "12px",
        border: `1px solid ${colors.lightdarkBlue}`,
        outline: "none",
        width: "100%",
        backgroundColor: colors.darkGray,
        color: colors.white,
        transition: "border-color 0.3s ease",
    },
    textarea: {
        padding: "1rem 1rem 1rem 3rem",
        fontSize: "1rem",
        borderRadius: "12px",
        border: `1px solid ${colors.blueWhite}`,
        outline: "none",
        resize: "vertical",
        minHeight: "50px",
        maxHeight: "200px",
        width: "100%",
        backgroundColor: colors.white,
        transition: "border-color 0.3s ease",
        textAlign: "left",
    },
    textareaDark: {
        padding: "1rem 1rem 1rem 3rem",
        fontSize: "1rem",
        borderRadius: "12px",
        border: `1px solid ${colors.lightdarkBlue}`,
        outline: "none",
        resize: "vertical",
        minHeight: "50px",
        maxHeight: "200px",
        width: "100%",
        backgroundColor: colors.darkGray,
        color: colors.white,
        transition: "border-color 0.3s ease",
        textAlign: "left",
    },
    button: {
        padding: "1rem 2rem",
        backgroundColor: colors.primaryBlue,
        color: colors.white,
        border: "none",
        borderRadius: "12px",
        cursor: "pointer",
        fontSize: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        transition: "background-color 0.3s ease",
    },
    buttonIcon: {
        fontSize: "1.2rem",
    },
};

export default ContactPage;