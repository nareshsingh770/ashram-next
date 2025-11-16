import React from "react";
import Button from "@/components/atoms/Button";

const ProductCards = () => {
  return (
    <a href="#" className="group relative block overflow-hidden">
      <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
        <span className="sr-only">Wishlist</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          ></path>
        </svg>
      </button>

      <img
        src="/images/books/book.webp"
        alt=""
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="relative border border-gray-100 bg-white p-6 text-left">
        <h3 className="mt-1.5 text-lg font-semibold text-gray-900">
          Wireless Headphones
        </h3>

        <p className="mt-1.5 line-clamp-3 text-gray-700 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis
          iure obcaecati pariatur. Officiis qui, enim cupiditate aliquam
          corporis iste.
        </p>

        <form className="mt-4 flex gap-4">
          <Button
            text="Order Now"
            classnames="text-[0.75rem] !px-3 !py-2"
            isPrimary
          />

          <Button
            type="button"
            classnames="text-[0.75rem] !px-2 !py-2"
            text="Read Now"
          />
        </form>
      </div>
    </a>
  );
};

export default ProductCards;
