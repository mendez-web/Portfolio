import { Menu, Moon, Sun, X } from "lucide-react";
import Button from "../components/Button";
import { useContext, useState } from "react";
import { BgContext } from "../App";

const navLinks = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#project",
    label: "Project",
  },
  {
    href: "#experience",
    label: "Experience",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];
const Navbar = ({ backgroundChange, bgIcon }) => {
  const [isMobile, setIsMobile] = useState(false);
  const background = useContext(BgContext);
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5 z-100">
      <nav className="container mx-auto px-6 flex items-center justify-between font-bold uppercase">
        <a
          href="#"
          className={
            background === "white"
              ? "text-xl font-bold tracking-tight transition-colors hover:text-primary-dark"
              : "text-xl font-bold tracking-tight transition-colors hover:text-primary-light"
          }
        >
          EM <span className="text-primary-text">.</span>
        </a>
        {/*Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 pl-30">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, idx) => (
              <a
                href={link.href}
                key={idx}
                className={
                  background === "white"
                    ? "flex px-4 py-2 text-sm text-black hover:text-active-text-light rounded-full hover:bg-surface-dark"
                    : "px-4 py-2 text-sm text-white hover:text-active-text-dark rounded-full hover:bg-surface-light"
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/*CTA Button */}
        <div className="flex gap-6 justify-center content-center">
          <div className="hidden md:block">
            <Button
              size="sm"
              className={
                background === "white"
                  ? "bg-primary-light border-black"
                  : "bg-primary-dark border-white"
              }
            >
              Contact Me
            </Button>
          </div>
          {/* Background Button */}
          {bgIcon === "Sun" ? (
            <Sun
              className="cursor-pointer w-10 h-8 mt-1.5 hidden md:block hover:text-primary-dark"
              onClick={() => backgroundChange()}
            ></Sun>
          ) : (
            <Moon
              className="cursor-pointer w-10 h-8 mt-1.5 hidden md:block  hover:text-primary-light"
              onClick={() => backgroundChange()}
            ></Moon>
          )}
        </div>
        {/*Mobile Navigation Button */}
        <button
          className={
            background === "white"
              ? "md:hidden p-2 text-black cursor-pointer"
              : "md:hidden p-2 text-white cursor-pointer"
          }
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <X /> : <Menu size={24} />}
        </button>
      </nav>

      {/*Mobile Navigation */}
      {isMobile && (
        <div
          className={
            background === "white"
              ? "md:hidden glass-light animate-fade-in"
              : "md:hidden glass-dark animate-fade-in"
          }
        >
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <a
                href={link.href}
                key={idx}
                className={
                  background === "white"
                    ? "text-lg text-black hover:text-active-text py-2 font-bold hover:opacity-[0.5] text-center"
                    : "text-lg text-muted-text hover:text-active-text py-2 font-bold hover:opacity-[0.5] text-center"
                }
                onClick={() => setIsMobile(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              size="sm"
              className={
                background === "white"
                  ? "bg-primary-light border-black"
                  : "bg-primary-dark border-white"
              }
            >
              Contact Me
            </Button>
            <Button
              size="sm"
              className={
                background === "white"
                  ? "bg-primary-dark"
                  : "bg-primary-light text-primary-text-light"
              }
              onClick={() => backgroundChange()}
            >
              {background === "white"
                ? "Enable Dark Mode"
                : "Enable Light Mode"}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
