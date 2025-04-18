import { useState } from 'react';

export default function Experience() {
    const [activeItem, setActiveItem] = useState(0);

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

                <div className="relative border-l border-indigo-500 ml-4 md:ml-8">
                    {/* SQLPlus Research Experience */}
                    <div
                        className="mb-10 ml-6 md:ml-10 transform transition-all duration-300 hover:translate-x-2"
                        onMouseEnter={() => setActiveItem(1)}
                        onMouseLeave={() => setActiveItem(0)}
                    >
                        <div className={`absolute w-4 h-4 bg-indigo-500 rounded-full -left-2 border border-white transition-all duration-300 ${activeItem === 1 ? 'scale-150 bg-cyan-400' : ''}`}>
                            <div className={`absolute inset-0 rounded-full animate-ping bg-indigo-400 opacity-75 ${activeItem === 1 ? 'block' : 'hidden'}`}></div>
                        </div>

                        <div className="p-5 rounded-lg transition-all duration-300 hover:bg-gray-800/50 hover:shadow-lg hover:shadow-indigo-500/20">
                            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                                <time className="text-sm font-semibold text-cyan-400">Mar 2025 - Present</time>
                                <h3 className="text-lg font-semibold text-white">Research Assistant</h3>
                            </div>
                            <h4 className="text-md font-medium text-indigo-300 mt-1">SQLPlus Project</h4>
                            <p className="text-gray-400 mt-2">
                                Working with faculty on extending SQL capabilities through the development of SQLPlus,
                                an innovative extension that introduces additional operators and leverages LLMs
                                to determine if text satisfies specific query conditions.
                            </p>
                            <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                                <li className="transition-transform duration-200 hover:translate-x-1">Developing new SQL operators for enhanced query functionality</li>
                                <li className="transition-transform duration-200 hover:translate-x-1">Implementing LLM integration for natural language query processing</li>
                                <li className="transition-transform duration-200 hover:translate-x-1">Creating systems to evaluate text against complex operator conditions</li>
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="px-2 py-1 bg-opacity-20 bg-cyan-500 text-cyan-300 rounded text-xs transition-all duration-300 hover:bg-opacity-40 hover:scale-105">SQL</span>
                                <span className="px-2 py-1 bg-opacity-20 bg-indigo-500 text-indigo-300 rounded text-xs transition-all duration-300 hover:bg-opacity-40 hover:scale-105">LLMs</span>
                                <span className="px-2 py-1 bg-opacity-20 bg-purple-500 text-purple-300 rounded text-xs transition-all duration-300 hover:bg-opacity-40 hover:scale-105">Database Systems</span>
                            </div>
                        </div>
                    </div>

                    {/* Empty timeline continuation point */}
                    <div className="absolute w-3 h-3 border-2 border-indigo-500 rounded-full -left-1.5 bottom-0 animate-pulse"></div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-gray-400 italic opacity-80 hover:opacity-100 transition-opacity duration-300">More experiences coming soon...</p>
                </div>
            </div>
        </section>
    );
}
