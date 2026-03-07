export function AdBreakdown() {
  return (
    <section id="ad-breakdown" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center">
          <div className="mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
            See where your audience drops off in the funnel
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track how users move through each stage, identify drop-offs, and get AI-powered recommendations to improve performance.
            </p>
          </div>
          <img
            src="/funnel.png"
            alt="Ad funnel dashboard showing detailed breakdown and AI analysis"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
