"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Sanity client setup
const client = createClient({
  projectId: "8xdi20kn",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-15",
});

// Interface for product structure
interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl?: string;
  description: string;
  image?: {
    asset?: {
      url: string;
    };
  };
  discountPercentage: number;
  tags: string[];
}

// FeaturedProduct Component
const FeaturedProduct: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const router = useRouter();

  // Fetch products from Sanity
  useEffect(() => {
    fetchProducts();
    loadWishlistFromStorage();
  }, []);

  const fetchProducts = async () => {
    try {
      const query = `
      *[_type == "product"] {
        _id,
        name,
        price,
        imageUrl,
        description,
        discountPercentage,
        image { asset->{url} },
        tags
      }`;
      const data = await client.fetch(query);
      console.log("Fetched products:", data);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Load wishlist from localStorage
  const loadWishlistFromStorage = () => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  };
  const handleViewDetails = (product: Product) => {
    router.push(`/featuredproduct/${product._id}`);
  };
  // Toggle Wishlist Item
  const toggleWishlist = (product: Product) => {
    let updatedWishlist = [...wishlist];

    if (wishlist.some((item) => item._id === product._id)) {
      updatedWishlist = wishlist.filter((item) => item._id !== product._id);
    } else {
      updatedWishlist.push(product);
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Check if product is in wishlist
  const isInWishlist = (id: string) => wishlist.some((item) => item._id === id);

  return (
    <div className="w-full md:w-[80%] lg:w-auto mx-auto bg-white py-20">
      <h2 className="text-[#1a0b5b] text-[32px] md:text-[42px] leading-[49.22px] text-center mb-12 font-bold">
        Featured Products
      </h2>
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        {products.slice(0, 4).map((product) => (
          <div key={product._id} className="relative group">
            <div className="w-[270px] h-[361px] hover:bg-[#2f1ac4] hover:text-white shadow-custom bg-[#ffffff] flex flex-col justify-center items-center overflow-hidden transition-all duration-300">
              <div className="w-[270px] flex flex-col items-center justify-between h-[236px] bg-[#f6f7fb]">
                {/* Wishlist Button */}
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => toggleWishlist(product)}
                    title="Add to Wishlist"
                    className="text-[#1389ff] hover:text-[#2f1ac4] transition-colors duration-300"
                  >
                    {isInWishlist(product._id) ? (
                      <svg
                        className="w-[24px] h-[24px] text-red-500"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-[24px] h-[24px]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 21l-1-1C5 15 2 12 2 8a5 5 0 0 1 10 0 5 5 0 0 1 10 0c0 4-3 7-9 12z" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Product Image */}
                <Image
                  src={product.image?.asset?.url || "/placeholder.jpg"}
                  alt={product.name}
                  loading="lazy"
                  width="150"
                  height="150"
                  decoding="async"
                  className="object-cover transition-all duration-300 group-hover:scale-105"
                />
                <div className="bottom-0 w-full text-white text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    className="w-[94px] h-6 rounded-[2px] mb-2 text-sm bg-[#08D15F] hover:bg-green-700 transition-colors"
                    onClick={() => handleViewDetails(product)}
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="text-center text-[14px] leading-4 my-4">
                <h3 className="text-[18px] leading-5 font-semibold text-red-500 hover:text-white">
                  {product.name}
                </h3>
                <div className="flex justify-center items-center">
                  <span className="text-[#05E6B7] text-4xl">-</span>
                  <span className="text-[#F701A8] text-4xl">-</span>
                  <span className="text-[#00009D] text-4xl">-</span>
                </div>
                <p className="text-sm hover:text-white">Code - Y523201</p>
                <p className="text-lg font-semibold">${Number(product.price || 0).toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
