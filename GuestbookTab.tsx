import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Star, Heart, Compass, Moon, Music, Sparkles, User, Trash2 } from "lucide-react";
import { GuestbookEntry } from "../../types";

const AURAS = [
  { name: "Neon Violet", tint: "#a855f7", glow: "shadow-[0_0_15px_rgba(168,85,247,0.3)] bg-purple-950/20 text-purple-300" },
  { name: "Cyan Star", tint: "#06b6d4", glow: "shadow-[0_0_15px_rgba(6,182,212,0.3)] bg-cyan-950/20 text-cyan-300" },
  { name: "Cherry Pink", tint: "#ec4899", glow: "shadow-[0_0_15px_rgba(236,72,153,0.3)] bg-pink-950/20 text-pink-300" },
  { name: "Saphire Blue", tint: "#3b82f6", glow: "shadow-[0_0_15px_rgba(59,130,246,0.3)] bg-blue-950/20 text-blue-300" },
  { name: "Solar Gold", tint: "#eab308", glow: "shadow-[0_0_15px_rgba(234,179,8,0.3)] bg-yellow-950/20 text-yellow-300" }
];

const AMULETS = [
  { id: "star", icon: Star, label: "💫 Star" },
  { id: "heart", icon: Heart, label: "💖 Heart" },
  { id: "saturn", icon: Compass, label: "🪐 Saturn" },
  { id: "moon", icon: Moon, label: "🌙 Moon" },
  { id: "music", icon: Music, label: "🎵 Melody" }
];

const INITIAL_ENTRIES: GuestbookEntry[] = [
  {
    id: "seed-1",
    name: "한림대 어학센터 메이트",
    content: "수민님! 늘 성실하게 외국인 교수님들이랑 행정 조율하시는 모습 보고 감동받았어요. 포트폴리오 사이트가 수민님 감성 그대로 너무나 몽환적이고 예쁘네요! 대성하시길!! 🪐🌌",
    timestamp: "2026. 06. 05  15:42",
    starColor: "#06b6d4",
    symbol: "saturn"
  },
  {
    id: "seed-2",
    name: "fwee 서포터즈 동기",
    content: "우와아 수민아! 퓌톡틴즈 할 때 디자인이랑 홍보 릴스 피드백 최고였던 거 기억나? 역시 뷰티 마케터로서의 센스가 차원이 달라... 이번 학기 DAH 최우수상 축하해! 💄✨",
    timestamp: "2026. 06. 06  21:10",
    starColor: "#a855f7",
    symbol: "star"
  },
  {
    id: "seed-3",
    name: "TOEIC 멘티 신입생",
    content: "멘토님! 저 지난번에 올려주신 단어 챌린지 무사 인증하고 모의 토익 점수 진짜 많이 올랐어요!! 늘 친절하게 질문 답변해주셔서 너무 감사해요. 최고로 든든한 등대이십니다 💖",
    timestamp: "2026. 06. 08  11:05",
    starColor: "#ec4899",
    symbol: "heart"
  }
];

export default function GuestbookTab() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [selectedAura, setSelectedAura] = useState(AURAS[0]);
  const [selectedAmulet, setSelectedAmulet] = useState(AMULETS[0]);

  useEffect(() => {
    // Load entries on start
    const stored = localStorage.getItem("sumin_guestbook_entries");
    if (stored) {
      try {
        setEntries(JSON.parse(stored));
      } catch (e) {
        setEntries(INITIAL_ENTRIES);
      }
    } else {
      setEntries(INITIAL_ENTRIES);
      localStorage.setItem("sumin_guestbook_entries", JSON.stringify(INITIAL_ENTRIES));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    const formatter = new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });
    const formattedDate = formatter.format(new Date()).replace(/\. /g, ". ").trim();

    const newEntry: GuestbookEntry = {
      id: "guest-" + Date.now(),
      name: name.trim(),
      content: content.trim(),
      timestamp: formattedDate,
      starColor: selectedAura.tint,
      symbol: selectedAmulet.id
    };

    const updated = [newEntry, ...entries];
    setEntries(updated);
    localStorage.setItem("sumin_guestbook_entries", JSON.stringify(updated));

    // Reset controls
    setName("");
    setContent("");
    setSelectedAmulet(AMULETS[Math.floor(Math.random() * AMULETS.length)]);
  };

  const handleDelete = (id: string) => {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    localStorage.setItem("sumin_guestbook_entries", JSON.stringify(updated));
  };

  // Resolve symbolic icon component safely
  const getSymbolIcon = (sym: string) => {
    const found = AMULETS.find((a) => a.id === sym);
    return found ? found.icon : Star;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* LEFT: Guestbook form (5 cols) */}
      <div className="lg:col-span-5 space-y-6">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-purple-400" />
          <h3 className="text-lg font-bold text-white">별자리 편지 쓰기 (Leave a Star Core)</h3>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-900/30 backdrop-blur-md border border-purple-500/10 rounded-3xl p-6 shadow-xl space-y-4"
        >
          <div className="space-y-1.5">
            <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">VISITOR IDENTIFICATION</label>
            <div className="relative">
              <User className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3.5" />
              <input
                type="text"
                placeholder="익명 닉네임 입력"
                maxLength={20}
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#100d23]/80 border border-slate-800 focus:border-purple-500 rounded-xl py-2 px-3 pl-9 text-xs text-white placeholder-slate-600 outline-none transition font-sans"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">MESSAGE FREQUENCY (CONTENT)</label>
            <textarea
              placeholder="수민(Olivia)에게 응원의 한마디나 피드백을 한림대 은하계에 보내주세요!"
              maxLength={200}
              required
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full bg-[#100d23]/80 border border-slate-800 focus:border-purple-500 rounded-xl py-2 px-3.5 text-xs text-white placeholder-slate-600 outline-none transition font-sans resize-none leading-relaxed"
            />
          </div>

          {/* Color Aura Choices */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">AURA COATING (COLOR)</label>
            <div className="flex gap-2">
              {AURAS.map((aura) => (
                <button
                  key={aura.name}
                  type="button"
                  onClick={() => setSelectedAura(aura)}
                  className={`w-6 h-6 rounded-full border transition-all duration-300 relative flex items-center justify-center ${
                    selectedAura.name === aura.name
                      ? "border-white scale-125 shadow-lg"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: aura.tint }}
                >
                  {selectedAura.name === aura.name && (
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Amulet Symbol Choices */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">ASTRON CIVIL AMULET (SYMBOL)</label>
            <div className="grid grid-cols-5 gap-1.5">
              {AMULETS.map((am) => {
                const AmIcon = am.icon;
                const isSelected = selectedAmulet.id === am.id;
                return (
                  <button
                    key={am.id}
                    type="button"
                    onClick={() => setSelectedAmulet(am)}
                    className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1 transition ${
                      isSelected
                        ? "bg-purple-500/20 border-purple-400 text-purple-300 shadow-md"
                        : "bg-slate-950/40 border-slate-850 text-slate-500 hover:text-slate-350"
                    }`}
                  >
                    <AmIcon className="w-4 h-4" />
                    <span className="text-[9px] font-mono scale-90">{am.id}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 p-3 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition"
          >
            <Send className="w-4.5 h-4.5" />
            <span>별자리 신호 전송 (Send Cosmic Signal)</span>
          </button>
        </form>
      </div>

      {/* RIGHT: Constellation Stream Panel (7 cols) */}
      <div className="lg:col-span-7 space-y-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Moon className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-white">빛나는 발자취 은하 연대표 (Starlight Constellations)</h3>
          </div>
          <span className="text-[10px] font-mono bg-slate-800 text-slate-400 py-0.5 px-2.5 rounded-full">
            {entries.length} Stars Online
          </span>
        </div>

        {/* Scrollable constellation messages list */}
        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          <AnimatePresence mode="popLayout">
            {entries.map((ent) => {
              const AmuletIcon = getSymbolIcon(ent.symbol);
              return (
                <motion.div
                  key={ent.id}
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-2xl p-5 hover:border-purple-500/20 transition duration-300 relative group"
                  style={{
                    boxShadow: `0 4px 20px rgba(0,0,0,0.3), inset 0 0 10px ${ent.starColor}05`
                  }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      {/* Avatar Amulet Sphere */}
                      <div
                        className="w-10 h-10 rounded-full border flex items-center justify-center animate-pulse"
                        style={{
                          borderColor: ent.starColor + "40",
                          backgroundColor: ent.starColor + "0e",
                          boxShadow: `0 0 10px ${ent.starColor}20`
                        }}
                      >
                        <AmuletIcon className="w-4.5 h-4.5" style={{ color: ent.starColor }} />
                      </div>

                      <div className="space-y-0.5">
                        <h4 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
                          {ent.name}
                        </h4>
                        <p className="text-[10px] font-mono text-slate-500">{ent.timestamp}</p>
                      </div>
                    </div>

                    {/* Delete button (only show up on hover for seeded entries or yours) */}
                    <button
                      onClick={() => handleDelete(ent.id)}
                      className="p-1.5 rounded-lg bg-slate-950/20 border border-slate-900 text-slate-600 hover:text-red-400 hover:bg-red-950/10 hover:border-red-900/50 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="mt-3.5 text-xs text-slate-300 leading-relaxed font-sans pl-1">
                    {ent.content}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
