export default function Experience() {
    return (
        <section
            id="experience"
            className="px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 pt-20 pb-40 scroll-mt-28"
        >
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center mb-12">
                    <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent flex-grow"></div>
                    <h2 className="text-2xl font-bold text-white mx-4 flex items-center">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                            Experience
                        </span>
                    </h2>
                    <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent flex-grow"></div>
                </div>

                {/* Restored vertical timeline with static dots */}
                <div className="relative border-l border-indigo-500 ml-4 md:ml-8">
                    {/* SQLPlus Research Experience */}
                    <div className="mb-10 ml-6 md:ml-10 transform transition-all duration-300">
                        {/* Simple static dot without hover effects */}
                        <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-2 border border-white"></div>

                        <div className="p-5 rounded-lg bg-gray-900/50 border border-gray-800 transition-all duration-300 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 hover:bg-gray-800/30">
                            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                                <time className="text-sm font-semibold text-cyan-400">Mar 2025 - Present</time>
                                <h3 className="text-lg font-semibold text-white">Research Assistant</h3>
                            </div>
                            <h4 className="text-md font-medium text-indigo-300 mt-1">SQLPlus Project</h4>
                            <p className="text-sm text-gray-400 mt-2">
                                Working directly with faculty on developing SQLPlus, an extension that enhances SQL capabilities
                                through additional operators. The project incorporates efficient search data retrieval techniques
                                to minimize LLM query calls while maintaining accuracy in determining if text satisfies specific
                                query conditions.
                            </p>
                            <ul className="list-disc list-inside text-sm text-gray-400 mt-2 space-y-1">
                                <li>Developing extended SQL operators for enhanced database querying</li>
                                <li>Implementing search data retrieval systems to reduce LLM query dependency</li>
                                <li>Designing evaluation frameworks for complex text condition analysis</li>
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="px-2 py-1 bg-opacity-20 bg-cyan-500 text-cyan-300 rounded text-xs">SQL</span>
                                <span className="px-2 py-1 bg-opacity-20 bg-indigo-500 text-indigo-300 rounded text-xs">LLMs</span>
                                <span className="px-2 py-1 bg-opacity-20 bg-purple-500 text-purple-300 rounded text-xs">Database Systems</span>
                            </div>
                        </div>
                    </div>

                    {/* Empty timeline continuation point */}
                    <div className="absolute w-3 h-3 border-2 border-indigo-500 rounded-full -left-1.5 bottom-0 animate-pulse"></div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500 italic">Additional experiences coming soon...</p>
                </div>
            </div>
        </section>
    );
}
