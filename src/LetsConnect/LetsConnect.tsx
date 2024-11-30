import React from "react";
import { Col, Row } from "react-bootstrap";

const LetsConnect = () => {
  return (
    <div className="timeline-container">
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 className="timeline-title">Let's connect</h2>
      </div>

      <Row>
        <Col xs={12} className="mt-3">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img className="connectLogo" src="linkedin.png" alt="linkedin" />
            <a
              href="https://www.linkedin.com/in/ashrana1993/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "10px" }}
              className="white-text connectLogoText"
            >
              LinkedIn Profile
            </a>
          </div>
        </Col>
        <Col xs={12} className="mt-3">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img className="connectLogo" src="gmail.png" alt="gmail" />
            <a
              href="mailto:ashrana1993@gmail.com"
              style={{ marginLeft: "10px" }}
              className="white-text connectLogoText"
            >
              Gmail
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LetsConnect;
