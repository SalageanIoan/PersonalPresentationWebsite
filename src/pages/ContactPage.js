import React, { useState } from "react";
import { FiSend, FiUser, FiMail, FiMessageCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import axios from "axios";

function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [sending, setSending] = useState(false); // To handle loading state

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
            style={styles.section}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                style={styles.container}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <h1 style={styles.title}>Contact Me</h1>
                <p style={styles.description}>
                    Have a question or want to work together? Feel free to reach out!
                </p>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <FiUser style={styles.inputIcon} />
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <FiMail style={styles.inputIcon} />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <FiMessageCircle style={styles.inputIcon} />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            style={styles.textarea}
                        />
                    </div>
                    <motion.button
                        type="submit"
                        style={styles.button}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={sending} // Disable the button while sending
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
        background: "linear-gradient(45deg, #f3f4f6 0%, #e5e7eb 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
    },
    container: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        padding: "2.5rem",
        borderRadius: "24px",
        maxWidth: "600px",
        width: "100%",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
    },
    title: {
        fontSize: "2.5rem",
        color: "#1f2937",
        marginBottom: "1rem",
        fontWeight: "600",
        textAlign: "center",
    },
    description: {
        fontSize: "1.1rem",
        color: "#4b5563",
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
        color: "#6b7280",
    },
    input: {
        padding: "1rem 1rem 1rem 3rem",
        fontSize: "1rem",
        borderRadius: "12px",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        outline: "none",
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        transition: "border-color 0.3s ease",
    },
    textarea: {
        padding: "1rem 1rem 1rem 3rem",
        fontSize: "1rem",
        borderRadius: "12px",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        outline: "none",
        resize: "vertical",
        minHeight: "50px",
        maxHeight: "200px",
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        transition: "border-color 0.3s ease",
        textAlign: "left",
    },
    button: {
        padding: "1rem 2rem",
        backgroundColor: "#3b82f6",
        color: "#fff",
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