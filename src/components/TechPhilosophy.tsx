import { Terminal, Shield, Workflow, Mail, Github, Linkedin } from "lucide-react"

export function TechPhilosophy() {
    const philosophies = [
        {
            title: "Widly used approach",
            icon: <Workflow className="w-8 h-8 text-cyan-400" />,
            description: "A preference for widely used approaches instead of reinventing the wheel. I believe developers work fast and better with using well known patterns and tools available in the market."
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
                                <span className="ml-2 text-xs text-slate-500 font-mono">YourViewModel.kt</span>
                            </div>
                            <div className="p-6 overflow-x-auto">
                                <pre className="font-mono text-sm leading-relaxed">
                                    <code className="text-slate-300">
                                        internal <span className="text-purple-400">class</span> <span className="text-yellow-300">YourViewModel</span> {'('}{'\n'}
                                        {'  '}<span className="text-purple-400">private val</span> repo: <span className="text-yellow-300">Repository</span>{'\n'}
                                        {')'} : <span className="text-yellow-300">ViewModel</span>() {'{'}{'\n'}
                                        {'  '}<span className="text-purple-400">private val</span> _uiState = <span className="text-yellow-300">MutableStateFlow</span>&lt;<span className="text-green-400">UiState</span>&gt;(<span className="text-yellow-300">Loading</span>){'\n'}
                                        {'  '}<span className="text-purple-400">val</span> uiState = _uiState.<span className="text-blue-400">asStateFlow</span>(){'\n\n'}
                                        {'  '}<span className="text-purple-400">fun</span> <span className="text-blue-400">loadData</span>() {'{'}{'\n'}
                                        {'    '}viewModelScope.<span className="text-blue-400">launch</span> {'{'}{'\n'}
                                        {'      '}repo.<span className="text-blue-400">getData</span>(){'\n'}
                                        {'        '}.<span className="text-blue-400">catch</span> {'{'} _uiState.value = <span className="text-yellow-300">Error</span>(it) {'}'}{'\n'}
                                        {'        '}.<span className="text-blue-400">collect</span> {'{'}{'\n'}
                                        {'          '}_uiState.value = <span className="text-yellow-300">Success</span>(it){'\n'}
                                        {'        '}{'}'}{'\n'}
                                        {'    '}{'}'}{'\n'}
                                        {'  '}{'}'}{'\n'}
                                        {'}'}
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

                <div className="flex gap-6">
                    <a href="#" className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:jordanjr.92@gmail.com" className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
