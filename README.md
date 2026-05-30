# 🛒 Hecto E-Commerce Website

A modern **full-stack e-commerce website** built with **Next.js, TypeScript, Tailwind CSS, and Sanity CMS**.  
This project demonstrates a complete shopping experience including product listing, cart management, and dynamic content fetching from Sanity.

🌐 Live Demo: https://hecto-hafsarahman-final.vercel.app  
📂 GitHub Repo: https://github.com/HafsaRahman05/hecto-hafsarahman  

---

## 🚀 Project Overview

This project is a fully functional e-commerce frontend integrated with a headless CMS (Sanity) for dynamic product management.

It includes:
- Product browsing
- Product detail pages
- Shopping cart system
- Wishlist functionality
- Blog pages
- Authentication UI (login page)
- Responsive UI design

---

## 📁 Folder Structure
```bash
hecto-hafsarahman/
│
├── pages/ # Next.js pages (routing system)
│ ├── api/ # API routes
│ ├── blog/ # Blog pages
│ ├── product/ # Product listing pages
│ ├── cart/ # Shopping cart
│ ├── wishlist/ # Wishlist system
│ ├── contact/ # Contact page
│ ├── shop/ # Shop pages
│ ├── navbar/ # Navigation component
│ ├── footer/ # Footer component
│ └── index.tsx # Homepage
│
├── public/ # Static assets (images, icons)
│
├── script/
│ └── import-data.mjs # Data import script for Sanity
│
├── src/
│ ├── app/ # App routing (Next.js app directory)
│ └── sanity/ # Sanity CMS configuration & data fetching
│
├── styles/ # Global CSS & Tailwind styles
│
├── sanity.config.ts # Sanity project configuration
├── sanity.cli.ts # Sanity CLI setup
├── tailwind.config.ts # Tailwind configuration
├── next.config.ts # Next.js configuration
└── tsconfig.json # TypeScript configuration

```
---

## ⚙️ Technologies Used

- ⚛️ Next.js (React Framework)
- 🟦 TypeScript
- 🎨 Tailwind CSS
- 🧠 Sanity CMS (Headless CMS)
- 📦 Node.js
- 🔗 REST / GROQ Queries
- 🧾 Vercel Deployment

---

## ✨ Features

- 🛍️ Product listing & filtering
- 🔍 Product detail pages
- 🛒 Add to cart functionality
- ❤️ Wishlist system
- 📰 Blog pages integration
- 📱 Fully responsive design
- ⚡ Fast performance (Next.js SSR/SSG)
- ☁️ Dynamic content from Sanity CMS

---

## 🔄 How It Works

1. Product data is stored in **Sanity CMS**
2. Next.js fetches data using GROQ queries
3. Pages are rendered dynamically (SSR/SSG)
4. User interacts with cart & wishlist in frontend
5. UI updates instantly without reload

---

## 🧪 Getting Started

Clone the repository:

```bash
git clone https://github.com/HafsaRahman05/hecto-hafsarahman.git
cd hecto-hafsarahman
```
Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

Open:
```bash
http://localhost:3000
```

## 🌍 Deployment

This project is deployed on **Vercel**

To deploy your own version:

- Connect GitHub repo to Vercel  
- Add environment variables (Sanity keys)  
- Click Deploy 🚀  

---

## 👩‍💻 Author

**Hafsa Rahman**  
Software Engineering Student  
Focused on Full Stack & Data Science Development  

---

## ⭐ Future Improvements

- Payment gateway integration (Stripe)  
- User authentication (NextAuth)  
- Admin dashboard for products  
- Advanced filtering & search  
- Backend order management system  
