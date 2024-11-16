import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { companies } from "./../constants.jsx";
export default function CustomizedTimeline() {
  const getTimeLineitem = (company, itemNum) => {
    if (itemNum === 0) {
      return (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              className="dot"
              sx={{
                width: "10px",
                height: "10px",
                backgroundColor: "rgba(95,252,139,1)",
                borderRadius: "50%",
                boxSizing: "border-box",
                animation: "rotate 4s linear infinite",
              }}
            ></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography component="span">{company.name}</Typography>
              <Typography
                style={{ color: "grey", fontSize: "14px" }}
                color="textSecondary"
              >
                {company.date}
              </Typography>
            </div>
            <Typography
              style={{ color: "grey", fontSize: "14px" }}
              color="textSecondary"
            >
              {company.title}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      );
    } else {
      return (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            {itemNum !== companies.length - 1 ? <TimelineConnector /> : <></>}
          </TimelineSeparator>
          <TimelineContent>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography component="span">{company.name}</Typography>
              <Typography
                style={{
                  color: "grey",
                  fontSize: "14px",
                  marginTop: "3px",
                  marginLeft: "auto",
                }}
                color="textSecondary"
              >
                {company.date}
              </Typography>
            </div>
            <Typography
              style={{ color: "grey", fontSize: "14px" }}
              color="textSecondary"
            >
              {company.title}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      );
    }
  };

  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
      position="right"
    >
      {companies.map((company, idx) => getTimeLineitem(company, idx))}
    </Timeline>
  );
}
