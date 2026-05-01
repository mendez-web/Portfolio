import { Menu, X } from "lucide-react";
import Button from "../components/Button";
import { useState } from "react";

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
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
      <nav className="container mx-auto px-6 flex items-center justify-between ">
        <a
          href="#"
          className="text-xl font-bold tracking-tight transition-colors hover:text-primary"
        >
          EM <span className="text-primary-text">.</span>
        </a>
        {/*Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-ceter gap-1">
            {navLinks.map((link, idx) => (
              <a
                href={link.href}
                key={idx}
                className="px-4 py-2 text-sm text-muted-text hover:text-active-text rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/*CTA Button */}
        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>

        {/*Mobile Navigation Button */}
        <button
          className="md:hidden p-2 text-background-text cursor-pointer"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <X /> : <Menu size={24} />}
        </button>
      </nav>
      {/*Mobile Navigation */}
      {isMobile && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <a
                href={link.href}
                key={idx}
                className="text-lg text-muted-text hover:text-active-text py-2"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm">Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
