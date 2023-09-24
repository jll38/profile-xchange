"use client";
import React from "react";

type ExitProps = {
  goHome: boolean
}
export function BackButton({goHome} : ExitProps) { //Go Home would be true if user came from other website
  return (
    <div id="back-arrow" className="w-full text-left p-[1em]">
      <button
        onClick={() => {
          history.back();
        }}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>
    </div>
  );
}
