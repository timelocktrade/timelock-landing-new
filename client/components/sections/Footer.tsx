import TimeLockLogo from "./TimeLockLogo";

const Footer = () => (
  <footer className="w-full border-t border-border/50 px-4 sm:px-6 lg:px-[130px] py-16 bg-card">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Logo and Description */}
        <div className="md:col-span-1">
          <div className="mb-4">
            <TimeLockLogo />
          </div>
          <p className="text-muted-foreground font-manrope text-sm leading-relaxed">
            Leverage without liquidations. Powered by Uniswap V3.
          </p>
        </div>

        {/* Platform Links */}
        <div>
          <h3 className="text-foreground font-manrope text-sm font-semibold mb-4">
            Platform
          </h3>
          <div className="space-y-3">
            <a
              href="https://testnet.timelock.trade"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-muted-foreground font-manrope text-sm hover:text-foreground/80 transition-colors"
            >
              Trade
            </a>
            <a
              href="https://testnet.timelock.trade/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-muted-foreground font-manrope text-sm hover:text-foreground/80 transition-colors"
            >
              Earn
            </a>
            <a
              href="https://testnet.timelock.trade/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-muted-foreground font-manrope text-sm hover:text-foreground/80 transition-colors"
            >
              Dashboard
            </a>
          </div>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="text-foreground font-manrope text-sm font-semibold mb-4">
            Resources
          </h3>
          <div className="space-y-3">
            <a
              href="https://docs.timelock.trade/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-muted-foreground font-manrope text-sm hover:text-foreground/80 transition-colors"
            >
              Documentation
            </a>
          </div>
        </div>

        {/* Community Links */}
        <div>
          <h3 className="text-foreground font-manrope text-sm font-semibold mb-4">
            Community
          </h3>
          <div className="flex items-center gap-3">
            <a
              href="https://x.com/Timelock_Trade"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 20 21" fill="none">
                <path
                  d="M18.3327 3.45819C18.3327 3.45819 17.7493 5.20819 16.666 6.29152C17.9993 14.6249 8.83268 20.7082 1.66602 15.9582C3.49935 16.0415 5.33268 15.4582 6.66602 14.2915C2.49935 13.0415 0.416016 8.12486 2.49935 4.29152C4.33268 6.45819 7.16602 7.70819 9.99935 7.62486C9.24935 4.12486 13.3327 2.12486 15.8327 4.45819C16.7493 4.45819 18.3327 3.45819 18.3327 3.45819Z"
                  stroke="white"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://discord.gg/g2UDdpJg"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 20 21" fill="none">
                <path
                  d="M8.12473 11.0628C8.12473 11.2482 8.06975 11.4294 7.96674 11.5836C7.86372 11.7378 7.71731 11.8579 7.546 11.9289C7.37469 11.9999 7.18619 12.0184 7.00434 11.9823C6.82248 11.9461 6.65543 11.8568 6.52432 11.7257C6.39321 11.5946 6.30392 11.4275 6.26775 11.2457C6.23157 11.0638 6.25014 10.8753 6.3211 10.704C6.39205 10.5327 6.51222 10.3863 6.66639 10.2833C6.82056 10.1803 7.00181 10.1253 7.18723 10.1253C7.43587 10.1253 7.67433 10.224 7.85015 10.3999C8.02596 10.5757 8.12473 10.8141 8.12473 11.0628ZM12.8122 10.1253C12.6268 10.1253 12.4456 10.1803 12.2914 10.2833C12.1372 10.3863 12.0171 10.5327 11.9461 10.704C11.8751 10.8753 11.8566 11.0638 11.8927 11.2457C11.9289 11.4275 12.0182 11.5946 12.1493 11.7257C12.2804 11.8568 12.4475 11.9461 12.6293 11.9823C12.8112 12.0184 12.9997 11.9999 13.171 11.9289C13.3423 11.8579 13.4887 11.7378 13.5917 11.5836C13.6948 11.4294 13.7497 11.2482 13.7497 11.0628C13.7497 10.8141 13.651 10.5757 13.4751 10.3999C13.2993 10.224 13.0609 10.1253 12.8122 10.1253Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="https://t.me/charandeep_kapoor"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 20 21" fill="none">
                <path
                  d="M17.8818 2.17095C17.7849 2.08733 17.6671 2.03172 17.541 2.01011C17.4149 1.98849 17.2853 2.0017 17.1661 2.04829L1.33331 8.24439C1.10893 8.33164 0.918959 8.48943 0.792006 8.69399C0.665054 8.89855 0.60799 9.13882 0.629405 9.37862C0.65082 9.61842 0.749556 9.84477 0.910748 10.0236C1.07194 10.2024 1.28686 10.3241 1.52316 10.3702L5.6255 11.1756V15.7499C5.62469 15.999 5.69874 16.2427 5.83803 16.4492C5.97733 16.6558 6.17546 16.8158 6.40675 16.9085C6.63768 17.0028 6.89164 17.0254 7.13561 16.9734C7.37958 16.9214 7.60227 16.7973 7.77472 16.617L9.75285 14.5655L12.8911 17.3124C13.1175 17.5132 13.4096 17.6243 13.7122 17.6249C13.8448 17.6248 13.9766 17.6039 14.1028 17.5631C14.3091 17.4977 14.4945 17.3794 14.6408 17.22C14.787 17.0606 14.889 16.8656 14.9364 16.6545L18.1075 2.85923C18.1359 2.73482 18.1299 2.60503 18.0901 2.48378C18.0503 2.36253 17.9783 2.25439 17.8818 2.17095Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground font-manrope text-sm">
            © 2025 TimeLock. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-muted-foreground font-manrope text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-muted-foreground font-manrope text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
