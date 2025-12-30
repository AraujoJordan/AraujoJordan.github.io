import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card"

export function OpenSource() {
    const repos = [
        {
            title: "Reflow",
            description: "A Kotlin Multiplatform library that simplifies data fetching with automatic retry logic, loading state management, and flexible caching strategies.",
            tags: ["Kotlin Multiplatform", "Compose", "Caching", "Coroutines"],
            url: "https://github.com/AraujoJordan/Reflow",
        },
        {
            title: "ExcuseMe",
            description: "A polite and easy way to ask for Android Permissions. Reduces boilerplate code with a simple one-line simplified usage.",
            tags: ["Android", "Kotlin", "Permissions", "Library"],
            url: "https://github.com/AraujoJordan/ExcuseMe",
        },
        {
            title: "Kobaia",
            description: "UX Test Lib built on top of UIAutomator to provide a simple discoverable API to reduce boilerplate and verbosity in tests.",
            tags: ["Android", "Testing", "UIAutomator", "Kotlin"],
            url: "https://github.com/AraujoJordan/Kobaia",
        },
    ]

    return (
        <section className="py-24 bg-slate-900 relative">
            {/* Background decoration */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-slate-950" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Open <span className="text-cyan-500">Source</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Libraries and tools I've built to help the developer community.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {repos.map((repo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <a href={repo.url} target="_blank" rel="noopener noreferrer" className="block h-full group">
                                <Card className="h-full bg-slate-950/50 border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group-hover:-translate-y-1">
                                    <CardHeader>
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-cyan-500 group-hover:text-cyan-400 transition-colors">
                                                <Github className="w-6 h-6" />
                                            </div>
                                            <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-cyan-500 transition-colors" />
                                        </div>
                                        <CardTitle className="text-xl mb-2 text-slate-100 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                                            {repo.title}
                                        </CardTitle>
                                        <CardDescription className="text-slate-400 line-clamp-3">
                                            {repo.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {repo.tags.map((tag) => (
                                                <span key={tag} className="text-xs font-medium text-slate-500 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
