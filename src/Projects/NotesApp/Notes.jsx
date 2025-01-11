import React, { useState } from "react";
import StickyNote from "./StickyNote";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Notes = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={handleBackClick}
        style={{ color: "white", margin: "20px" }}
      >
        Back
      </Button>
      <h1 className="white-text text-center">Welcome to notes app </h1>
      <StickyNote />
    </div>
  );
};
export default Notes;
