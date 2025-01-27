import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard({ image, title, body, btnComponent }) {
  return (
    <Card
      sx={{ backgroundColor: "rgb(18,18,18)", color: "white", maxWidth: 345 }}
    >
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "white" }}>
          {body}
        </Typography>
      </CardContent>
      <CardActions>{btnComponent}</CardActions>
    </Card>
  );
}
