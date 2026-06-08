import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Calendar, Award, Star, Book, Mail, Heart, Github, ExternalLink, Moon } from "lucide-react";

// Components & Modules
import Starfield from "./components/Starfield";
import ClickMagic from "./components/ClickMagic";
import AboutTab from "./components/Tabs/AboutTab";
import ProjectsTab from "./components/Tabs/ProjectsTab";
import AwardsTab from "./components/Tabs/AwardsTab";
import SkillsTab from "./components/Tabs/SkillsTab";
import GuestbookTab from "./components/Tabs/GuestbookTab";
import { SUMIN_PROFILE } from "./data";

export default function App() {
  const [activeTab, setActiveTab] = useState<"about" | "projects" | "awards" | "skills" | "guestbook">("about");

  const tabsConfig = [
    { id: "about", icon: "✨", label: "Milky Way (소개)" },
    { id: "projects", icon: "💫", label: "Constellation (프로젝트)" },
    { id: "awards", icon: "🏆", label: "Cosmic Stars (커리어·수상)" },
    { id: "skills", icon: "🌌", label: "Nebula Forge (보유능력)" },
    { id: "guestbook", icon: "💌", label: "Starlight Radio (메시지)" }
  ] as const;

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutTab />;
      case "projects":
        return <ProjectsTab />;
      case "awards":
        return <AwardsTab />;
      case "skills":
        return <SkillsTab />;
      case "guestbook":
        return <GuestbookTab />;
      default:
        return <AboutTab />;
    }
  };

  return (
    <div className="min-h-screen text-slate-100 flex flex-col justify-between selection:bg-purple-500/30 selection:text-white font-sans overflow-x-hidden relative" id="applet-portal">
      {/* 1. Magical interactive Backdrops */}
      <Starfield />
      <ClickMagic />

      {/* Decorative cosmic orb glows top-left and bottom-right */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-purple-800/10 via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-blue-800/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* 2. Header and Profile Crest */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 pt-8 pb-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800/60 pb-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3.5 group cursor-pointer"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-0.5 shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition duration-500">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">🪐</span>
              </div>
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-white group-hover:text-purple-300 transition">
                {SUMIN_PROFILE.englishName}
              </h1>
              <p className="text-[10px] font-mono tracking-wider text-purple-400 font-bold uppercase transition">
                PORTFOLIO & CREATIVE MATRIX
              </p>
            </div>
          </motion.div>

          {/* Mini active info bar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 text-xs text-slate-400 font-mono"
          >
            <div className="hidden sm:flex items-center gap-1.5 bg-[#14122d]/40 px-3.5 py-2 rounded-full border border-purple-500/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>STATION ORBIT: HALLYM UNIV</span>
            </div>
            <div className="text-[10px] font-mono text-[#06b6d4] uppercase bg-cyan-950/20 px-2.5 py-1.5 rounded-full border border-cyan-800/30">
              ⚡ CLICK DETECTER ACTIVE
            </div>
          </motion.div>
        </div>
      </header>

      {/* 3. Hero Introduction Billboard */}
      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 py-6 flex-1 flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3 max-w-2xl mx-auto py-4"
        >
          <div className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full bg-purple-950/40 border border-purple-500/20 text-purple-300 text-xs font-semibold hover:border-purple-500/40 transition">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span>Interactive Space Theme Resume Applet</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-purple-300 text-transparent bg-clip-text font-sans leading-tight">
            about my planet
          </h2>
          <p className="text-xs md:text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
            별자리를 통하여 만나보는 한 사람의 행성
          </p>
        </motion.div>

        {/* 4. Beautiful Navigation Constellation Tab Selector */}
        <div className="bg-[#121021]/60 backdrop-blur-md p-1.5 rounded-3xl border border-slate-800/80 max-w-3xl w-full mx-auto shadow-2xl relative z-20">
          <div className="flex flex-col sm:flex-row gap-1 w-full justify-between overflow-x-auto select-none no-scrollbar">
            {tabsConfig.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center justify-center gap-2 py-3 px-4.5 rounded-2xl text-xs font-semibold tracking-tight transition-all duration-300 relative whitespace-nowrap ${
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/45"
                  }`}
                  id={`tab-nav-${tab.id}`}
                >
                  <span className="scale-110">{tab.icon}</span>
                  <span>{tab.label}</span>

                  {/* High polished fluid active pill overlay */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-indigo-600/90 rounded-2xl border border-purple-400/30 shadow-[0_0_15px_rgba(139,92,246,0.3)] -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 5. Dynamic Tab Content Frame */}
        <div className="py-6 min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="outline-none"
            >
              {renderActiveTabContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* 6. Cosmic Docking Footer */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 py-8 border-t border-slate-800/60 mt-12 bg-slate-950/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="space-y-0.5 text-center md:text-left">
            <p>DESIGN PROTOCOL: EVIAN_OLIVIA_05 // UTC_LIVE_CLOCK</p>
            <p>© 2026 Sumin Lee Portfolio. Powered by Antigravity AI Studio Developer.</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] bg-purple-950/30 text-purple-400 border border-purple-900/50 py-1 px-3 rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
              COSMIC COMPILER STABLE
            </span>
            <div className="flex items-center gap-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition">
                <Github className="w-4.5 h-4.5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition">
                <ExternalLink className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
