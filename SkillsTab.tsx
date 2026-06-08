import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sliders, HelpCircle, Star, Sparkles, Orbit, Compass, ExternalLink } from "lucide-react";
import { SKILLS } from "../../data";
import { SkillNode } from "../../types";

export default function SkillsTab() {
  const [selectedSkill, setSelectedSkill] = useState<SkillNode | null>(SKILLS[0]);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categories = [
    { id: "ai", label: "🤖 AI & Synthesis", glow: "border-purple-500/50 bg-purple-950/20 text-purple-300" },
    { id: "language", label: "💬 English & Verbal", glow: "border-cyan-500/50 bg-cyan-950/20 text-cyan-300" },
    { id: "office", label: "📊 Office & Administrate", glow: "border-indigo-500/50 bg-indigo-950/20 text-indigo-300" }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* LEFT: Gamified Skill Solar Orbit Map (6 cols) */}
      <div className="lg:col-span-6 relative flex items-center justify-center min-h-[400px] bg-slate-950/30 rounded-3xl border border-slate-900 overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)] pointer-events-none" />

        {/* Concentric Orbit Rings */}
        <div className="absolute w-[180px] h-[180px] rounded-full border border-dashed border-slate-800/40 animate-[spin_40s_linear_infinite] pointer-events-none" />
        <div className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-slate-800/25 animate-[spin_70s_linear_infinite_reverse] pointer-events-none" />
        <div className="absolute w-[360px] h-[360px] rounded-full border border-slate-800/15 pointer-events-none animate-pulse" />

        {/* Central Core: Sumin Sun */}
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 20px rgba(168,85,247,0.4)",
                "0 0 35px rgba(6,182,212,0.5)",
                "0 0 20px rgba(168,85,247,0.4)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-16 h-16 rounded-full bg-slate-900 border-2 border-purple-400 flex flex-col items-center justify-center text-center text-white relative cursor-pointer"
          >
            <Orbit className="w-5 h-5 text-purple-300 animate-spin" style={{ animationDuration: "12s" }} />
            <span className="text-[9px] font-mono tracking-widest font-bold absolute bottom-2">CORE</span>
          </motion.div>
          <span className="mt-2 text-[10px] font-mono font-bold text-purple-300 tracking-wider">OLIVIA GALAXY</span>
        </div>

        {/* Floating Orbital Planets (Skills Nodes) */}
        {SKILLS.map((sk) => {
          const isSelected = selectedSkill?.name === sk.name;
          const isCategoryMatch = hoveredCategory ? sk.category === hoveredCategory : true;

          // Map categories to coloring
          const categoryColor =
            sk.category === "ai"
              ? "rgba(168,85,247,0.8)" // purple
              : sk.category === "language"
              ? "rgba(6,182,212,0.8)" // cyan
              : "rgba(99,102,241,0.8)"; // indigo

          return (
            <motion.button
              key={sk.name}
              style={{
                left: `${sk.x}%`,
                top: `${sk.y}%`
              }}
              whileHover={{ scale: 1.15 }}
              onClick={() => setSelectedSkill(sk)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/90 border transition-all z-20 flex items-center justify-center ${
                isSelected
                  ? "border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)] bg-[#0b0918]"
                  : isCategoryMatch
                  ? "border-purple-500/20 hover:border-purple-400"
                  : "border-slate-900 opacity-20"
              }`}
            >
              {/* Planetary Core Dot */}
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center relative"
                style={{ backgroundColor: categoryColor }}
              >
                {/* Orbit path glow */}
                <div className="absolute inset-0 rounded-full animate-ping opacity-20 pointer-events-none" style={{ backgroundColor: categoryColor }} />
              </div>

              {/* Tooltip name hovering slightly */}
              <span className="absolute -bottom-6 bg-slate-950/80 border border-slate-800 text-[9px] text-slate-300 px-2 py-0.5 rounded-md font-mono whitespace-nowrap leading-none transition-opacity">
                {sk.name.split(" ")[0]}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* RIGHT: Analytical Competency Panel (6 cols) */}
      <div className="lg:col-span-6 space-y-6">
        {/* Category guide buttons */}
        <div className="grid grid-cols-3 gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onMouseEnter={() => setHoveredCategory(cat.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`p-2.5 rounded-xl border text-[11px] font-bold text-center transition-all ${
                hoveredCategory === cat.id
                  ? cat.glow
                  : "bg-slate-900/20 border-slate-800 text-slate-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Selected Skill Detail Board */}
        <AnimatePresence mode="wait">
          {selectedSkill ? (
            <motion.div
              key={selectedSkill.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900/30 backdrop-blur-md border border-purple-500/20 rounded-3xl p-6 shadow-xl relative"
            >
              {/* Corner decorative logo */}
              <Compass className="w-16 h-16 text-purple-500/5 absolute right-4 top-4 rotate-45 pointer-events-none" />

              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase bg-cyan-950/40 border border-cyan-800/40 py-1 px-3 rounded-full">
                    {selectedSkill.category.toUpperCase()} SKILL ORBIT
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2.5 tracking-tight">{selectedSkill.name}</h3>
                  <p className="text-xs text-purple-300 font-mono italic">Proficiency Tier: {selectedSkill.level}</p>
                </div>

                {/* Rating Meter using stars */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">HARNESS CAPACITY</span>
                  <div className="flex gap-1.5 items-center">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const levelMap: Record<string, number> = { High: 5, "Mid-High": 4, Mid: 3.5, Basic: 2 };
                      const score = levelMap[selectedSkill.level];
                      const isGold = star <= Math.floor(score);
                      const isHalf = star > score && star - 0.5 <= score;
                      return (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            isGold
                              ? "text-yellow-400 fill-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.5)]"
                              : isHalf
                              ? "text-yellow-400/50 fill-yellow-400/30"
                              : "text-slate-700"
                          }`}
                        />
                      );
                    })}
                    <span className="text-[10px] text-slate-400 font-mono ml-2">({selectedSkill.level})</span>
                  </div>
                </div>

                {/* Deep Analysis description */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">CAPABILITY AUDIT</span>
                  <p className="text-xs text-slate-300 leading-relaxed bg-[#100e23]/80 p-4 rounded-2xl border border-purple-500/10">
                    {selectedSkill.description}
                  </p>
                </div>

                {/* Practical Applications */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/60 text-xs font-mono">
                  <span className="text-[9px] font-bold text-slate-400 tracking-wider">PRACTICAL SCENARIOS:</span>
                  <div className="text-[11px] text-slate-400 leading-relaxed">
                    {selectedSkill.category === "ai" ? (
                      "• DAH 전시회 시각 자료 생성 위촉\n• 마케팅 피치 및 프리젠테이션 가독 폼 구축"
                    ) : selectedSkill.category === "language" ? (
                      "• 한림대 신입생 TOEIC 리드 멘토 소통\n• 영어교육센터 다국적 교수진 행정 응대"
                    ) : (
                      "• 한림대 어학 센터 행정 수속 및 문서 디렉터리 기안\n• 대외 활동 피치 패널 보고서 분석 구성"
                    ).split("\n").map((sentence, sIdx) => <p key={sIdx}>{sentence}</p>)}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="bg-slate-900/10 p-12 text-center rounded-3xl border border-dashed border-slate-800 text-slate-500 flex flex-col items-center justify-center gap-2">
              <Compass className="w-8 h-8 text-slate-600 animate-spin" />
              <p className="text-xs font-mono select-none">Select an orbital planet to map its spectral diagnostics...</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
