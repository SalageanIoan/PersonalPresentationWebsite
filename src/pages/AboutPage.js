import React from "react";
import { FiDownload, FiBook, FiBriefcase, FiCode, FiGlobe, FiUsers, FiActivity, FiStar } from "react-icons/fi";
import { motion } from "framer-motion";

const AboutPage = () => {
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
                <h1 style={styles.title}>About Me</h1>
                <p style={styles.description}>
                    With a wealth of experience in teamwork cultivated through numerous extracurricular activities, I thrive
                    in collaborative environments. I love learning to program because it’s like solving puzzles that
                    challenge my mind. Each line of code is a step towards creating something new. My adept communication
                    skills allow me to effectively convey ideas and properly collaborate with team members. I am driven by a
                    passion for involvement and excel in roles requiring autonomy and organization. I am approachable,
                    empathetic, and I prioritize kindness in all interactions.
                </p>

                <div style={styles.sectionContainer}>
                    <h2 style={styles.sectionTitle}><FiBook style={styles.icon} /> Education</h2>
                    <ul style={styles.list}>
                        <li>
                            <strong>High School:</strong> Liceul Teoretic Gheorghe Marinescu, Târgu Mures (2019 - 2023)
                        </li>
                        <li>
                            <strong>Cambridge C1 Certificate:</strong> Success Lotus, Târgu Mures (2021 - 2022)
                        </li>
                        <li>
                            <strong>University:</strong> Computer Science at the University of Medicine, Pharmacy, Sciences, and
                            Technology of Târgu Mures (2023 - Present)
                        </li>
                        <li>
                            <strong>Teacher Training:</strong> Department at the University of Medicine, Pharmacy, Sciences, and
                            Technology of Târgu Mures (2023 - Present)
                        </li>
                    </ul>
                </div>

                <div style={styles.sectionContainer}>
                    <h2 style={styles.sectionTitle}><FiBriefcase style={styles.icon} /> Work Experience</h2>
                    <ul style={styles.list}>
                        <li>
                            <strong>Junior IT Engineer:</strong> Hirschmann Automotive, Târgu Mures (July 2024 - September 2024)
                            <ul>
                                <li>Worked with SAPUI5, HTML, CSS, and JavaScript.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div style={styles.sectionContainer}>
                    <h2 style={styles.sectionTitle}><FiCode style={styles.icon} /> Skills</h2>
                    <ul style={styles.list}>
                        <li>
                            <strong>Programming Languages:</strong> C/C++, Python, C#, Java, HTML, CSS, JavaScript,
                        </li>
                        <li>
                            <strong>Digital Skills:</strong> SAPUI5, .NET
                        </li>
                        <li>
                            <strong>Languages:</strong>
                            <ul>
                                <li>Romanian (Native)</li>
                                <li>English (C2 Listening, C2 Reading, C1 Writing, C1 Spoken Production, C1 Spoken Interaction)</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div style={styles.sectionContainer}>
                    <h2 style={styles.sectionTitle}><FiActivity style={styles.icon} /> Projects</h2>
                    <ul style={styles.list}>
                        <li>
                            <strong>Automatic Solar System:</strong>
                            <ul>
                                <li>Designed an automated solar tracking system to maximize solar panel efficiency.</li>
                                <li>Implemented a hybrid algorithm combining astronomical calculations and feedback from Light
                                    Dependent Resistors (LDR) sensors.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>GitHub Projects:</strong> Check out my personal projects on <a
                            href="https://github.com/SalageanIoan" target="_blank" rel="noopener noreferrer"
                            style={styles.link}>GitHub</a>.
                        </li>
                    </ul>
                </div>

                <div style={styles.sectionContainer}>
                    <h2 style={styles.sectionTitle}><FiUsers style={styles.icon} /> Volunteering</h2>
                    <ul style={styles.list}>
                        <li>
                            <strong>ESTIEM (European Students of Industrial Engineering and Management):</strong>
                            <ul>
                                <li>Participated in and assisted in organizing events such as "Engineer for a Day" and the
                                    "Medicine and Technology Conference."
                                </li>
                                <li>Provided technical assistance and ensured the safety and engagement of participants.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div style={styles.sectionContainer}>
                    <h2 style={styles.sectionTitle}><FiStar style={styles.icon} /> Hobbies and Interests</h2>
                    <ul style={styles.list}>
                        <li>
                            <strong>Embedded systems</strong> 
                        </li>
                        <li>
                            <strong>Karate:</strong> I practice Kyokushin karate, which challenges me physically and mentally
                            while promoting respect, discipline, and personal growth.
                        </li>
                        <li>
                            <strong>Running:</strong> I enjoy running for its simplicity and the sense of freedom it brings,
                            especially when running with friends.
                        </li>
                    </ul>
                </div>

                <motion.a
                    href="/CV_Salagean_Ioan.pdf"
                    download="CV_Salagean_Ioan.pdf"
                    style={styles.cvLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FiDownload style={styles.buttonIcon} />
                    Download CV
                </motion.a>
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
        borderRadius: "24px",
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
    sectionContainer: {
        marginBottom: "2rem",
    },
    sectionTitle: {
        fontSize: "1.8rem",
        color: "#3b82f6",
        marginBottom: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
    },
    icon: {
        fontSize: "1.5rem",
    },
    list: {
        listStyleType: "disc",
        paddingLeft: "20px",
        color: "#4b5563",
        lineHeight: "1.6",
    },
    cvLink: {
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        marginTop: "1rem",
        padding: "12px 24px",
        backgroundColor: "#3b82f6",
        color: "#fff",
        textDecoration: "none",
        borderRadius: "8px",
        fontSize: "1rem",
        transition: "background-color 0.3s ease",
    },
    link: {
        color: "#3b82f6",
        textDecoration: "none",
        fontWeight: "500",
    },
    buttonIcon: {
        fontSize: "1.2rem",
    },
};

export default AboutPage;