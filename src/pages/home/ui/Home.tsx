"use client";

import { fetchBooks } from "@/entities/book/api";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    fetchBooks(1);
  }, []);

  return <div>Home</div>;
};

export default Home;
