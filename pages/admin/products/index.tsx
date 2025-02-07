"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import { Card, CardContent, CardHeader, CardTitle } from '@/pages/component/ui/card';
import Link from "next/link";

const client = createClient({
  projectId: "8xdi20kn",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-15",
});

interface Product {
  _id: string;
  name: string;
  price: number;
  image?: { asset: { url: string } };
}

export default function ProductManagement() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const query = `*[_type == "product"]{ _id, name, price, image{ asset->{url} } }`;
    const data = await client.fetch(query);
    setProducts(data);
  };

  return (
<div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Manage Products</CardTitle>
        </CardHeader>
        <CardContent>
          {products.map((product) => (
            <div key={product._id} className="flex justify-between items-center border-b py-2">
              <div>
                <p className="font-semibold">{product.name}</p>
                <p className="text-gray-600">${product.price}</p>
              </div>
              <Link href={`/admin/products/edit/${product._id}`} className="text-blue-500">Edit</Link>
            </div>
          ))}
        </CardContent>
      </Card>
      </div>
  );
}
