import { motion } from "framer-motion"
import { Button } from "./ui/Button"
import { Eye, Smartphone, Github, Twitter, Instagram, Linkedin, Phone, Mail } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-slate-950">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center gap-12">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 space-y-6 text-center lg:text-left"
                >
                    <div className="inline-block px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-cyan-400 text-sm font-medium mb-4">
                        Senior Android Engineer • 10+ Years Exp
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                        Jordan L Araujo Jr <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-3xl md:text-4xl block mt-4">
                            Building High-Performance Mobile Experiences at Scale
                        </span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        Specializing in Kotlin Multiplatform, Jetpack Compose, and Scalable Architecture for Fintech and Retail.
                        Delivering banking-grade security and observability.
                    </p>

                    <div className="flex flex-col items-center lg:items-start gap-6 pt-4">
                        <Button size="lg" onClick={() => window.open('https://docs.google.com/document/d/15TzIqkxX9N1hWjzkD8NoKhykeGha4EuLUBucg-foQ9U/edit?usp=sharing', '_blank')}>
                            View Resume
                            <Eye className="ml-2 w-4 h-4" />
                        </Button>
                        <div className="flex gap-4">
                            <a href="https://github.com/AraujoJordan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://x.com/araujo_jordan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/araujojordan/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com/in/araujojordan/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="tel:+18254380252" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-colors">
                                <Phone className="w-5 h-5" />
                            </a>
                            <a href="mailto:jordanjr.92@gmail.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="pt-8 flex items-center justify-center lg:justify-start gap-6 text-slate-500 text-sm">
                        {/* <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500" /> Open to Opportunities</span> */}
                        <span className="flex items-center gap-2">Kotlin</span>
                        <span className="flex items-center gap-2">Compose</span>
                        <span className="flex items-center gap-2">KMP</span>
                    </div>
                </motion.div>

                {/* Visual: 3D-ish Device */}
                <motion.div
                    initial={{ opacity: 0, rotateY: 30, rotateZ: -10, scale: 0.9 }}
                    animate={{ opacity: 1, rotateY: -12, rotateZ: 6, scale: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="flex-1 relative perspective-1000"
                >
                    <div className="relative mx-auto border-gray-800 bg-gray-900 border-[8px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col transform transition-transform hover:scale-105 duration-500">
                        <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[10px] top-[72px] rounded-l-lg"></div>
                        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[10px] top-[124px] rounded-l-lg"></div>
                        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[10px] top-[178px] rounded-l-lg"></div>
                        <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[10px] top-[142px] rounded-r-lg"></div>
                        <div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-950 relative">
                            {/* Fake App UI */}
                            <div className="absolute top-0 w-full h-full bg-slate-900 flex flex-col">
                                <div className="p-4 pt-12 bg-slate-900 flex justify-between items-center border-b border-slate-800">
                                    <Smartphone className="text-cyan-500" />
                                    <div className="w-8 h-8 rounded-full bg-slate-800"></div>
                                </div>
                                <div className="p-4 space-y-4">
                                    <div className="w-2/3 h-6 rounded bg-slate-800 animate-pulse"></div>
                                    <div className="w-full aspect-square rounded-lg bg-slate-900 border border-slate-800 relative overflow-hidden">
                                        <img
                                            src="https://avatars.githubusercontent.com/u/4549660?v=4"
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-1/2 h-20 rounded bg-slate-800/50"></div>
                                        <div className="w-1/2 h-20 rounded bg-slate-800/50"></div>
                                    </div>
                                    <div className="space-y-2 pt-4">
                                        <div className="w-full h-4 rounded bg-slate-800/30"></div>
                                        <div className="w-full h-4 rounded bg-slate-800/30"></div>
                                        <div className="w-5/6 h-4 rounded bg-slate-800/30"></div>
                                    </div>
                                </div>
                                {/* Floating Action Button */}
                                <div className="absolute bottom-6 right-6 w-12 h-12 bg-cyan-500 rounded-full shadow-lg flex items-center justify-center text-white">
                                    +
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Syntax Decor */}
                    <div className="absolute -z-10 -bottom-10 -right-10 text-slate-800/50 text-9xl font-bold font-mono rotate-12 select-none">
                        {'}'}
                    </div>
                    <div className="absolute -z-10 top-10 -left-10 text-slate-800/50 text-9xl font-bold font-mono -rotate-12 select-none">
                        {'<'}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
