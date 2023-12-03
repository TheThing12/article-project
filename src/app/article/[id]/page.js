// "use client";
// import "./article.css";
// import ResponsiveAppBar from "@/app/Components/navbar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faGithub,
//   faInstagram,
//   faTwitter,
//   faXTwitter,
// } from "@fortawesome/free-brands-svg-icons";
// import axios from "axios";
// import { useState, useEffect } from "react";

// export async function generateArticle() {
//   const res = await axios.get(
//     "http://localhost:1337/api/articles?populate=image"
//   );
//   const data = await res.json();

//   return data.map((article) => ({
//     id: article.id,
//   }));
// }

// export default function Article() {
//   const [article, setArticle] = useState("");

//   useEffect(() => {
//     async function fetchArticle(id) {
//       const getUrl = `http://localhost:1337/api/articles${id}`;
//       const response = await axios.get(getUrl);
//       const result = response.data.data;
//       console.log(getUrl);
//       return setArticle(result);
//     }
//     fetchArticle();
//   }, []);
//   return (
//     <div className="container-article">
//       <section>
//         <ResponsiveAppBar />
//       </section>
//       {article &&
//         article.map((data, i) => {
//           console.log(data.i);
//           return (
//             <div>
//               <div className="div-container">
//                 <p className="title">{data.attributes.title}</p>
//                 <div className="container-author-date">
//                   <p className="author">{data.attributes.author}</p>
//                   <p className="date">{data.attributes.date}</p>
//                 </div>

//                 <p className="article">{data.attributes.article}</p>
//               </div>
//             </div>
//           );
//         })}
//       <footer className="footer">
//         <div className="footerContainer">
//           <div className="sociallinks">
//             <a href="#" class="linkedin">
//               <FontAwesomeIcon icon={faXTwitter} size="2xs" width={16} />
//             </a>
//             <a href="#" class="facebook">
//               <FontAwesomeIcon icon={faFacebook} size="2xs" width={16} />
//             </a>
//             <a href="#" class="instagram">
//               <FontAwesomeIcon icon={faInstagram} size="2xs" width={16} />
//             </a>
//             <a href="#" class="github">
//               <FontAwesomeIcon icon={faGithub} size="2xs" width={16} />
//             </a>
//             <a href="#" class="twitter">
//               <FontAwesomeIcon icon={faTwitter} size="2xs" width={16} />
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
