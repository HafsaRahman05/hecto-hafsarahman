// components/ui/card.tsx
import React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return <div className=" h-[7rem] p-4 rounded-lg shadow">{children}</div>;
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="font-bold   text-lg mb-2">{children}</div>;
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl   font-semibold">{children}</h2>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}