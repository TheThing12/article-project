"use client";
import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import "./component.css";

export default function Image() {
  return (
    <CardMedia
      component="img"
      height={700}
      width={10}
      image={`https://c4.wallpaperflare.com/wallpaper/268/726/529/stroke-artwork-abstract-coloured-lines-wallpaper-preview.jpg`}
      alt="running car"
    />
  );
}
