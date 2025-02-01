import React, { useEffect, useState } from "react";
import { FiFolder, FiCode, FiCpu, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

const ProjectsPage = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch("https://api.github.com/users/SalageanIoan/repos");
                const data = await response.json();
                setRepos(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching GitHub repositories:", error);
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

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
                <h1 style={styles.title}>My Projects</h1>
                <p style={styles.description}>
                    Here are some of the projects I've worked on, ranging from embedded systems to web development.
                </p>

                {loading ? (
                    <p style={styles.loading}>Loading projects...</p>
                ) : (
                    <div style={styles.projects}>
                        {repos.map((repo) => (
                            <motion.div
                                key={repo.id}
                                style={styles.projectCard}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiFolder style={styles.projectIcon} />
                                <h3>{repo.name}</h3>
                                <p>{repo.description || ""}</p>
                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.repoLink}
                                >
                                    <FiGithub style={styles.linkIcon} />
                                    View on GitHub
                                </a>
                            </motion.div>
                        ))}
                    </div>
                )}
            </motion.div>
        </motion.section>
    );
};

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
        borderRadius: "15px",
        maxWidth: "800px",
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
    projects: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem",
    },
    projectCard: {
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        padding: "1.5rem",
        borderRadius: "12px",
        textAlign: "center",
        cursor: "pointer",
        transition: "transform 0.3s ease",
    },
    projectIcon: {
        fontSize: "2rem",
        color: "#3b82f6",
        marginBottom: "1rem",
    },
    repoLink: {
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        marginTop: "1rem",
        color: "#3b82f6",
        textDecoration: "none",
        fontWeight: "500",
    },
    linkIcon: {
        fontSize: "1.2rem",
    },
    loading: {
        textAlign: "center",
        color: "#4b5563",
        fontSize: "1.1rem",
    },
};

export default ProjectsPage;