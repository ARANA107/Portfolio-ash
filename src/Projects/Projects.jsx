import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="timeline-container">
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 className="timeline-title">Projects</h2>
      </div>
      <Row>
        <Col xs={1} className="mt-3">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer", // Make the div look clickable
            }}
            onClick={() => navigate("/notes-app")}
          >
            <img src={"notes.png"} width={50} height={50} alt="Notes Icon" />
            <div>Notes App</div>
          </div>
        </Col>
        <Col xs={1} className="mt-3">
          <a
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              textDecoration: "none",
              cursor: "pointer", // Make the div look clickable
            }}
            target="_blank"
            rel="noopener noreferrer"
            href={"https://ashwhiz-nextjs.vercel.app/"}
          >
            <img src={"foodies.webp"} width={50} height={50} alt="Notes Icon" />
            <div>Foodies (next.js)</div>
          </a>
        </Col>
        <Col xs={12} className="mt-3">
          <div style={{ display: "flex", alignItems: "center" }}></div>
        </Col>
      </Row>
    </div>
  );
};
export default Projects;
