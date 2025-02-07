"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import sanityClient from "@sanity/client";
import { createClient } from "@sanity/client";
// import Image from "next/image";
import Footer from "../Footer";
import Navbar from "../navbar";
import { Card, CardContent, CardHeader, CardTitle } from '@/pages/component/ui/card';
import Link from 'next/link';

const client = createClient({
  projectId: "8xdi20kn",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-15",
});

export async function SanityFetch({ query, params = {} }: { query: string; params?: Record<string, unknown> }) {
  return await client.fetch(query, params);
}

const sanity = sanityClient({
  projectId: "8xdi20kn",
  dataset: "production",
  apiVersion: "2025-01-15",
  useCdn: true,
});

interface Product {
  _id: string;
  name: string;
  tags: string[];
  price: number;
  imageUrl?: string;
  description: string;
  image?: {
    asset?: {
      url: string;
    };
  };
  discountPercentage: number;
}

export default function Admin() {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const query = `
      *[_type == "product"] {
        _id,
        name,
        tags,
        price,
        imageUrl,
        description,
        discountPercentage,
        image {
          asset->{url}
        }
      }
      `;
      const data: Product[] = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="bg-white text-black">
      <Navbar />
      <div className="bg-gray-200 py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#101750] mb-2">Admin Panel</h1>
          <p className="text-sm text-black">
            Home <span className="text-black">.</span> Pages <span className="text-black">.</span> <span className="text-[#FB2E86]">Admin dashboard</span>
          </p>
        </div>
      </div>
    <div className="p-6 bg-grey min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Products</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Total Products: {products.length}</p>
          <Link href="/admin/products" className="text-[#FB2E86]">Manage Products</Link>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Manage user accounts</p>
          <Link href="/admin/users" className="text-[#FB2E86]">Manage Users</Link>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <p>View and process orders</p>
          <Link href="/admin/orders" className="text-[#FB2E86]">Manage Orders</Link>
        </CardContent>
      </Card>
    </div>
   
    </div>
  );
}

