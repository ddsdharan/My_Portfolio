// import React, { useState, useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
// import pdf from "../../Assets/Resume/Resume-Dhanasasidharan-Dhanabal.pdf";
// import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;



// function ResumeNew() {
//     const [width, setWidth] = useState(1200);

//     useEffect(() => {
//         setWidth(window.innerWidth);
//     }, []);

//     return (
//         <div>
//             <Container fluid className="resume-section">
//                 <Particle />
//                 <Row style={{ justifyContent: "center", position: "relative" }}>
//                     <Button
//                         variant="primary"
//                         href={pdf}
//                         target="_blank"
//                         style={{ maxWidth: "250px" }}
//                     >
//                         <AiOutlineDownload />
//                         &nbsp;Download CV
//                     </Button>
//                 </Row>

//                 <Row className="resume">
//                     <Document file={pdf} className="d-flex justifyContent-center">
//                         <Page className="pdf-page" renderTextLayer={false} pageNumber={1} scale={width > 786 ? 1 : 0.6} />
//                         <Page className="pdf-page" renderTextLayer={false} pageNumber={2} scale={width > 786 ? 1 : 0.6} />
//                     </Document>
//                 </Row>

//             </Container>
//         </div>
//     );
// }

// export default ResumeNew;



import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Resume/Resume-Dhanasasidharan-Dhanabal.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Spinner from 'react-bootstrap/Spinner';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function ResumeNew() {
    const [width, setWidth] = useState(1200);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    const handleLoadSuccess = () => {
        setLoading(false);
    };

    return (
        <div>
            <Container fluid className="resume-section">
                <Particle />
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>

                <Row className="resume">
                    {loading && (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    )}
                    <Document
                        file={pdf}
                        className="d-flex justifyContent-center"
                        onLoadSuccess={handleLoadSuccess}
                    >
                        <Page className="pdf-page" renderTextLayer={false} pageNumber={1} scale={width > 786 ? 1 : 0.5} />
                        <Page className="pdf-page" renderTextLayer={false} pageNumber={2} scale={width > 786 ? 1 : 0.5} />
                    </Document>
                </Row>

            </Container>
        </div>
    );
}

export default ResumeNew;
