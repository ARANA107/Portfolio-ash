import React from "react";
import ScrollingTagsOne from "./ScrollingTagsOne";
import ScrollingTagsTwo from "./ScrollingTagsTwo";

export const ScrollingTags = () => {
  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Skills and expertise</h2>
      <ScrollingTagsOne />
      <ScrollingTagsTwo />
    </div>
  );
};
