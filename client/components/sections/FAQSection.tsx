import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQSection = () => (
  <section
    className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 md:px-32 bg-background"
    aria-labelledby="faq-heading"
  >
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2
          id="faq-heading"
          className="text-foreground font-display text-3xl sm:text-4xl font-bold mb-4"
        >
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg">
          Common questions about trading without liquidations
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem
          value="item-1"
          className="border border-border rounded-lg bg-background px-6"
        >
          <AccordionTrigger className="text-left text-foreground text-base hover:no-underline py-5">
            How is liquidation impossible?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
            TimeLock uses a time-based options mechanism where traders pay a
            fixed premium upfront. Your position stays open for the full
            duration regardless of price movements, making liquidation
            mathematically impossible.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-2"
          className="border border-border rounded-lg bg-background px-6"
        >
          <AccordionTrigger className="text-left text-foreground text-base hover:no-underline py-5">
            What tokens can I trade?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
            You can trade any ERC20 token that has a Uniswap V3 pool. There are
            no allowlists or restrictions, giving you access to all major
            tokens, new launches, and even memecoins from day one.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-3"
          className="border border-border rounded-lg bg-background px-6"
        >
          <AccordionTrigger className="text-left text-foreground text-base hover:no-underline py-5">
            How do LPs earn yield?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
            Liquidity providers earn the fixed premiums that traders pay
            upfront, plus their share of Uniswap swap fees. LPs are never
            exposed to trader downside, only to premium collection and normal
            AMM rewards.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-4"
          className="border border-border rounded-lg bg-background px-6"
        >
          <AccordionTrigger className="text-left text-foreground text-base hover:no-underline py-5">
            Can I close positions early?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
            Yes, you can close your position at any time before expiry. Your
            profit or remaining capital will be settled instantly, and any
            unaccrued premium is automatically returned.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
