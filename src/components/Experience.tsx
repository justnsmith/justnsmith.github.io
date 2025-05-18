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

                {/* Timeline */}
                <div className="relative border-l border-indigo-500 ml-4 md:ml-8">
                    {/* Research Assistant Experience */}
                    <div className="mb-10 ml-6 md:ml-10 transform transition-all duration-300">
                        <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-2 border border-white"></div>

                        <div className="p-5 rounded-lg bg-gray-900/50 border border-gray-800 transition-all duration-300 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 hover:bg-gray-800/30">
                            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                                <time className="text-sm font-semibold text-cyan-400">Mar 2025 – Present</time>
                                <h3 className="text-lg font-semibold text-white">Undergraduate Research Assistant</h3>
                            </div>
                            <h4 className="text-md font-medium text-indigo-300 mt-1">SQLPlus Research – University of Hawaiʻi</h4>
                            <p className="text-sm text-gray-400 mt-2">
                                Collaborating with Dr. Yifan Wang on database research combining AI and query optimization. Developing a PostgreSQL extension using C++ to integrate language-aware SQL operators powered by LLMs.
                            </p>
                            <ul className="list-disc list-inside text-sm text-gray-400 mt-2 space-y-1">
                                <li>Engineering a PostgreSQL extension in C++ to support new natural language SQL operators</li>
                                <li>Building asynchronous query interfaces in C++ for non-blocking performance evaluation</li>
                                <li>Designing retrieval strategies to compare inputs with ground-truth datasets and reduce real-time LLM dependency</li>
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="px-2 py-1 bg-opacity-20 bg-cyan-500 text-cyan-300 rounded text-xs">C++</span>
                                <span className="px-2 py-1 bg-opacity-20 bg-indigo-500 text-indigo-300 rounded text-xs">SQL</span>
                            </div>
                        </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute w-3 h-3 border-2 border-indigo-500 rounded-full -left-1.5 bottom-0 animate-pulse"></div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500 italic">Additional experiences coming soon...</p>
                </div>
            </div>
        </section>
    );
}
