// Hero.tsx
// The hero section is the first thing visitors see
// It must clearly communicate: WHAT is this, WHY should I care
// Senior devs call this the "value proposition"

const Hero = () => {
  return (
    // section = semantic HTML for a page section
    // py-24 = padding top and bottom (24 * 4px = 96px)
    <section className="py-24 px-6 flex flex-col items-center text-center">

      {/* BADGE — small label above the headline, grabs attention */}
      <div className="mb-6 inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-medium px-4 py-1.5 rounded-full border border-blue-100">
        {/* The dot is a decorative element */}
        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
        Track. Learn. Achieve.
      </div>

      {/* HEADLINE — the most important text on the page */}
      {/* max-w-3xl = limits width so long text doesn't stretch too wide */}
      <h1 className="max-w-3xl text-5xl font-bold text-gray-900 leading-tight mb-6">
        Every milestone brings you
        {/* This span adds a colored highlight to key words */}
        <span className="text-blue-600"> closer to your goals</span>
      </h1>

      {/* SUBHEADLINE — explains the headline in simple terms */}
      <p className="max-w-xl text-lg text-gray-500 leading-relaxed mb-10">
        milestoned.life is your personal progress platform. 
        Track your learning, manage your job search, and 
        build momentum — one milestone at a time.
      </p>

      {/* CTA BUTTONS — two options: primary and secondary */}
      <div className="flex items-center gap-4">

        {/* PRIMARY button — main action we want user to take */}
        <a
          href="#tools"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Explore Tools
        </a>

        {/* SECONDARY button — alternative, less important action */}
        <a
          href="#features"
          className="text-gray-600 px-6 py-3 rounded-lg text-sm font-medium border border-gray-200 hover:border-gray-400 transition-colors"
        >
          Learn More
        </a>

      </div>

      {/* SOCIAL PROOF — builds trust immediately */}
      <p className="mt-10 text-sm text-gray-400">
        Built for developers, learners, and job seekers 🚀
      </p>

    </section>
  )
}

export default Hero