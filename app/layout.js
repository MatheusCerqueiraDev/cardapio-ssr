import ContentWrapper from "@/components/ContentWrapper";
import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      {/* <Footer /> */}
    </html>
  );
}
