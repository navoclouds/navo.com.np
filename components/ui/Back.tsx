"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function Back() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors w-fit"
    >
      <ArrowLeft size={16} />
      Go Back
    </button>
  );
}
