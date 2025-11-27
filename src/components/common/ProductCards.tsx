import React from "react";
import Button from "@/components/atoms/Button";
import { Heart } from "lucide-react";

const ProductCards = ({ bookDetail }: { bookDetail: any }) => {
  return (
    <div className="group relative block overflow-hidden">
      <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75 cursor-pointer">
        <Heart />
      </button>

      <img
        src={`${
          bookDetail.coverImage
            ? bookDetail.coverImage
            : "/images/books/book.webp"
        }`}
        alt=""
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="relative border border-gray-100 bg-white p-6 text-left">
        <h3 className="mt-1.5 text-lg font-semibold text-gray-900">
          {bookDetail.title}
        </h3>

        <p className="mt-1.5 line-clamp-3 text-gray-700 text-sm">
          {bookDetail.description}
        </p>

        <form className="mt-4 flex gap-4">
          <Button
            text="Order Now"
            classnames="text-[0.75rem] !px-3 !py-2"
            isPrimary
          />

          <Button
            href={`/book/${bookDetail.id}`}
            classnames="text-[0.75rem] !px-2 !py-2"
            text="Read Now"
          />
        </form>
      </div>
    </div>
  );
};

export default ProductCards;
