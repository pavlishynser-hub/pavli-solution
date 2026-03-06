import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PavliSolution — AI Marketing & Software Development Agency",
  description:
    "We help companies grow using AI, marketing and custom software.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
