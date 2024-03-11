import { ReactNode, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useWindowDirection } from "@/hooks/useWindowDirection";

export default function MainLayout({ children }: { children: ReactNode }) {
  const Wdirection = useWindowDirection();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>();

  // console.log({
  //   isMenuOpen: isMenuOpen,
  //   screen: screen,
  // });
  return (
    <>
      {/* Backdrop */}
      <div
        className={
          " fixed h-dvh w-full left-0 top-0 flex duration-700 items-center " +
          (isMenuOpen ? "blur-0  " : "   blur-lg")
        }
      >
        <Navbar />
      </div>
      {/* Backdrop END */}
      <div
        className={
          " min-h-dvh relative bg-white " +
          (isMenuOpen ? " buka duration-300 scale-75 translate-x-1/2" : " duration-700")
        }
        onClick={() => isMenuOpen && setIsMenuOpen(false)}
      >
        <div
          className={
            " sticky top-0 duration-150" +
            (Wdirection == "down" ? " -translate-y-[100%]" : "")
          }
        >
          <Header
            menuHamProps={{
              onClick() {
                setIsMenuOpen(!isMenuOpen);
              },
            }}
          />
        </div>
        {children}
      </div>
    </>
  );
}
