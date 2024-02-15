import React, { useState } from "react";
import { useProductsContext } from "../context/ProductContext";

function CategoryMenu() {
  const {  handleCategoryClick, isOpen, setIsOpen} = useProductsContext();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class="relative inline-block text-left w-1/6">
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Category
          <svg
            class="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div class="py-1" role="none">
            <button
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              id="menu-item-0"
              category="cbdoil"
              onClick={() => handleCategoryClick("CBD Oil")}
            >
              CBD Oil
            </button>
            <button
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              id="menu-item-1"
              category="gummies"
              onClick={() => handleCategoryClick( "Gummies")}
            >
              Gummies
            </button>
            <button
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              id="menu-item-2"
              category="balm"
              onClick={() => handleCategoryClick( "CBD balm")}
            >
              CBD Balm
            </button>
            <button
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              id="menu-item-2"
              category="all"
              onClick={() => handleCategoryClick("All")}
            >
              All
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryMenu;
