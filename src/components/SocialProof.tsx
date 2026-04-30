import { useState, useEffect } from "react"

export function SocialProof() {
    const [industryFocusIndex, setIndustryFocusIndex] = useState(0)
    const industries = ["Fintech", "Retail", "Trades"]
    const [fade, setFade] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false)
            setTimeout(() => {
                setIndustryFocusIndex((prev) => (prev + 1) % industries.length)
                setFade(true)
            }, 400)
        }, 2500)
        return () => clearInterval(interval)
    }, [])
    const metrics = [
        { label: "Mobile Experience", value: "10+ Years" },
        { label: "Industry Focus", value: industries[industryFocusIndex] },
        { label: "Tech Stack", value: "Kotlin & Compose" },
        { label: "Education", value: "Computer Science" },
    ]

    return (
        <div className="w-full bg-slate-900/80 border-y border-slate-800/50 backdrop-blur-sm z-20 relative">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {metrics.map((metric, index) => (
                        <div key={index} className="flex flex-col items-center justify-center text-center h-24">
                            <span 
                                className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 transition-opacity duration-400"
                                style={{ opacity: metric.label === "Industry Focus" ? (fade ? 1 : 0) : 1 }}
                            >
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
