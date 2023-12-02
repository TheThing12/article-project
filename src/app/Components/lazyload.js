"use client";
import "./component.css";
import ActionAreaCard from "./card";
import { useState } from "react";
import dynamic from "next/dynamic";

// Client Components:
const ComponentB = dynamic(() => import("./card"));
export default function ClientComponentExample() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {showMore && <ActionAreaCard />}
      <button className="button" onClick={() => setShowMore(!showMore)}>
        Hello
      </button>
    </>
  );
}
