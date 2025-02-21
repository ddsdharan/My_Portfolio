import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I am a dynamic full-stack developer with over 6 years of robust experience in customer service and operations.
                            <br />
                            <br />
                            Recently, I have honed my skills in web development, merging my technical expertise with a keen focus on delivering exceptional user experiences.

                            <br />
                            <br />Proficient in

                            <i>
                                <b className="purple"> JavaScript, HTML, CSS, ReactJS, NodeJS, MongoDB, and ExpressJS </b>
                            </i>
                            <br />
                            <br />
                            I am dedicated to crafting innovative &nbsp;
                            <i>
                                <b className="purple">Web Technologies and Products </b> My passion extends to exploring areas such as{" "}
                                <b className="purple">
                                    blockchain, low-level design (LLD), high-level design (HLD), and notification systems.
                                </b>
                            </i>
                            <br />
                            <br />
                            Explore my portfolio to see the projects I’ve worked on,
                            showcasing my ability to bridge the gap between functionality and user-centric design.
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;