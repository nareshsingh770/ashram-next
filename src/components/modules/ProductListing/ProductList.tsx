"use client";
import Heading from "@/components/atoms/Heading";
import ProductCards from "@/components/common/ProductCards";
import React, { useEffect, useState } from "react";
import PdfReader from "../PdfReader";

const ProductList = () => {
  const [books, setBooks] = useState<string>("");

  const fetchBook = async () => {
    const response = await fetch("http://localhost:8000/api/v1/books");
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    return url;
  };

  useEffect(() => {
    const fetchBooksData = async () => {
      try {
        const booksData = await fetchBook();
        setBooks(booksData);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };

    fetchBooksData();
  }, []);

  return (
    <div className="layout-spacing mx-auto px-6 py-32 text-center">
      <Heading
        title="Books & Products"
        subtitle="Meditation, Yoga, Retreats, Free Programs & More..."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCards key={index} />
        ))}
      </div>

      {books && <PdfReader file={books} />}
    </div>
  );
};

export default ProductList;
