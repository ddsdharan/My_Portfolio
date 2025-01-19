import React from "react";
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import currencyConverter from "../../Assets/Project/Currency-Converter.info.png";
import library from "../../../src/Assets/Project/Library-Management_info.png"
import weather from "../../Assets/Project/Weather-info.png";
import securereset from "../../Assets/Project/Password-reset_info.png";
import classConnect from "../../Assets/Project/ClassConnect_info.png";
import codeQuest from "../../Assets/Project/CodeQuest_info.png";
import KanbanBoard from "../../Assets/Project/KanbanBoard.png";
import {
    FaReact,
    FaBootstrap
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiAxios,
    SiDotenv,
    SiFontawesome,
    SiHtml5,
    SiJavascript,
    SiCss3,
    SiApifox,
    SiVercel,
    SiPostman,
    SiFormik,
    SiReact,
    SiMui,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiRender,
    SiNodemon,
    SiNetlify,
    SiRedux,
    SiAjv,
    SiPostcss
} from "react-icons/si";

const techStackCurrencyConverter = [
    <SiHtml5 key="Html5" />,
    <SiJavascript key="Javascript" />,
    <SiCss3 key="CSS" />

];

const toolStackCurrencyConverter = [
    <SiApifox key="API" />,
    <SiVercel key="Vercel" />,
    <SiPostman key="Postman" />
];

const techStackLibrary = [
    <FaReact key="react" />,
    <FaBootstrap key="bootstrap" />,
    <SiFormik key="formik" />,
    <SiJavascript key="JS" />,
    <SiFontawesome key="font-awesome" />
];

const toolStackLibrary = [
    <SiApifox key="API" />,
    <SiVercel key="Vercel" />,
    <SiPostman key="Postman" />
];

const techStackWeatherwatch = [
    <SiHtml5 key="Html5" />,
    <SiJavascript key="Javascript" />,
    <SiCss3 key="CSS" />
];

const toolStackWeatherwatch = [
    <SiApifox key="API" />,
    <SiVercel key="Vercel" />,
    <SiPostman key="Postman" />
];

const techStacksecurereset = [
    <SiJavascript key="Javascript" />,
    <SiReact key="react" />,
    <SiMui key="Mui" />,
    <SiNodedotjs key="NodeJS" />,
    <SiDotenv key="DotEnv" />,
    <SiExpress key="Express" />,
    <SiMongodb key="MongoDB" />,
    <SiAxios key="Axios" />
];

const toolStacksecurereset = [
    <SiApifox key="API" />,
    <SiVercel key="Vercel" />,
    <SiRender key="render" />,
    <SiNodemon key="nodemon" />,
    <SiPostman key="Postman" />
];

const techStackClassConnect = [
    <SiReact key="react" />,
    <SiMui key="Mui" />,
    <SiNodedotjs key="NodeJS" />,
    <SiExpress key="Express" />,
    <SiMongodb key="MongoDB" />,
    <SiAxios key="Axios" />,
    <SiDotenv key="DotEnv" />,
    <SiApifox key="API" />
];

const toolStackClassConnect = [
    <SiApifox key="API" />,
    <SiRender key="render" />,
    <SiNodemon key="nodemon" />,
    <SiPostman key="Postman" />,
    <SiNetlify key="Netlify" />
];

const techStackCodeQuest = [
    <SiReact key="React" />,
    <SiRedux key="Redux" />,
    <SiAjv key="Ajv" />,
    <SiTailwindcss key="TailwindCSS" />
];

const toolStackCodeQuest = [
    <SiApifox key="API" />,
    <SiNetlify key="Netlify" />,
    <SiNodemon key="nodemon" />,
    <SiPostman key="Postman" />,
];

const techStackkanban = [
    <SiReact key="React" />,
    <SiTailwindcss key="TailwindCSS" />,
    <SiJavascript key="Javascript" />,
    <SiRedux key="Redux" />,
    <SiAjv key="AJV" />,
    <SiPostcss key="PostCSS" />


];

const toolStackkanban = [
    <SiNetlify key="Netlify" />,
    <SiPostman key="Postman" />
];


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
                    <Col md={6} className="project-card">
                        <ProjectCard
                            imgPath={currencyConverter}
                            isBlog={false}
                            title="Global Currency Converter"
                            description={
                                <>
                                    The Global Currency Converter is a user-friendly web application designed to simplify currency exchange for around 160 international currencies.
                                    Built with real-time data integration, it allows users to quickly convert amounts across different currencies with up-to-date exchange rates. The app supports multiple currencies, features a sleek interface, and offers an intuitive experience for users,
                                    making it ideal for travelers, investors, and anyone dealing with international transactions.
                                </>
                            }
                            ghLink="https://github.com/ddsdharan/Currency-converter"
                            demoLink="https://currency-converter-rho-bice.vercel.app/"
                            techStack={techStackCurrencyConverter}
                            toolStack={toolStackCurrencyConverter}
                        />
                    </Col>

                    <Col md={6} className="project-card">
                        <ProjectCard
                            imgPath={library}
                            isBlog={false}
                            title="Library Manager"
                            description={
                                <>
                                    Library manager is an efficient and modern Library Management System designed to automate and streamline the day-to-day operations of libraries.
                                    This system allows users to manage book inventories, track borrowing and returning of books, and handle member accounts seamlessly.
                                    With features like easy cataloging, member management, overdue reminders, and real-time book availability tracking, SmartLib offers a comprehensive solution for libraries of all sizes. The system's user-friendly interface ensures both librarians and members can navigate it with ease, improving overall library efficiency.
                                </>
                            }
                            ghLink="https://github.com/ddsdharan/Library-mgt"
                            demoLink="https://library-management-eight-pi.vercel.app/"
                            techStack={techStackLibrary}
                            toolStack={toolStackLibrary}
                        />
                    </Col>

                    <Col md={6} className="project-card">
                        <ProjectCard
                            imgPath={weather}
                            isBlog={false}
                            title="Weatherwatch"
                            description={
                                <>
                                    WeatherWatch is a comprehensive weather information application that provides accurate, real-time weather updates for any location worldwide. The app delivers current conditions, temperature, humidity, wind speed, and forecasts from the last recent updated information.
                                    With an intuitive user interface and customizable location settings, users can easily stay informed about changing weather patterns, severe weather alerts, and detailed hourly forecasts. Whether you're planning a trip, commuting, or just staying updated, WeatherWatch
                                    ensures you have the weather data you need at your fingertips.
                                </>
                            }
                            ghLink="https://github.com/ddsdharan/Weather-Forecast-App"
                            demoLink="https://weather-forecast-app-rose.vercel.app/"
                            techStack={techStackWeatherwatch}
                            toolStack={toolStackWeatherwatch}
                        />
                    </Col>

                    <Col md={6} className="project-card">
                        <ProjectCard
                            imgPath={securereset}
                            isBlog={false}
                            title="SecureReset"
                            description={
                                <>
                                    SecureReset is a robust and secure password reset application designed to streamline the process of recovering forgotten or compromised passwords. The system provides a user-friendly interface with multi-factor authentication, email verification, and secure token generation to ensure the highest level of protection. Users can easily initiate a password reset request, verify their identity, and create new passwords while keeping their accounts secure.
                                    Built with modern encryption standards, SecureReset ensures data privacy and security, offering a seamless and safe experience for both users and administrators.
                                </>
                            }
                            ghLink="https://github.com/ddsdharan/Password-Reset-flow"
                            demoLink="https://password-reset-flow-omega.vercel.app/Login"
                            techStack={techStacksecurereset}
                            toolStack={toolStacksecurereset}
                        />
                    </Col>

                    <Col md={6} className="project-card">
                        <ProjectCard
                            imgPath={classConnect}
                            isBlog={false}
                            title="ClassConnect"
                            description={
                                <>
                                    ClassConnect is an all-in-one teacher-student management system designed to enhance communication, collaboration, and administrative efficiency in educational environments. The platform allows teachers to manage student records, track attendance, assign and grade homework, and provide feedback seamlessly. Students can access course materials, submit assignments, and communicate with teachers, creating a collaborative learning space.
                                    With features like progress tracking, notifications, and reporting, EduConnect simplifies the management of educational tasks, making it easier for both teachers and students to focus on learning and development.
                                </>
                            }
                            ghLink="https://github.com/ddsdharan/Crud-Student_Teacher-Dashboard"
                            demoLink="https://rainbow-duckanoo-1d9bb8.netlify.app/"
                            techStack={techStackClassConnect}
                            toolStack={toolStackClassConnect}
                        />
                    </Col>

                    <Col md={6} className="project-card">
                        <ProjectCard
                            imgPath={codeQuest}
                            isBlog={false}
                            title="Developer Q&A Hub"
                            description={
                                <>
                                    CodeQuest is a dynamic question-and-answer platform designed for developers and tech enthusiasts to share knowledge, solve coding challenges, and collaborate on projects. Modeled after Stack Overflow, it allows users to ask technical questions, provide expert answers, and upvote the most helpful solutions. With features like reputation building, tags for easy question categorization, and a vibrant community of problem solvers, CodeQuest fosters a learning environment where developers of all skill levels can contribute and grow.
                                    Perfect for troubleshooting code, exploring new technologies, or expanding your expertise in various programming languages.
                                </>
                            }
                            ghLink="https://github.com/ddsdharan/stackoverflowclone"
                            demoLink="https://stackoverflowclone-zeta.vercel.app/"
                            techStack={techStackCodeQuest}
                            toolStack={toolStackCodeQuest}
                        />
                    </Col>

                    <Col md={6} className="project-card">
                        <ProjectCard
                            imgPath={KanbanBoard}
                            isBlog={false}
                            title="KanBan Project Management tool"
                            description={
                                <>
                                    This project is a frontend implementation of a Kanban board designed to streamline task management and enhance productivity. The application mimics the core functionality of popular Kanban tools, offering features such as creating, editing, and organizing tasks across
                                    customizable columns. Each task is categorized into one of three states: Ongoing, In-progress, or Done, ensuring clear visibility of workflow status. Users can set due dates as deadlines for tasks, providing an additional layer of organization and prioritization.
                                    With drag-and-drop functionality and a responsive, user-friendly interface, the project demonstrates proficiency in modern frontend technologies and principles of user-centered design.
                                </>
                            }
                            ghLink="https://github.com/ddsdharan/Kanban_board"
                            demoLink="https://lovely-daifuku-51cf41.netlify.app/"
                            techStack={techStackkanban}
                            toolStack={toolStackkanban}
                        />
                    </Col>

                </Row>
            </Container>
        </Container>
    );
}

export default Projects;