// Features.tsx
// This section explains WHY someone should use milestoned.life
// We use the FeatureCard component we just built — 3 times!
// This is the power of reusable components

import FeatureCard from '../ui/FeatureCard'

// We define our features data as an array
// Senior devs separate DATA from MARKUP
// If you need to add a feature later — just add to this array
// No need to touch the HTML structure
const features = [
  {
    icon: '🎯',
    title: 'Set clear goals',
    description:
      'Break down big ambitions into focused, trackable milestones. Know exactly what you need to do next and why it matters.',
  },
  {
    icon: '📈',
    title: 'Track your progress',
    description:
      'Visualise how far you have come. Every topic learned, every application sent — all tracked in one place.',
  },
  {
    icon: '🚀',
    title: 'Build momentum',
    description:
      'Small consistent progress beats occasional big effort. milestoned keeps you moving forward every single day.',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-gray-50">

      {/* SECTION HEADER */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Why milestoned?
        </h2>
        <p className="text-gray-500 text-lg">
          Progress is not about being perfect. 
          It is about showing up and moving forward.
        </p>
      </div>

      {/* CARDS GRID */}
      {/* max-w-5xl + mx-auto = centered, not full width */}
      {/* grid-cols-3 = 3 columns on desktop */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* We use .map() to loop over the features array */}
        {/* Instead of copy-pasting <FeatureCard> 3 times */}
        {/* This is how senior devs avoid repetition */}
        {features.map((feature) => (
          // key prop is required when rendering lists in React
          // It helps React track which item is which
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}

      </div>

    </section>
  )
}

export default Features