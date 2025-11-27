"use client";
import Heading from "@/components/atoms/Heading";
import ProductCards from "@/components/common/ProductCards";
import React, { useEffect, useState } from "react";
import PdfReader from "../PdfReader";
import { booksAPI } from "@/services/api";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { getBooks } from "@/store/slices/bookSlice";

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { books } = useSelector((state: RootState) => state.books);
  // const fetchBook = async () => {
  //   const response = await fetch("http://localhost:8000/api/v1/books");
  //   const bookList = await response.json();
  //   return bookList;
  // };

  // useEffect(() => {
  //   const fetchBooksData = async () => {
  //     try {
  //       const booksData = await fetchBook();
  //       setBooks(booksData);
  //     } catch (error) {
  //       console.error("Failed to fetch books:", error);
  //     }
  //   };

  //   fetchBooksData();
  // }, []);

  useEffect(() => {
    dispatch(getBooks());
  }, []);
  console.log(books, "books from redux");
  return (
    <div className="layout-spacing mx-auto px-6 py-32 text-center">
      <Heading
        title="Books & Products"
        subtitle="Meditation, Yoga, Retreats, Free Programs & More..."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books &&
          books.length > 0 &&
          books.map((book, index) => (
            <ProductCards key={index} bookDetail={book} />
          ))}
      </div>

      {/* {books && <PdfReader file={books} />} */}
    </div>
  );
};

export default ProductList;
