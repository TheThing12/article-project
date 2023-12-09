"use client";
import { useState, useEffect } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./component.css";
import axios from "axios";
import Link from "next/link";

export default function ActionAreaCard() {
  const [article, setArticle] = useState("");

  useEffect(() => {
    async function fetchArticle() {
      const getUrl = "http://localhost:1337/api/articles?populate=image";
      const response = await axios.get(getUrl);
      const result = response.data.data;
      return setArticle(result);
    }
    fetchArticle();
  }, []);
  return (
    <div className="card-container">
      {article &&
        article.map((data) => {
          const id = data.id
          const imageUrl = data.attributes.image.data.attributes.url;
          return (
            <div key={id}>
              <Link href={`/article/${id}`}>
              <div className="card-flex">
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height={200}
                      image={`http://localhost:1337${imageUrl}`}
                      alt={data.attributes.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {data.attributes.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {data.attributes.subtitle}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
