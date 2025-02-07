"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer from "../Footer";
import Navbar from "../navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

interface User {
    email: string;
    password: string;
}

const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "admin@hafsa.com" && password === "123") {
        router.push("/admin");
    } else if (email.endsWith("@gmail.com")) {
        const newUser: User = { email, password };

        // Save new user in localStorage
        let users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        // Save logged-in user
        localStorage.setItem("loggedInUser", JSON.stringify(newUser));
        setLoggedInUser(newUser);
    } else {
        alert("Please enter a valid email ending with @gmail.com");
    }
};

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
  };

  return (
    <div className="w-full bg-gray-50">
      <Navbar />
      <div className="bg-gray-200 py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#101750] mb-2">My Account</h1>
          <p className="text-sm text-black">
            Home <span className="text-black">.</span> Pages <span className="text-black">.</span>{" "}
            <span className="text-[#FB2E86]">My Account</span>
          </p>
        </div>
      </div>

      <div className="flex min-h-screen items-center justify-center bg-black-100 p-6">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl text-[#151875] font-bold mb-4 text-center">
            {loggedInUser ? "User Account" : "LOGIN"}
          </h1>

          {loggedInUser ? (
            <div className="text-center">
              <p className="text-lg font-medium">Email: {loggedInUser.email}</p>
              <p className="text-lg font-medium">Password: {loggedInUser.password}</p>
              <button
                onClick={handleLogout}
                className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 focus:outline-none"
              >
                LOGOUT
              </button>
            </div>
          ) : (
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-black border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-black border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                LOGIN
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
