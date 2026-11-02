import "./globals.css";

export const metadata = {
  title: "Lei Rui Holdings — Creator Management & Business Services",
  description:
    "Talent management for TikTok and social media creators, plus the business side: setup, bookkeeping, contracts and operations. Based in Laguna Beach, California.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
