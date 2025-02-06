"use client"; // Marks this as a Client Component

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Correct import for Next.js 13+
import Footer from "../Footer";
import Navbar from "../navbar";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  image?: {
    asset?: {
      url: string;
    };
  };
}

const WishlistPage = () => {
  const router = useRouter();
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  useEffect(() => {
    // Retrieve wishlist from local storage on page load
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      const wishlist = JSON.parse(savedWishlist);
      setWishlistItems(wishlist);
    }
  }, []);

  const handleRemoveItem = (id: number) => {
    const updatedWishlist = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save updated wishlist to local storage
  };

  const handleClearWishlist = () => {
    setWishlistItems([]);
    localStorage.setItem("wishlist", JSON.stringify([])); // Clear wishlist in local storage
  };

  const handleNavigateToProduct = (id: number) => {
    router.push(`/product/${id}`); // Navigate to product details page
  };

  return (
    <div>
      <Navbar />
      <div className="p-6 bg-white lg:p-12">
        <h1 className="text-2xl font-bold text-[#1D3178] mb-6">Your Wishlist</h1>
        {wishlistItems.length === 0 ? (
          <p className="text-center text-gray-600">Your wishlist is empty.</p>
        ) : (
          <div>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 border text-[#1D3178] text-xs sm:text-base">Product</th>
                  <th className="p-4 border text-[#1D3178] text-xs sm:text-base">Product Name</th>
                  <th className="p-4 border text-[#1D3178] text-xs sm:text-base">Price</th>
                  <th className="p-4 border text-[#1D3178] text-xs sm:text-base">Action</th>
                </tr>
              </thead>
              <tbody>
                {wishlistItems.map((item) => (
                  <tr key={item.id} className="text-center">
                    <td className="p-4 border flex items-center justify-center space-x-4">
                      <Image
                        alt={item.name}
                        className="w-16 h-auto rounded-lg object-cover cursor-pointer"
                        src={item.image?.asset?.url || "/placeholder.jpg"}
                        width={100}
                        height={100}
                        onClick={() => handleNavigateToProduct(item.id)}
                      />
                    </td>
                    <td className="p-4 border text-[#1D3178] text-xs sm:text-base">
                      <p className="font-semibold">{item.name}</p>
                    </td>
                    <td className="p-4 border text-[#1D3178] text-xs sm:text-base">
                      ${Number(item.price).toFixed(2)}
                    </td>
                    <td className="p-4 border">
                      <button
                        className="text-red-500 text-xs sm:text-sm"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-6 flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md text-sm sm:text-base"
                onClick={handleClearWishlist}
              >
                Clear Wishlist
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WishlistPage;