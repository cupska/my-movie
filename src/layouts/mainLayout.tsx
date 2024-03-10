import { ReactNode, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "./mainLayout.css";

export default function MainLayout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log({
    isMenuOpen: isMenuOpen,
  });
  return (
    <>
      {/* Backdrop */}
      <div
        className={
          " fixed h-dvh w-full left-0 top-0 flex duration-1000 items-center " +
          (isMenuOpen ? "blur-0 duration-1000" : "   blur-lg")
        }
      >
        <Navbar />
      </div>
      {/* Backdrop END */}
      <div
        className={
          " min-h-dvh menuAnimasi bg-white" + (isMenuOpen ? " buka " : " tutup")
        }
        onClick={() => isMenuOpen && setIsMenuOpen(false)}
      >
        <Header
          menuHamProps={{
            onClick() {
              setIsMenuOpen(!isMenuOpen);
            },
          }}
        />
        {children}
      </div>
    </>
  );
}
