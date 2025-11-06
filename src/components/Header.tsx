import { NavLink } from "./NavLink";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <NavLink to="/" className="text-sm tracking-[0.2em] font-medium">
          YOUR NAME
        </NavLink>
        
        <nav className="flex items-center gap-8">
          <NavLink 
            to="/"
            className="text-xs tracking-[0.15em] font-medium uppercase transition-colors hover:text-accent"
            activeClassName="text-accent"
          >
            Flutter Work
          </NavLink>
          <NavLink 
            to="/about"
            className="text-xs tracking-[0.15em] font-medium uppercase transition-colors hover:text-accent"
          >
            About & Resume
          </NavLink>
          <NavLink 
            to="/contact"
            className="text-xs tracking-[0.15em] font-medium uppercase transition-colors hover:text-accent"
          >
            Contact
          </NavLink>
          <button className="relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
              0
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
