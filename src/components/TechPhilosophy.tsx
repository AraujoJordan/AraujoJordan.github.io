import { Terminal, Shield, Workflow, Mail, Github, Linkedin, Twitter, Instagram, Phone } from "lucide-react"

export function TechPhilosophy() {
    const philosophies = [
        {
            title: "KISS + DRY",
            icon: <Workflow className="w-8 h-8 text-cyan-400" />,
            description: "Huge fan of KISS and DRY. I believe that simple and concise code is easier to maintain and understand."
        },
        {
            title: "Comprehensive Tested",
            icon: <Shield className="w-8 h-8 text-purple-400" />,
            description: "A robust pyramid of Unit, Integration, and Snapshot tests. If it's not tested, it doesn't ship."
        },
        {
            title: "Modularization",
            icon: <Terminal className="w-8 h-8 text-orange-400" />,
            description: "Feature-based modules to improve build times and enforce separation and improve maintainability. Scalable for large engineering teams."
        }
    ]

    return (
        <section className="py-24 bg-slate-900/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center">

                    <div className="flex-1 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-white">
                            Code <span className="text-purple-500">Philosophy</span>
                        </h2>
                        <div className="space-y-6">
                            {philosophies.map((item, index) => (
                                <div key={index} className="flex gap-4 items-start group">
                                    <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-purple-500/50 transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-200 mb-1">{item.title}</h3>
                                        <p className="text-slate-400 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 w-full">
                        <div className="relative rounded-lg overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl">
                            <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="ml-2 text-xs text-slate-500 font-mono">TechStack.kt</span>
                            </div>
                            <div className="p-6 overflow-x-auto min-h-[300px]">
                                <pre className="font-mono text-sm leading-relaxed">
                                    <code className="text-slate-300">
                                        <span className="text-purple-400">class</span> <span className="text-yellow-300">MyViewModel</span> : <span className="text-yellow-300">ViewModel</span>() {'{'}{'\n'}
                                        {'    '}<span className="text-purple-400">val</span> dataFlow = <span className="text-blue-400">reflow</span> {'{'}{'\n'}
                                        {'        '}api.<span className="text-blue-400">fetchData</span>(){'\n'}
                                        {'    '}{'}'}{'\n'}
                                        {'}'}{'\n\n'}
                                        <span className="text-purple-400">@Composable</span>{'\n'}
                                        <span className="text-purple-400">fun</span> <span className="text-blue-400">MyScreen</span>(viewModel: <span className="text-yellow-300">MyViewModel</span>) {'{'}{'\n'}
                                        {'    '}<span className="text-yellow-300">ReflowContent</span>(viewModel.dataFlow) {'{'} data <span className="text-purple-400">-&gt;</span>{'\n'}
                                        {'        '}<span className="text-blue-400">MyContent</span>(data){'\n'}
                                        {'    '}{'}'}{'\n'}
                                        {'}'}{'\n'}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function Footer() {
    return (
        <footer className="bg-slate-950 py-12 border-t border-slate-900">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-white mb-2">Jordan Lira de Araujo Junior</h3>
                    <p className="text-slate-500">Senior Android Engineer • KMP Specialist</p>
                </div>

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
        </footer>
    )
}
