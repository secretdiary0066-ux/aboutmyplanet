import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Globe, Calendar, CheckCircle2, ArrowUpRight, Search, X } from "lucide-react";
import { PROJECTS } from "../../data";
import { Project } from "../../types";

export default function ProjectsTab() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <div className="space-y-6">
      {/* Search and Filters Hub */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-900/30 backdrop-blur-md border border-slate-800/80 p-4 rounded-3xl">
        <div className="flex items-center gap-1.5 text-xs text-purple-300">
          <Search className="w-4 h-4 text-purple-400" />
          <span className="font-mono">SELECT CONSTELLATION ORBIT:</span>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: "all", label: "🌌 All Orbits" },
            { id: "marketing", label: "💄 Beauty Marketing" },
            { id: "design", label: "🎨 Digital Arts" },
            { id: "education", label: "📚 Education Core" }
          ].map((item) => {
            const isActive = filter === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setFilter(item.id)}
                className={`py-1.5 px-4 rounded-full text-xs font-medium tracking-tight transition duration-300 relative ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.35)]"
                    : "bg-slate-950/40 border border-slate-800 hover:border-purple-500/30 text-slate-400 hover:text-slate-200"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Bento Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p, idx) => (
            <motion.div
              layout
              key={p.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedProject(p)}
              className="bg-slate-900/30 backdrop-blur-md border border-slate-800/80 hover:border-purple-500/30 rounded-3xl p-6 cursor-pointer relative overflow-hidden group/card shadow-lg flex flex-col justify-between"
              style={{
                boxShadow: `0 4px 30px rgba(0, 0, 0, 0.4)`
              }}
            >
              {/* Dynamic decorative gravity aura */}
              <div
                className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: p.glowColor }}
              />

              <div className="space-y-4">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 py-1 px-3 rounded-full">
                    {p.category === "marketing" ? "💄 Marketing" : p.category === "design" ? "🎨 Design Art" : "📚 Mentor program"}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-purple-400" />
                    {p.period}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-100 group-hover/card:text-white group-hover/card:shadow-purple-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-purple-300 font-mono italic">{p.subtitle}</p>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed truncate-2-lines">
                  {p.description}
                </p>
              </div>

              {/* Tags & Action Link bottom bar */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5 items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {p.tags.slice(0, 2).map((t, idx) => (
                    <span key={idx} className="bg-purple-950/30 text-purple-200/80 text-[9px] font-mono px-2 py-0.5 rounded-md">
                      #{t}
                    </span>
                  ))}
                  {p.tags.length > 2 && (
                    <span className="text-[9px] font-mono text-slate-500">+{p.tags.length - 2}</span>
                  )}
                </div>
                <div className="text-xs font-mono font-bold text-purple-400 group-hover/card:text-cyan-400 flex items-center gap-1 transition-colors">
                  VIEW MATRIX <ArrowUpRight className="w-3.5 h-3.5 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Zoom Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 150 }}
              className="bg-[#0b0918]/95 border border-purple-500/30 rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-[0_0_50px_rgba(168,85,247,0.2)] overflow-hidden relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Stars particles behind overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent pointer-events-none" />

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition hover:scale-105"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase bg-cyan-950/40 border border-cyan-800/40 p-1.5 px-3.5 rounded-full inline-block mb-3">
                    {selectedProject.category} constellation
                  </span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">{selectedProject.title}</h2>
                  <p className="text-xs text-purple-300 font-mono mt-1">{selectedProject.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950/50 p-4 rounded-2xl border border-slate-800/50 text-xs font-mono">
                  <div className="space-y-1">
                    <p className="text-slate-500">PERIOD</p>
                    <p className="text-slate-200 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      {selectedProject.period}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-slate-500">EXPERIENCE ORBIT</p>
                    <p className="text-slate-200 flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-cyan-400" />
                      Sumin Lee Portfolio Matrix
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-purple-200 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    프로젝트 추진 목적 (Core Role)
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed bg-[#131126]/60 p-4 rounded-2xl border border-purple-500/10">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-cyan-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    핵심 수행 과제 및 성과 (Deliverables)
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex gap-3 text-xs text-slate-300 bg-slate-950/20 p-3 rounded-xl border border-slate-900/50">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 self-start mt-1.5 flex-shrink-0" />
                        <span className="leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech tags */}
                <div className="pt-4 border-t border-slate-800/80">
                  <p className="text-[10px] font-mono text-slate-500 mb-2 font-bold uppercase tracking-wider">PROJECT METRICS</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t, idx) => (
                      <span key={idx} className="bg-purple-900/10 border border-purple-500/20 text-purple-300 text-[10px] font-mono px-3 py-1 rounded-md">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
