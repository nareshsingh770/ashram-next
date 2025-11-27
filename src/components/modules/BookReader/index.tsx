"use client";
import { booksAPI } from "@/services/api";
import React, { useEffect } from "react";
import PdfReader from "../PdfReader";

const BookReader = ({ id }: { id: string }) => {
  const [bookData, setBookData] = React.useState<Book | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const bookDetail = await booksAPI.getBookDetail(id);
      console.log(bookDetail, "book detail data");
      setBookData(bookDetail.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold">{bookData?.title}</h1>
        <p className="text-gray-600 mt-2">{bookData?.author}</p>
      </div>
      {bookData && bookData?.filePath && (
        <PdfReader
          file={`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${bookData?.filePath}`}
        />
      )}
    </div>
  );
};

export default BookReader;
