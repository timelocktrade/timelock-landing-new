import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-sm font-semibold text-white/70 tracking-wide uppercase">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#documentation" className="text-white/80 hover:text-white">Documentation</a>
              </li>
              <li>
                <a href="#whitepaper" className="text-white/80 hover:text-white">Whitepaper</a>
              </li>
              <li>
                <a href="#github" className="text-white/80 hover:text-white">GitHub</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/70 tracking-wide uppercase">Community</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#discord" className="text-white/80 hover:text-white">Discord</a>
              </li>
              <li>
                <a href="#twitter" className="text-white/80 hover:text-white">Twitter</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/70 tracking-wide uppercase">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#terms" className="text-white/80 hover:text-white">Terms of Service</a>
              </li>
              <li>
                <a href="#privacy" className="text-white/80 hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="#risks" className="text-white/80 hover:text-white">Risk Disclosures</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center text-xs sm:text-sm text-white/60">
          © 2025 Timelock Protocol. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
