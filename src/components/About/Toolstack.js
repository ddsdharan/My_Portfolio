import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiGit
} from "react-icons/di";
import {
    SiVisualstudiocode,
    SiPostman,
    SiRender,
    SiVercel,
    SiWindows11,
    SiNetlify,
    SiNodemon,
    SiWebpack,
    SiAxios
} from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiWindows11 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRender />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVercel />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNodemon />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiWebpack />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAxios />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNetlify />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
            </Col>
        </Row>
    );
}

export default Toolstack;