"use client";

import { scrollTo } from "@/app/helpers/scrollTo";
import React from "react";

export const NavigationButton = ({ htmlElementId, label }) => {
  return (
    <button
      className="p-4 text-white text-lg"
      onClick={() => scrollTo(htmlElementId)}
    >
      {label}
    </button>
  );
};
