export default function About() {
    return (
        <section
            id="about"
            className="px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 pt-20 pb-40 scroll-mt-28"
        >
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center mb-12">
                    <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent flex-grow"></div>
                    <h2 className="text-2xl font-bold text-white mx-4 flex items-center">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                            About Me
                        </span>
                    </h2>
                    <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent flex-grow"></div>
                </div>

                <div className="space-y-8 text-gray-400">
                    <p>
                        I'm a third-year Computer Science student at{' '}
                        <a
                            href="https://manoa.hawaii.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-cyan-400 transition-colors duration-200"
                        >
                            the University of Hawaiʻi at Mānoa
                        </a>
                        , with a strong interest in backend development and lower-level systems. I enjoy building things that work efficiently behind the scenes—whether it's a database-powered app, a network protocol project, or a tool that interacts closely with the operating system.
                    </p>
                    <p>
                        I've lived in Hawaiʻi for over 15 years and have grown to appreciate the balance between focused work and an active, curious life. When I'm not coding, you'll probably find me running long distances, playing tennis, practicing piano, or reading a book. I also love exploring how things work at a deeper level, whether that's digging into memory management in C or understanding how compilers transform code into machine instructions.
                    </p>
                    <p>
                        I'm always learning, always building, and always looking for ways to grow both technically and creatively.
                    </p>
                </div>
            </div>
        </section>
    );
}
