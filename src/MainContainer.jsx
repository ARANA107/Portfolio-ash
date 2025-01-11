import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ScrollingTags } from "./ScrollingTags/ScrollingTags";
import CustomizedTimeline from "./TimeLine/CustomizedTimeline";
import MainHeading from "./MainHeading/MainHeading";
import TechStack from "./TechStack/TechStack";
import LetsConnect from "./LetsConnect/LetsConnect";
import Projects from "./Projects/Projects";
const MainContainer = () => {
  return (
    <>
      <Container fluid="md" className=" top-height">
        <Row className="flex-column-reverse flex-md-row">
          <Col
            xs={12}
            md={6}
            style={{ paddingLeft: "40px", marginBottom: "40px" }}
            className="justify-content-xs-center text-center text-md-start"
          >
            <MainHeading />
          </Col>
          <Col
            xs={12}
            md={6}
            className="white-text d-flex justify-content-center mb-4"
          >
            <img
              src="profile.png"
              alt="profile"
              style={{ marginTop: "20px", width: "270px", height: "270px" }}
            />
          </Col>
        </Row>
        <Row className="g-0">
          <Col xs={12} md={4} className="white-text">
            <CustomizedTimeline />
          </Col>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center mt-4 mt-md-0"
          >
            <Row style={{ width: "100%" }}>
              <Col
                xs={12}
                style={{ marginBottom: "10px" }}
                className="d-flex justify-content-center"
              >
                <ScrollingTags />
              </Col>
              <Col xs={12} className="d-flex justify-content-center">
                <TechStack />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={4} className="mt-4 mt-md-0">
            <LetsConnect />
          </Col>
        </Row>
        <Row className="g-0 mt-3">
          <Col xs={12} className="mt-4 mt-md-0">
            <Projects />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainContainer;
