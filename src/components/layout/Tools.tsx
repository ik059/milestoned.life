interface ToolCardProps {
    emoji: string,
    tag: string,
    title: string,
    description: string,
    features: string[],
    href: string,
    color: string
}

const ToolCard = ({
  emoji,
  tag,
  title,
  description,
  features,
  href,
  color,
}: ToolCardProps) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all flex flex-col">

      {/* TOP — emoji icon */}
      <div className="text-4xl mb-6">{emoji}</div>

      {/* TAG — small label */}
      <span className={`text-xs font-medium px-3 py-1 rounded-full w-fit mb-4 ${color}`}>
        {tag}
      </span>


      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-500 text-sm leading-relaxed mb-6">
        {description}
      </p>

      <ul className="space-y-2 mb-8 flex-1">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-sm text-gray-600"
          >
            <span className="w-4 h-4 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={href}
        className="w-full text-center bg-gray-900 text-white py-3 rounded-xl text-sm font-medium hover:bg-gray-700 transition-colors"
      >
        Open Tool →
      </a>

    </div>
  )
}
const tools = [
  {
    emoji: '📚',
    tag: 'Learning Tracker',
    title: 'Track what you learn',
    description:
      'Set learning goals, break them into topics, and track your daily progress. Built for developers who want to grow fast and stay consistent.',
    features: [
      'Set goals with deadlines',
      'Break goals into topics',
      'Daily progress tracking',
      'Streak counter',
      'Visual progress charts',
    ],
    href: 'https://learning-tracker.milestoned.life',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    emoji: '💼',
    tag: 'Job Tracker',
    title: 'Master your job search',
    description:
      'Track every application, monitor your pipeline, and use AI to analyze your fit and generate tailored cover letters — all in one place.',
    features: [
      'Track all applications',
      'Pipeline dashboard',
      'AI fit score analysis',
      'Cover letter generator',
      'Status history timeline',
    ],
    href: 'https://job-tracking.milestoned.life',
    color: 'bg-blue-50 text-blue-600',
  },
]

const Tools = ()=>{
    return(
        <section id="tools" className="py-20 px-6">
            <div className="max-w-2xl mx-auto text-center mb-16">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                   Your tools for growth. 
                </h3>
                <p className="text-gray-500 text-lg">
                    Two focused tools. One mission - help you make consistent progress toward what matters.
                </p>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {tools.map((tool)=>(
                    <ToolCard key={tool.title} {...tool}/>
                ))}
            </div>
        </section>
    )
}

export default Tools;