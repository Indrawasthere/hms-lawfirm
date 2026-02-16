"use client";

import { usePathname } from "next/navigation";

interface ConditionalPaddingProps {
  children: React.ReactNode;
}

export default function ConditionalPadding({
  children,
}: ConditionalPaddingProps) {
  const pathname = usePathname();

  const isHomePage =
    pathname === `/${pathname.split("/")[1]}` ||
    pathname === `/${pathname.split("/")[1]}/` ||
    !pathname.split("/")[2];

  const noPaddingPages = [
    "tentang-kami",
    "studi-kasus",
    "riwayat-kasus",
    "testimoni",
    "kontak",
    "layanan-hukum",
  ];

  const isNoPaddingPage = noPaddingPages.some((page) =>
    pathname.includes(page),
  );

  const getPaddingClasses = () => {
    if (isHomePage || isNoPaddingPage) {
      return "min-h-screen pt-0";
    }

    return "min-h-screen pt-28 md:pt-32 lg:pt-36";
  };

  return <main className={getPaddingClasses()}>{children}</main>;
}
