"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl font-bold text-navy mb-4">404</h1>
      <p className="text-charcoal mb-8">Halaman tidak ditemukan.</p>
      <Link href="/" className="bg-navy text-white px-6 py-2 rounded">
        Kembali ke Beranda
      </Link>
    </div>
  );
}
