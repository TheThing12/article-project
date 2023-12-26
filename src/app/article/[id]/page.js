"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import ResponsiveAppBar from "@/app/Components/navbar";
import "./article.css";

export default function Article() {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const getUrl = "http://localhost:1337/api/articles"; // Removed `populate` query parameter
        const response = await axios.get(getUrl);
        const result = response.data.data;
        console.log(getUrl);
        setArticle(result);
      } catch (error) {
        console.error("Error fetching articles:", error.message);
      }
    }
    fetchArticle();
  }, []);

  return (
    <div className="container-article">
      <section>
        <ResponsiveAppBar />
      </section>
      {article &&
        article.map((data, i) => {
          console.log(data); // Removed incorrect usage of data.i
          return (
            <div key={i}>
              {" "}
              {/* Added a unique key for each mapped element */}
              <div className="div-container">
                <p className="title">{data.attributes.title}</p>
                <div className="container-author-date">
                  <p className="author">{data.attributes.author}</p>
                  <p className="date">{data.attributes.date}</p>
                </div>
                <p className="article">{data.attributes.article}</p>
              </div>
            </div>
          );
        })}
      <footer className="footer">
        <div className="footerContainer">
          <div className="sociallinks">
            <a href="#" className="linkedin">
              <FontAwesomeIcon icon={faXTwitter} size="2xs" width={16} />
            </a>
            <a href="#" className="facebook">
              <FontAwesomeIcon icon={faFacebook} size="2xs" width={16} />
            </a>
            <a href="#" className="instagram">
              <FontAwesomeIcon icon={faInstagram} size="2xs" width={16} />
            </a>
            <a href="#" className="github">
              <FontAwesomeIcon icon={faGithub} size="2xs" width={16} />
            </a>
            <a href="#" className="twitter">
              <FontAwesomeIcon icon={faTwitter} size="2xs" width={16} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
