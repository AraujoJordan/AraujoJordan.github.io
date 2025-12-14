export function SocialProof() {
    const metrics = [
        { label: "Mobile Experience", value: "10+ Years" },
        { label: "Industry Focus", value: "Fintech & Retail" },
        { label: "Tech Stack", value: "Kotlin & Compose" },
        { label: "Education", value: "BS Comp Sci" },
    ]

    return (
        <div className="w-full bg-slate-900/80 border-y border-slate-800/50 backdrop-blur-sm z-20 relative">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {metrics.map((metric, index) => (
                        <div key={index} className="flex flex-col items-center justify-center text-center">
                            <span className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
                                {metric.value}
                            </span>
                            <span className="text-sm md:text-base text-slate-500 font-medium uppercase tracking-wider mt-1">
                                {metric.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
