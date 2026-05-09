const Footer = ()=>{
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-gray-100 py-12 px-6">
            <div className="max-2-5xl mx-auto">
                <div className=" flex flex-col md:flex-row items-start justify-between gap-6 mb-8">
                    <span className="text-lg font-bold text-gray-900">
                        milestoned
                        <span className="text-blue-600">.</span>
                        life
                    </span>
                    <div className="flex items-center gap-8">
                        <a
                        href="https://learning-tracker.milestoned.life"
                        className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                        >Learning Tracker</a>
                        <a
                        href="https://job-tracker.milestoned.life"
                        className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                        >Job Tracker</a>
                        <a
                            href="mailto:ikmunna059@gmail.com"
                            className="text-sm text-gray-500 hover:text-gray-900 transition-color">
                                Contact
                            </a>
                    </div>
                </div>
                <div className="border-t border-gray-100 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-400">© {currentYear} milestoned.life — All rights reserved</p>
                        <p className="test-sm text-gray-400">Track. Learn. Achieve</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer