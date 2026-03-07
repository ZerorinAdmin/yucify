export function CompetitorResearch() {
  return (
    <section className="py-20 lg:py-32 ">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center">
          <div className="mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
              No more hours of competitor research
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Just search any brand and our AI instantly analyzes their campaigns to reveal the hooks, messaging, and creative angles behind them. Saving you the hours of research and in-depth analysis.
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center px-4"
        style={{ maxWidth: "1320px", marginLeft: "auto", marginRight: "auto" }}
      >
        <img
          src="/ai-analysis.png"
          alt="AI competitor analysis dashboard showing campaign insights"
          className="block w-full h-auto"
          style={{ maxWidth: "100%" }}
        />
      </div>
    </section>
  );
}
