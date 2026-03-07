export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center">
          <div className="mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
              Check which Ad is a winning bet
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compare weekly performance to uncover ads that are performing well and are ready to scale.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/winning-ads.png"
              alt="Ad performance analytics showing which ads are winning bets"
              className="w-full max-w-[1000px] mx-auto h-auto block rounded-lg shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
