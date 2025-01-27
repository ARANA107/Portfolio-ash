import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import MediaCard from "./MediaCard";
const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="timeline-container">
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 className="timeline-title">Projects</h2>
      </div>
      <Row>
        <Col xs={12} sm={8} md={6} lg={4} className="mt-3">
          <MediaCard
            image={"commercial_bank.png"}
            title={"Commercial bank app"}
            body={
              "This platform features modern UI interfaces for wire transfers, recipient management, account management, and tracking money in and out."
            }
            btnComponent={
              <Button
                size="small"
                onClick={() =>
                  window.open(
                    "https://commercial-bank.vercel.app/",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                Go to project
              </Button>
            }
          />
        </Col>
        <Col xs={12} sm={8} md={6} lg={4} className="mt-3">
          <MediaCard
            image={"foodies.png"}
            title={"Foodies app (next.js)"}
            body={
              "This platform is built on next.js framework. Purpose of this app is to demonstrate knowledge in next.js and SSR."
            }
            btnComponent={
              <Button
                size="small"
                onClick={() =>
                  window.open(
                    "https://ashwhiz-nextjs.vercel.app/",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                Go to project
              </Button>
            }
          />
        </Col>
        <Col xs={12} sm={8} md={6} lg={4} className="mt-3">
          <MediaCard
            image={"newNote.png"}
            title={"Notes app"}
            body={
              "Simple note taking app. Built on minimalist design with add and delete functionality. More features will be added soon."
            }
            btnComponent={
              <Button size="small" onClick={() => navigate("/notes-app")}>
                Go to project
              </Button>
            }
          />
        </Col>
        <Col xs={12} className="mt-3">
          <div style={{ display: "flex", alignItems: "center" }}></div>
        </Col>
      </Row>
    </div>
  );
};
export default Projects;
