'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Image from 'next/image';

export default function TitlebarBelowImageList() {
    const [article, setArticle] = useState("");
    
    useEffect(() => {
      async function fetchArticle() {
          const getUrl = "http://localhost:1337/api/articles?populate=image";
          const response = await axios.get(getUrl);
          const result = response.data.data;
          return setArticle(result)
      } fetchArticle();
      }, []);

  return (
    <div className='card-container'>
        {article && article.map ((data, i) => {
            console.log(data.attributes.image.data.attributes.url)
            const imageUrl = data.attributes.image.data.attributes.url
            return
             <ImageList sx={{ width: 100, height: 150 }}>
                <ImageListItem>
            <img
                srcSet={`http://localhost:1337${imageUrl}`}
                src={`http://localhost:1337${imageUrl}`}
                alt={data.attributes.title}
                loading="lazy"
            />
            <ImageListItemBar
                title={data.attributes.title}
                subtitle={<span>by: {data.attributes.author}</span>}
                position="below"
            />
                </ImageListItem> 
            
                </ImageList>

        })}
    </div>
    
  )

}