import "./globals.css";

export const metadata = {
  title: "Lei Rui Holdings — Talent Management & Business Services",
  description:
    "LGBTQ+-owned talent management and business services: career management, bookings, contracts, bookkeeping and operations. Based in Laguna Beach, California.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
