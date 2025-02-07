"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/pages/component/ui/card";
import Link from "next/link";

const client = createClient({
  projectId: "8xdi20kn",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-15",
});

interface Order {
  _id: string;
  user: { name: string; email: string };
  total: number;
  status: string;
}

export default function OrderManagement() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const query = `*[_type == "order"]{ _id, user->{name, email}, total, status }`;
    const data = await client.fetch(query);
    setOrders(data);
  };

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Manage Orders</CardTitle>
        </CardHeader>
        <CardContent>
          {orders.map((order) => (
            <div key={order._id} className="flex justify-between items-center border-b py-2">
              <div>
                <p className="font-semibold">Order ID: {order._id}</p>
                <p className="text-gray-600">{order.user.name} - {order.user.email}</p>
                <p className="text-gray-600">Total: ${order.total} - <span className="text-blue-500">{order.status}</span></p>
              </div>
              <Link href={`/admin/orders/edit/${order._id}`} className="text-blue-500">View</Link>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
