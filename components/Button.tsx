"use client";
import React from "react";

function Button() {
  return (
    <button
      onClick={function () {
        console.log("ag wo 2g");
      }}
    >
      Click kar do
    </button>
  );
}

export default Button;
