import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
    return (
        <Card className="project-card-view">
            <Card.Img className="card-img" variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
                <div>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text style={{ textAlign: "justify" }}>
                        <span>{props.description}</span>
                    </Card.Text>
                </div>
                <div className="tech-stack">
                    <h5 className="stack-heading" style={{ textAlign: "justify", color: "grey" }}>Tech Stack:</h5>
                    <div className="tech-icons">
                        {props.techStack?.map((icon, index) => (
                            <span key={index} className="tech-icon">{icon}</span>
                        ))}
                    </div>
                </div>
                <div className="tool-stack">
                    <h5 className="stack-heading" style={{ textAlign: "justify", color: "grey" }}>Tool Stack:</h5>
                    <div className="tool-icons">
                        {props.toolStack?.map((icon, index) => (
                            <span key={index} className="tool-icon">{icon}</span>
                        ))}
                    </div>
                </div>
            </Card.Body>
            <Card.Footer>
                <Button
                    variant="primary"
                    href={props.ghLink}
                    target="_blank">
                    <BsGithub /> &nbsp;
                    {props.isBlog ? "Blog" : "GitHub"}
                </Button>
                {!props.isBlog && props.demoLink && (
                    <Button
                        variant="primary"
                        href={props.demoLink}
                        target="_blank"
                        style={{ marginLeft: "10px" }}
                    >
                        <CgWebsite /> &nbsp;
                        {"Demo"}
                    </Button>
                )}
            </Card.Footer>
        </Card >
    );
} export default ProjectCards;