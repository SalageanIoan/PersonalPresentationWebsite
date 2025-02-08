import React, { useEffect, useState } from "react";
import { FiFolder, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";
import { colors } from "../styles/colors";

const ProjectsPage = () => {
    const [repos, setRepos] = useState([]);
    const [commits, setCommits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { darkMode } = useDarkMode();

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch("https://api.github.com/users/SalageanIoan/repos");
                const data = await response.json();
                if (Array.isArray(data)) {
                    setRepos(data);

                    const commitPromises = data.map(async (repo) => {
                        try {
                            const commitResponse = await fetch(
                                `https://api.github.com/repos/SalageanIoan/${repo.name}/commits?per_page=1`
                            );
                            const commitData = await commitResponse.json();
                            return commitData[0] ? { repoName: repo.name, message: commitData[0]?.commit?.message, html_url: commitData[0]?.html_url } : null;
                        } catch {
                            return null;
                        }
                    });

                    const commitResults = (await Promise.all(commitPromises)).filter(Boolean);
                    setCommits(commitResults);
                } else {
                    console.error("Unexpected response format:", data);
                    setError(true);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching GitHub repositories:", error);
                setError(true);
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

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
                <h1 style={darkMode ? styles.titleDark : styles.title}>My Projects</h1>
                <p style={darkMode ? styles.descriptionDark : styles.description}>
                    Here are some of the projects I've worked on, ranging from embedded systems to web development.
                </p>

                {loading ? (
                    <p style={darkMode ? styles.loadingDark : styles.loading}>Loading projects...</p>
                ) : error ? (
                    <p style={darkMode ? styles.errorDark : styles.error}>Error, GitHub API problem!</p>
                ) : (
                    <div style={styles.projects}>
                        {repos.map((repo) => (
                            <motion.div
                                key={repo.id}
                                style={darkMode ? styles.projectCardDark : styles.projectCard}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiFolder style={styles.projectIcon} />
                                <h3 style={darkMode ? styles.textWhite : {}}>{repo.name}</h3>
                                <p style={darkMode ? styles.textWhite : {}}>{repo.description || "No description available."}</p>
                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={darkMode ? styles.repoLinkDark : styles.repoLink}
                                >
                                    <FiGithub style={styles.linkIcon} /> View on GitHub
                                </a>
                            </motion.div>
                        ))}
                    </div>
                )}

                {commits.length > 0 && (
                    <div style={darkMode ? styles.recentProgressDark : styles.recentProgress}>
                        <h2 style={darkMode ? styles.progressTitleDark : styles.progressTitle}>Recent Progress</h2>
                        <div style={styles.commitList}>
                            {commits.map((commit, index) => (
                                <motion.div
                                    key={index}
                                    style={darkMode ? styles.commitCardDark : styles.commitCard}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <h3 style={darkMode ? styles.textWhite : {}}>{commit.repoName}</h3>
                                    <p style={darkMode ? styles.textWhite : {}}>{commit.message}</p>
                                    <a
                                        href={commit.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={darkMode ? styles.repoLinkDark : styles.repoLink}
                                    >
                                        <FiGithub style={styles.linkIcon} /> View on GitHub
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </motion.div>
        </motion.section>
    );
};

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
        borderRadius: "15px",
        maxWidth: "800px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
        border: `1px solid ${colors.darkBorder}`,
        width: "100%",
    },
    containerDark: {
        backgroundColor: colors.darkCardBackground,
        padding: "2.5rem",
        borderRadius: "15px",
        maxWidth: "800px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(10px)",
        border: `1px solid ${colors.darkBorder}`,
        width: "100%",
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
    projects: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem",
    },
    projectCard: {
        backgroundColor: colors.blueWhite,
        padding: "1.5rem",
        borderRadius: "12px",
        textAlign: "center",
        cursor: "pointer",
        transition: "transform 0.3s ease",
        wordWrap: "break-word",
    },
    projectCardDark: {
        backgroundColor: colors.lightdarkBlue,
        padding: "1.5rem",
        borderRadius: "12px",
        textAlign: "center",
        cursor: "pointer",
        transition: "transform 0.3s ease",
        wordWrap: "break-word",
    },
    projectIcon: {
        fontSize: "2rem",
        color: colors.primaryBlue,
        marginBottom: "1rem",
    },
    repoLink: {
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        marginTop: "1rem",
        color: colors.primaryBlue,
        textDecoration: "none",
        fontWeight: "500",
    },
    repoLinkDark: {
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        marginTop: "1rem",
        color: colors.lightBlue,
        textDecoration: "none",
        fontWeight: "500",
    },
    loading: {
        textAlign: "center",
        color: colors.textGray,
        fontSize: "1.1rem",
    },
    loadingDark: {
        textAlign: "center",
        color: colors.lightTextGray,
        fontSize: "1.1rem",
    },
    error: {
        textAlign: "center",
        color: colors.errorRed,
        fontSize: "1.1rem",
    },
    errorDark: {
        textAlign: "center",
        color: colors.errorRed,
        fontSize: "1.1rem",
    },
    recentProgress: {
        marginTop: "3rem",
    },
    recentProgressDark: {
        marginTop: "3rem",
    },
    progressTitle: {
        fontSize: "1.8rem",
        color: colors.darkerGray,
        marginBottom: "1rem",
        fontWeight: "600",
        textAlign: "center",
    },
    progressTitleDark: {
        fontSize: "1.8rem",
        color: colors.darkText,
        marginBottom: "1rem",
        fontWeight: "600",
        textAlign: "center",
    },
    commitList: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem",
    },
    commitCard: {
        backgroundColor: colors.blueWhite,
        padding: "1.5rem",
        borderRadius: "12px",
        textAlign: "center",
        cursor: "pointer",
        transition: "transform 0.3s ease",
        wordWrap: "break-word",
    },
    commitCardDark: {
        backgroundColor: colors.lightdarkBlue,
        padding: "1.5rem",
        borderRadius: "12px",
        textAlign: "center",
        cursor: "pointer",
        transition: "transform 0.3s ease",
        wordWrap: "break-word",
    },
    textWhite: {
        color: colors.white,
    },
    '@media (max-width: 768px)': {
        title: {
            fontSize: "2rem",
        },
        titleDark: {
            fontSize: "2rem",
        },
        description: {
            fontSize: "1rem",
        },
        descriptionDark: {
            fontSize: "1rem",
        },
        projectCard: {
            padding: "1rem",
        },
        projectCardDark: {
            padding: "1rem",
        },
        commitCard: {
            padding: "1rem",
        },
        commitCardDark: {
            padding: "1rem",
        },
    },
};


export default ProjectsPage;