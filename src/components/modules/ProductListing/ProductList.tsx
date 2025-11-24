import Heading from "@/components/atoms/Heading";
import ProductCards from "@/components/common/ProductCards";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { getBooks } from "@/store/slices/bookSlice";
import { booksAPI } from "@/services/api";
import PDFReader from "../PdfReader";

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [books, setBooks] = React.useState<string | null>(null);
  const fetchBook = async () => {
    const response = await booksAPI.getBooks();
    return response.data;
  };
  useEffect(() => {
    const fetchBooksData = async () => {
      try {
        const books = await fetchBook();
        const blob = new Blob([books], { type: "application/pdf" });
        const blobUrl = URL.createObjectURL(blob);
        setBooks(blobUrl);
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
    </div>
  );
};

export default ProductList;
