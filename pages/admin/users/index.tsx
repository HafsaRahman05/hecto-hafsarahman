"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/pages/component/ui/card";

const client = createClient({
  projectId: "8xdi20kn",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-15",
});

interface User {
  _id?: string;
  name?: string;
  email: string;
  role?: string;
  password?: string;
}

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    // Fetch users from Sanity
    const query = `*[_type == "user"]{ _id, name, email, role }`;
    const sanityUsers = await client.fetch(query);

    // Fetch users from localStorage
    const localUsers = JSON.parse(localStorage.getItem("users") || "[]") || [];

    // Combine both lists
    setUsers([...sanityUsers, ...localUsers.map((user: User) => ({ ...user, role: "user" }))]);
  };

  // Function to delete a user from localStorage
  const deleteUser = (email: string) => {
    const updatedUsers = users.filter((user) => user.email !== email);
    setUsers(updatedUsers);

    // Remove from localStorage
    const localUsers = JSON.parse(localStorage.getItem("users") || "[]") || [];
    const newLocalUsers = localUsers.filter((user: User) => user.email !== email);
    localStorage.setItem("users", JSON.stringify(newLocalUsers));
  };

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Manage Users</CardTitle>
        </CardHeader>
        <CardContent>
          {users.map((user, index) => (
            <div key={user._id || index} className="flex justify-between items-center border-b py-2">
              <div>
                <p className="font-semibold">{user.name || "Guest User"}</p>
                <p className="text-gray-600">
                  {user.email} ({user.role}) {user.password && `- Password: ${user.password}`}
                </p>
              </div>
              <button
                onClick={() => deleteUser(user.email)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
