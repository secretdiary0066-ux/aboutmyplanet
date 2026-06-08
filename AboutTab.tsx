import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  BookOpen,
  Video,
  PenTool,
  Music,
  GraduationCap,
  Heart,
  Instagram,
  Youtube,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  Compass,
  ExternalLink
} from "lucide-react";
import { SUMIN_PROFILE } from "../../data";
// @ts-ignore
import profileImg from "../../profile.png";

export default function AboutTab() {
  const [activeHobby, setActiveHobby] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerProgress, setPlayerProgress] = useState(34); // starts at 34%

  // Map icon strings to components
  const iconMap: Record<string, any> = {
    Video: Video,
    PenTool: PenTool,
    BookOpen: BookOpen,
    Music: Music
  };

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  // Mock lyrics sync
  const lyrics = [
    "태양을 잃어버린 별 하나 (A lone star that lost its sun)",
    "기억을 쫓아 저 멀리 흘러가 (Drifting far away in search of memories)",
    "지나온 궤도를 그리며 (Drawing the orbit I once sailed)",
    "너라는 중력에 끌려, 난 Pluto (Drawn to your gravity, I am Pluto)"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* LEFT COLUMN: Profile info & Music Player (5 cols) */}
      <div className="lg:col-span-5 space-y-8">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-slate-900/40 backdrop-blur-md border border-purple-500/20 rounded-3xl p-6 shadow-[0_0_30px_rgba(168,85,247,0.1)] overflow-hidden group"
          id="profile-hero-card"
        >
          {/* Neon corner flare */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-purple-500/20 transition-all duration-700" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative">
              {/* Spinning magic ring around profile photo */}
              <div className="absolute inset-x-0 -inset-y-1 bg-gradient-to-tr from-purple-500 to-cyan-400 rounded-full blur-md opacity-70 animate-pulse pointer-events-none" />
              <img
                src={profileImg}
                alt={SUMIN_PROFILE.name}
                className="relative w-36 h-48 object-cover rounded-2xl border-2 border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
                id="profile-photo"
              />
              <span className="absolute bottom-1 right-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-[10px] uppercase font-bold text-white px-2 py-0.5 rounded-full shadow-lg border border-purple-400/30">
                Olivia
              </span>
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
                {SUMIN_PROFILE.name}
                <span className="text-sm font-normal text-purple-300">({SUMIN_PROFILE.englishName})</span>
              </h2>
              <p className="text-xs font-mono text-cyan-300">{SUMIN_PROFILE.birth}</p>
            </div>

            {/* Motto block */}
            <div className="w-full bg-[#141226]/80 p-4 rounded-2xl border border-purple-500/10 italic text-center text-purple-100 text-sm font-mono relative leading-relaxed">
              <span className="text-purple-400 absolute top-2 left-3 font-serif text-2xl">“</span>
              {SUMIN_PROFILE.motto}
              <span className="text-purple-400 absolute bottom-1 right-3 font-serif text-2xl">”</span>
            </div>

            {/* Social handles with hover glows */}
            <div className="grid grid-cols-2 gap-3 w-full text-xs">
              <a
                href={`https://instagram.com/${SUMIN_PROFILE.instagram.personal}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-purple-500/5 hover:bg-purple-500/25 text-purple-200 border border-purple-500/10 hover:border-purple-500/30 transition-all shadow-inner group/btn"
              >
                <Instagram className="w-4 h-4 text-purple-400 group-hover/btn:scale-110 transition-transform" />
                <span className="truncate">@{SUMIN_PROFILE.instagram.personal}</span>
              </a>
              <a
                href={`https://instagram.com/${SUMIN_PROFILE.instagram.study}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-teal-500/5 hover:bg-teal-500/20 text-teal-200 border border-teal-500/10 hover:border-teal-500/30 transition-all shadow-inner group/btn"
              >
                <Instagram className="w-4 h-4 text-teal-400 group-hover/btn:scale-110 transition-transform" />
                <span className="truncate">공스타 via_n</span>
              </a>
              <a
                href="https://www.youtube.com/@ivian-olivia"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-red-500/5 hover:bg-red-500/20 text-rose-200 border border-red-500/10 hover:border-red-500/30 transition-all shadow-inner group/btn"
              >
                <Youtube className="w-4 h-4 text-red-500 group-hover/btn:scale-110 transition-transform" />
                <span className="truncate font-bold">이비안 Olivia 메인</span>
              </a>
              <a
                href="https://www.youtube.com/@lee_v_carat"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-pink-500/5 hover:bg-pink-500/20 text-pink-200 border border-pink-500/10 hover:border-pink-500/30 transition-all shadow-inner group/btn"
              >
                <Youtube className="w-4 h-4 text-pink-500 group-hover/btn:scale-110 transition-transform" />
                <span className="truncate font-bold">이비 서브 채널</span>
              </a>
            </div>

            {/* Contact Email info */}
            <div className="text-xs text-slate-400 font-mono flex items-center justify-center gap-1 bg-[#100f21] px-3.5 py-2 rounded-full border border-slate-800 w-full">
              <span className="text-cyan-400">EMAIL:</span>
              <span className="text-slate-300 font-bold">{SUMIN_PROFILE.email}</span>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Space Music Player (Pluto) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-6 shadow-[0_0_30px_rgba(6,182,212,0.08)] relative"
          id="music-player-card"
        >
          <div className="flex items-center gap-4">
            {/* Spinning space LP vinyl */}
            <div className="relative">
              <div
                className={`w-16 h-16 rounded-full bg-slate-950 border-4 border-slate-800 flex items-center justify-center relative shadow-xl overflow-hidden ${
                  isPlaying ? "animate-[spin_6s_linear_infinite]" : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 via-transparent to-cyan-500/30" />
                {/* Grooves */}
                <div className="w-12 h-12 rounded-full border border-slate-700/50 absolute" />
                <div className="w-8 h-8 rounded-full border border-slate-700/60 absolute" />
                {/* Purple core center label */}
                <div className="w-6 h-6 rounded-full bg-purple-600 border border-purple-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-950" />
                </div>
              </div>
              <Compass className={`w-5 h-5 text-cyan-400 absolute -top-1 -right-1 pointer-events-none drop-shadow-[0_0_8px_cyan] ${isPlaying ? "animate-pulse" : ""}`} />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-xs text-cyan-400 font-bold uppercase tracking-wider font-mono">My Favorite Song</p>
              <h3 className="text-lg font-bold text-white truncate">{SUMIN_PROFILE.recommendedSong.title}</h3>
              <p className="text-xs text-purple-300 font-mono truncate">{SUMIN_PROFILE.recommendedSong.artist}</p>
            </div>
          </div>

          {/* Simple floating synced lyrics */}
          <div className="mt-4 bg-purple-950/20 border border-purple-500/5 p-3 rounded-2xl h-14 flex items-center justify-center text-center overflow-hidden">
            <p className="text-[11px] text-purple-200/80 animate-pulse italic leading-relaxed">
              {isPlaying ? lyrics[Math.floor(playerProgress / 25)] : "Click Play to hear Pluto's space loop..."}
            </p>
          </div>

          {/* Star progressive timeline slider */}
          <div className="mt-4 space-y-1">
            <div className="relative h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all rounded-full"
                style={{ width: `${playerProgress}%` }}
              />
              {/* Sliding starlight indicator */}
              <div
                className="absolute w-3.5 h-3.5 bg-white border border-cyan-400 rounded-full top-1/2 -mt-1.75 -ml-1.75 shadow-[0_0_8px_#ffffff] cursor-pointer"
                style={{ left: `${playerProgress}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-slate-500">
              <span>{isPlaying ? `0:${Math.floor((playerProgress * 2.1) / 60)}:${String(Math.floor((playerProgress * 2.1) % 60)).padStart(2, '0')}` : "0:00"}</span>
              <span>3:30</span>
            </div>
          </div>

          {/* Player controls */}
          <div className="mt-2 flex items-center justify-between">
            <button className="p-2 text-slate-400 hover:text-white transition">
              <SkipBack className="w-4 h-4" />
            </button>
            <button
              onClick={handlePlayToggle}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center hover:scale-110 active:scale-95 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition"
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
            </button>
            <button className="p-2 text-slate-400 hover:text-white transition">
              <SkipForward className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1 text-slate-500">
              <Volume2 className="w-3.5 h-3.5 text-cyan-500/50" />
              <span className="text-[10px] font-mono">100%</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT COLUMN: Bio, Hobbies constellations & Education (7 cols) */}
      <div className="lg:col-span-7 space-y-8">
        {/* Academic path & Future values */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl p-6 shadow-xl relative"
        >
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-bold text-white">학적 및 교육 여정</h3>
          </div>

          <div className="space-y-4">
            {SUMIN_PROFILE.education.map((edu, idx) => (
              <div key={idx} className="flex gap-4 group/edu relative">
                {/* Timeline rod */}
                {idx !== SUMIN_PROFILE.education.length - 1 && (
                  <div className="absolute left-[9px] top-6 bottom-0 w-[1.5px] bg-slate-800 group-hover/edu:bg-purple-500/40 transition-colors" />
                )}
                {/* Purple bullet star */}
                <div className="relative z-10 w-5 h-5 rounded-full bg-slate-950 border-2 border-purple-500/60 flex items-center justify-center group-hover/edu:border-cyan-400 group-hover/edu:scale-110 transition duration-300 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover/edu:bg-cyan-300" />
                </div>
                {/* Content block */}
                <div className="flex-1 pb-3">
                  <span className="text-[10px] font-mono font-bold text-purple-400 tracking-wider">
                    {edu.period}
                  </span>
                  <h4 className="text-sm font-medium text-slate-200 group-hover/edu:text-white transition">
                    {edu.school}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Future Vision Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SUMIN_PROFILE.futureGoals.map((g, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-slate-900/40 backdrop-blur-md border border-purple-500/10 rounded-2xl p-5 hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.05)] transition-all group"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-colors">
                  {idx === 0 ? <Sparkles className="w-4 h-4" /> : <BookOpen className="w-4 h-4" />}
                </div>
                <h4 className="font-bold text-white text-sm tracking-tight">{g.title}</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {g.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Clickable Hobby Constellation */}
        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-pink-400" />
              <h3 className="text-lg font-bold text-white">가까이 들여다보는 취미 (Interest Hub)</h3>
            </div>
            <span className="text-[10px] py-0.5 px-2.5 rounded-full bg-slate-800 text-slate-400 font-mono">
              클릭 시 비밀 상세정보 개방
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {SUMIN_PROFILE.hobbies.map((h, idx) => {
              const HobbyIcon = iconMap[h.icon] || Heart;
              const isActive = activeHobby === h.name;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveHobby(isActive ? null : h.name)}
                  className={`p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-2 border transition-all duration-300 relative overflow-hidden group ${
                    isActive
                      ? "bg-purple-900/20 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.15)] text-purple-100"
                      : "bg-slate-950/40 border-slate-800 hover:border-purple-600/55 text-slate-300 hover:text-white"
                  }`}
                >
                  <div className={`p-2.5 rounded-full transition-colors ${
                    isActive ? "bg-purple-500/20 text-purple-300" : "bg-slate-900 text-slate-400 group-hover:text-purple-400 group-hover:bg-purple-950/30"
                  }`}>
                    <HobbyIcon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold font-mono tracking-tight">{h.name}</span>

                  {/* Aesthetic dot */}
                  <span className={`w-1 h-1 rounded-full absolute bottom-1.5 transition-colors ${
                    isActive ? "bg-purple-400 animate-ping" : "bg-transparent"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Description expanding box */}
          <AnimatePresence mode="wait">
            {activeHobby && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-purple-950/20 border border-purple-500/15 p-4 rounded-2xl text-xs leading-relaxed text-slate-300 space-y-3"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-bold text-white text-xs">{activeHobby} 이야기</span>
                </div>
                <p>
                  {SUMIN_PROFILE.hobbies.find((h) => h.name === activeHobby)?.desc}
                </p>
                
                <div className="pt-1">
                  {activeHobby === "영상 편집" && (
                    <a
                      href="https://www.youtube.com/watch?v=YfrGjCOcIfg"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-xl bg-purple-500/25 hover:bg-purple-500/40 text-white border border-purple-400/30 text-[11px] font-bold transition hover:scale-[1.02] active:scale-95 shadow-md"
                    >
                      <span>영상 보러가기</span>
                      <ExternalLink className="w-3.5 h-3.5 text-purple-300" />
                    </a>
                  )}
                  {activeHobby === "음악 감상" && (
                    <a
                      href="https://youtu.be/ZeNOs_7kqaw?si=tQRcBRLLK32DVsVT"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-xl bg-purple-500/25 hover:bg-purple-500/40 text-white border border-purple-400/30 text-[11px] font-bold transition hover:scale-[1.02] active:scale-95 shadow-md"
                    >
                      <span>음악 추천</span>
                      <ExternalLink className="w-3.5 h-3.5 text-purple-300" />
                    </a>
                  )}
                  {activeHobby === "소설 쓰기" && (
                    <a
                      href="https://k-horror-project.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-xl bg-purple-500/25 hover:bg-purple-500/40 text-white border border-purple-400/30 text-[11px] font-bold transition hover:scale-[1.02] active:scale-95 shadow-md"
                    >
                      <span>소설 읽기</span>
                      <ExternalLink className="w-3.5 h-3.5 text-purple-300" />
                    </a>
                  )}
                  {activeHobby === "책 읽기" && (
                    <a
                      href="https://www.yes24.com/main/default.aspx"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-xl bg-purple-500/25 hover:bg-purple-500/40 text-white border border-purple-400/30 text-[11px] font-bold transition hover:scale-[1.02] active:scale-95 shadow-md"
                    >
                      <span>책 고르러 가기</span>
                      <ExternalLink className="w-3.5 h-3.5 text-purple-300" />
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
