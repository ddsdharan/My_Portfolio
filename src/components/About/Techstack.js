import React from "react";
import { Col, Row } from "react-bootstrap";

import {
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiReact,
    SiMongodb,
    SiExpress,
    SiNodedotjs,
    SiReactbootstrap,
    SiMongoose,
    SiMysql,
    SiNpm,

} from "react-icons/si";

import { FaAws } from "react-icons/fa";


function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

            <Col xs={4} md={2} className="tech-icons">
                <SiHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiCss3 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJavascript />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNodedotjs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiExpress />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiReactbootstrap />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaAws />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMysql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMongoose />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNpm />
            </Col>

        </Row>
    );
}

export default Techstack;