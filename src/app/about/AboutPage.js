// src/app/about/AboutPage.jsx
"use client";

import { MDXProvider } from "@mdx-js/react";
import MDXContent from "./page.mdx";

export default function AboutPage() {
  return (
    <MDXProvider>
      <MDXContent />
    </MDXProvider>
  );
}
