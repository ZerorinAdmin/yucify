export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center">
          <div className="mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
              Analyze which Ad is costing you more Week by Week
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compare weekly performance to uncover ads that are gradually draining your budget.
            </p>
          </div>
          <img
            src="/week-image.png"
            alt="Ad performance analytics showing which ads cost more week by week"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
