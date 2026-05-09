// FeatureCard.tsx
// This is a UI component — a reusable building block
// It accepts "props" to display different content each time
// Think of props like function parameters

// First we define the TypeScript interface
// This tells TypeScript exactly what props this component accepts
interface FeatureCardProps {
  icon: string        // emoji icon
  title: string       // card title
  description: string // card description
}

// We destructure props directly in the function signature
// Instead of (props) and then props.icon, props.title etc.
const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-md hover:border-blue-100 transition-all">
      
      {/* Icon container — gives the emoji a background */}
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-6">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed">
        {description}
      </p>

    </div>
  )
}

export default FeatureCard