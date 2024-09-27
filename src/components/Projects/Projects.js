import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import currency from "../../Assets/Project/Currency-Converter.info.png";
import library from "../../Assets/Project/Library-Management_info.png";
import weather from "../../Assets/Project/Weather-info.png";
import securereset from "../../Assets/Project/Password-reset_info.png";
import classConnect from "../../Assets/Project/ClassConnect_info.png";
import codeQuest from "../../Assets/Project/CodeQuest_info.png";




function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={currency}
                            isBlog={false}
                            title="Global Currency Converter"
                            description={
                                <div className="project-description">
                                    <p>The Global Currency Converter is a user-friendly web application designed to simplify currency exchange for around 160 international currencies.
                                        Built with real-time data integration, it allows users to quickly convert amounts across different currencies with up-to-date exchange rates. The app supports multiple currencies, features a sleek interface, and offers an intuitive experience for users, making it ideal for travelers, investors, and anyone dealing with international transactions.</p>
                                </div>
                            }
                            ghLink="https://github.com/ddsdharan/Currency-converter"
                            demoLink="https://currency-converter-rho-bice.vercel.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={library}
                            isBlog={false}
                            title="Library Manager"
                            description={
                                <div className="project-description">
                                    <p>
                                        Library manager is an efficient and modern Library Management System designed to automate and streamline the day-to-day operations of libraries.
                                        This system allows users to manage book inventories, track borrowing and returning of books, and handle member accounts seamlessly.
                                        With features like easy cataloging, member management, overdue reminders, and real-time book availability tracking, SmartLib offers a comprehensive solution for libraries of all sizes. The system's user-friendly interface ensures both librarians and members can navigate it with ease, improving overall library efficiency.
                                    </p>
                                </div>
                            }
                            ghLink="https://github.com/ddsdharan/Library-mgt"
                            demoLink="https://library-management-eight-pi.vercel.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={weather}
                            isBlog={false}
                            title="Weatherwatch"
                            description={
                                <div className="project-description">
                                    <p>
                                        WeatherWatch is a comprehensive weather information application that provides accurate, real-time weather updates for any location worldwide. The app delivers current conditions, temperature, humidity, wind speed, and forecasts from the last recent updated information.
                                        With an intuitive user interface and customizable location settings, users can easily stay informed about changing weather patterns, severe weather alerts, and detailed hourly forecasts. Whether you're planning a trip, commuting, or just staying updated, WeatherWatch ensures you have the weather data you need at your fingertips.
                                    </p>
                                </div>
                            }
                            ghLink="https://github.com/ddsdharan/Weather-Forecast-App"
                            demoLink="https://weather-forecast-app-rose.vercel.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={securereset}
                            isBlog={false}
                            title="SecureReset"
                            description={
                                <div className="project-description">
                                    <p>
                                        SecureReset is a robust and secure password reset application designed to streamline the process of recovering forgotten or compromised passwords. The system provides a user-friendly interface with multi-factor authentication, email verification, and secure token generation to ensure the highest level of protection. Users can easily initiate a password reset request, verify their identity, and create new passwords while keeping their accounts secure.
                                        Built with modern encryption standards, SecureReset ensures data privacy and security, offering a seamless and safe experience for both users and administrators.
                                    </p>
                                </div>
                            }
                            ghLink="https://github.com/ddsdharan/Password-Reset-flow"
                            demoLink="https://password-reset-flow-omega.vercel.app/Login"
                        />
                    </Col>


                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={classConnect}
                            isBlog={false}
                            title="ClassConnect"
                            description={
                                <div className="project-description">
                                    <p>
                                        ClassConnect is an all-in-one teacher-student management system designed to enhance communication, collaboration, and administrative efficiency in educational environments. The platform allows teachers to manage student records, track attendance, assign and grade homework, and provide feedback seamlessly. Students can access course materials, submit assignments, and communicate with teachers, creating a collaborative learning space.
                                        With features like progress tracking, notifications, and reporting, EduConnect simplifies the management of educational tasks, making it easier for both teachers and students to focus on learning and development.
                                    </p>
                                </div>
                            }
                            ghLink="https://github.com/ddsdharan/Crud-Student_Teacher-Dashboard"
                            demoLink="https://rainbow-duckanoo-1d9bb8.netlify.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={codeQuest}
                            isBlog={false}
                            title="CodeQuest - Developer Q&A Hub"
                            description={
                                <div className="project-description">
                                    <p>
                                        CodeQuest is a dynamic question-and-answer platform designed for developers and tech enthusiasts to share knowledge, solve coding challenges, and collaborate on projects. Modeled after Stack Overflow, it allows users to ask technical questions, provide expert answers, and upvote the most helpful solutions. With features like reputation building, tags for easy question categorization, and a vibrant community of problem solvers, CodeQuest fosters a learning environment where developers of all skill levels can contribute and grow.
                                        Perfect for troubleshooting code, exploring new technologies, or expanding your expertise in various programming languages.
                                    </p>
                                </div>
                            }
                            ghLink="https://github.com/ddsdharan/stackoverflowclone"
                            demoLink="https://stackoverflowclone-zeta.vercel.app/"
                        />
                    </Col>

                </Row>
            </Container>
        </Container>
    );
}

export default Projects;