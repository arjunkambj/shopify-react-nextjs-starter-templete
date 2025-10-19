export default function AboutHero() {
  return (
    <section className="relative py-20 pb-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex rounded-full bg-primary/10 px-4 py-2">
            <span className="text-sm font-semibold text-primary">About Us</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Building the Future of
            <span className="block text-primary">E-Commerce</span>
          </h1>

          <p className="mb-8 text-lg text-foreground/70 md:text-xl">
            We&apos;re on a mission to deliver premium quality products with
            exceptional customer service. Since our founding, we&apos;ve been
            committed to making online shopping simple, enjoyable, and
            trustworthy.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="mb-2 text-3xl font-bold text-primary md:text-4xl">
                10K+
              </div>
              <div className="text-sm text-foreground/60">Happy Customers</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-primary md:text-4xl">
                500+
              </div>
              <div className="text-sm text-foreground/60">Products</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-primary md:text-4xl">
                50+
              </div>
              <div className="text-sm text-foreground/60">Countries</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-primary md:text-4xl">
                99%
              </div>
              <div className="text-sm text-foreground/60">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
