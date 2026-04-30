import { Hero } from "./components/Hero"
import { SocialProof } from "./components/SocialProof"
import { Projects } from "./components/Projects"
import { OpenSource } from "./components/OpenSource"
import { TechPhilosophy, Footer } from "./components/TechPhilosophy"

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 -z-10" />

      <main>
        <Hero />
        <SocialProof />
        <Projects />
        <OpenSource />
        <TechPhilosophy />
      </main>

      <Footer />
    </div>
  )
}

export default App
