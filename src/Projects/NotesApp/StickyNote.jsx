import React, { useState } from "react";
import DeleteRounded from "@mui/icons-material/DeleteRounded";
import { TextField, Button } from "@mui/material";

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const MAX_CHAR_LIMIT = 100;

  const handleAddNote = () => {
    if (newNote.trim() !== "") {
      setNotes([
        ...notes,
        {
          id: Date.now(),
          content: newNote,
          date: new Date().toLocaleDateString(),
        },
      ]);
      setNewNote(""); // Clear input after saving
    }
  };
  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value.length <= MAX_CHAR_LIMIT) {
      setNewNote(value); // Only update the state if under the character limit
    }
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "870px", margin: "auto" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {notes.map((note) => (
          <div
            key={note.id}
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "rgb(245, 241, 186)",
              border: "1px solid #FBC02D",
              borderRadius: "10px",
              padding: "10px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
              color: "#333",
              overflow: "hidden", // Ensures overflowing content is hidden
              wordWrap: "break-word", // Break long words to prevent overflow
              textOverflow: "ellipsis", // Add ellipsis if text overflows
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <p style={{ margin: 0, flexGrow: 1 }}>{note.content}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "12px", color: "#555" }}>
                {note.date}
              </span>
              <DeleteRounded
                onClick={() => handleDeleteNote(note.id)}
                style={{
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        ))}

        {/* New Note Card */}
        <div
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: "#B2EBF2",
            border: "1px solid #4DD0E1",
            borderRadius: "10px",
            padding: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <TextField
            variant="standard"
            multiline
            rows={5}
            placeholder="Type to add a note..."
            value={newNote}
            onChange={handleInputChange}
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              fontFamily: "inherit",
              fontSize: "14px",
              resize: "none",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "12px", color: "#555" }}>
              {100 - newNote.length} Remaining
            </span>
            <Button
              variant="contained"
              size="small"
              onClick={handleAddNote}
              style={{ backgroundColor: "#4DD0E1", color: "#fff" }}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesApp;
