const Navbar = ()=>{
    return (
        <nav className="w-full px-6 py-4 flex items-center justify-between border-b border-gray-100">
            <div className="flex items-center gap-2">
                <span className="text-x1 font-bold text-gray-900">
                    milestoned
                </span>
                <span className="text-blue-500">
                    life
                </span>
            </div>
            
            <div className="flex items-center gap-8">
                <a 
                href="#features"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    Features
                </a>
                 <a 
                href="#tools"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    Tools
                </a>
                 <a 
                href="#about"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    About
                </a>
                 <a 
                href="#tools"
                className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Get Started
                </a>
            </div>
        </nav>
    )
}

export default Navbar;