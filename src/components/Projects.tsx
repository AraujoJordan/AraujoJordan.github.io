import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "./ui/Card"


export function Projects() {
    const projects = [
        {
            title: "Instacart",
            category: "Role: Android Engineer",
            icon: <img src="https://play-lh.googleusercontent.com/g_irOkVgCmmyGOxAoB5-N6CuHYjL7FMiHUkO7FJFNBVKE3W-yoFoKJBiq4Sy8sSI9woQ=s48" alt="Instacart" className="w-full h-full object-cover" />,
            description: "Scaling the customer-facing app with robust architecture.",
            content: [
                "Worked on the customer app with massive codebase requiring stability and speed for distributed teams.",
                "Worked with MVU architecture, Dagger, and comprehensive Snapshot testing (Paparazzi).",
                "Maintained legacy code with modern architecture and ensured quality at scale.",
                "Assisted multiple teams on different projects and squads"
            ],
            tags: ["Kotlin", "Compose", "GraphQL", "MVU", "Dagger", "Paparazzi"]
        },
        {
            title: "Neo Financial",
            category: "Role: Senior Android Dev",
            icon: <img src="https://play-lh.googleusercontent.com/1D3MlSxi_IrgpvVnDE406FARJ42ZzoqQaR8u714MsdQM0jEfANMUBLOL5Jvp62EzTA=s48" alt="Neo Financial" className="w-full h-full object-cover" />,
            description: "Building a high-performance investment dashboard for millions of users.",
            content: [
                "Worked on banking app on Investment dashboard with complex financial data in real-time graphs visualization on mobile.",
                "Create a fluid, interactive charting interface.",
                "Leveraged Jetpack Compose with native Canvas drawing commands and optimized recomposition scopes.",
                "Improved Gradle project modularization to drastically reduce build times on both local and CI/CD pipelines."
            ],
            tags: ["Kotlin", "MVVM", "Compose Canvas", "Koin", "Sentry", "GraphQL", "Bitrise"]
        },
        {
            title: "Remitbee Money Transfer",
            category: "Role: Lead Android Dev",
            icon: <img src="https://play-lh.googleusercontent.com/4t8o96WbYh2XFvE4-WhQndVh-oFbFhEPA_e32EJQ1wZOeN6KPBWwgPnMjnKndbCm32k=s48" alt="Remitbee" className="w-full h-full object-cover" />,
            description: "Redesigning architecture for banking-grade security.",
            content: [
                "Built MVP app architecture with modern architecture and great performance.",
                "Worked on banking-grade security and reliable transfers for a growing user base.",
                "Used Jenkins/Fastlane pipelines, Kotlin and a custom made E2E testing approach.",
                "Successful Google Play launch, intern mentorship, and community open-source contributions."
            ],
            tags: ["Kotlin", "Security", "Jenkins", "Fastlane", "GraphQL"]
        },
    ]

    return (
        <section className="py-24 bg-slate-950 relative" id="projects">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Apps <span className="text-cyan-500">Showcase</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A selection of apps and teams that I've worked on.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:border-cyan-500/30 transition-colors duration-300">
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700 overflow-hidden">
                                            {project.icon}
                                        </div>
                                        <span className="text-xs font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800 uppercase tracking-widest">
                                            {project.category}
                                        </span>
                                    </div>
                                    <CardTitle className="mb-2">{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-3">
                                        {project.content.map((labelContent) => (
                                            <p className="text-sm text-slate-300">{labelContent}</p>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <div className="flex flex-wrap gap-2 w-full pt-4 border-t border-slate-800/50">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-xs font-medium text-slate-400 bg-slate-800/50 px-2.5 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
