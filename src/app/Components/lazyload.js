"use client";
import "./component.css";
import ActionAreaCard from "./card";
import { useState } from "react";
import dynamic from "next/dynamic";

// Client Components:
const ComponentC = dynamic(() => import("./card"), {
  ssr: false,
  loading: () => <p className="p-loading">Loading....</p>,
});
export default function ClientComponentExample() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="div-lazyload">
        <button className="button" onClick={() => setShowMore(!showMore)}>
          Hello
        </button>
      </div>
      {showMore && <ComponentC />}
    </>
  );
}
