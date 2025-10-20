import { useState } from "react";
import TimeLockLogo from "./TimeLockLogo";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-8 lg:px-[130px] py-4 flex items-center justify-between backdrop-blur-xl border-b border-border/50">
      <TimeLockLogo />

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-1">
        <a
          href="https://testnet.timelock.trade"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-foreground/90 font-manrope text-[14px] font-medium hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors duration-200"
        >
          Trade
        </a>
        <a
          href="https://docs.timelock.trade/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-muted-foreground font-manrope text-[14px] font-medium hover:text-foreground/90 hover:bg-accent/50 rounded-lg transition-colors duration-200"
        >
          Docs
        </a>
        <a
          href="https://discord.gg/timelock"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-muted-foreground font-manrope text-[14px] font-medium hover:text-foreground/90 hover:bg-accent/50 rounded-lg transition-colors duration-200"
        >
          Join Discord
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 text-foreground hover:text-foreground/80 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border/50 lg:hidden">
          <nav className="flex flex-col p-4 space-y-2">
            <a
              href="https://testnet.timelock.trade"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-foreground/90 font-manrope text-[14px] font-medium hover:bg-accent/50 rounded-lg transition-colors"
            >
              Trade
            </a>
            <a
              href="https://docs.timelock.trade/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-muted-foreground font-manrope text-[14px] font-medium hover:bg-accent/50 rounded-lg transition-colors"
            >
              Docs
            </a>
            <a
              href="https://discord.gg/timelock"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-muted-foreground font-manrope text-[14px] font-medium hover:bg-accent/50 rounded-lg transition-colors"
            >
              Join Discord
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
