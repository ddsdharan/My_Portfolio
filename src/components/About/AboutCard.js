import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{
                        textAlign: "justify",
                        fontSize: "20px"
                    }}>
                        Hey there!
                        <br />
                        I am <span className="purple">Dhanasasidharan Dhanabal </span> hailing from <span className="purple"> TamilNadu, India.</span>
                        <br />
                        <br />
                        I hold a <span className="purple">B.Tech </span> in <span className="purple">Information Technology</span><br />from Karpagam Institute of Technology, Coimbatore, TN.
                        <br />
                        <br />
                        Beyond my passion for coding and technology, I enjoy staying active and engaged in a variety of interests.
                        Whether it's <span className="purple">diving into exciting games</span>,
                        spending <span className="purple">quality time with family</span>, or exploring new places while <span className="purple">traveling</span>,
                        these activities keep me inspired and balanced.
                    </p>
                    <br />
                    <br />
                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Driven by code, inspired by innovation — I don't just build applications,<br /> I craft experiences."{" "}
                    </p>
                    <footer className="blockquote-footer">Sasidharan D</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;