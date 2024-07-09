"use client";

import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=Joni123",
      {
        method: "POST",
      }
    );
    if (!res.ok) {
      setStatus("Revalidate failed");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revalidate Succes");
      }
    }
  };
  return (
    <div className="w-3/6 h-96 bg-gray-300 rounded-[12px] flex justify-center items-center">
      {status}
      <button
        className="p-2 bg-red-500 rounded-xl m-5"
        onClick={() => revalidate()}
      >
        Revalidate
      </button>
    </div>
  );
}
