import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Trophy, Award as AwardIcon, Calendar, Briefcase, FileText, CheckCircle, Sparkles, ExternalLink } from "lucide-react";
import { AWARDS, ACTIVITIES } from "../../data";
import { Award, Activity } from "../../types";

export default function AwardsTab() {
  const [activeTrophy, setActiveTrophy] = useState<string | null>(null);

  // Split awards into Hallym University Awards vs Other
  const awardsList = AWARDS;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* LEFT PANEL: Career Timeline (7 cols) */}
      <div className="lg:col-span-7 space-y-6">
        <div className="flex items-center gap-2 mb-2">
          <Briefcase className="w-5 h-5 text-purple-400" />
          <h3 className="text-lg font-bold text-white">행정 및 대외활동 궤적 (Cosmic Careers)</h3>
        </div>

        <div className="space-y-6">
          {ACTIVITIES.map((act, index) => (
            <motion.div
              key={act.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-slate-900/30 backdrop-blur-md border border-slate-800/80 rounded-3xl p-6 shadow-inner relative group hover:border-purple-500/20 transition-all duration-300"
            >
              {/* Spinning particle decoration */}
              <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping opacity-60" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/40 border border-cyan-900/40 px-3 py-1 rounded-full w-fit">
                  {act.period}
                </span>
                <span className="text-xs text-slate-550 font-mono flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-purple-500" />
                  STATION ORBIT
                </span>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                  {act.title}
                </h4>
                <p className="text-xs font-mono text-purple-400 font-bold">{act.role}</p>
              </div>

              <p className="mt-3 text-xs text-slate-350 leading-relaxed">
                {act.description}
              </p>

              {/* Extra interactive log box */}
              <div className="mt-4 bg-[#110f21]/60 border border-purple-500/5 p-3 rounded-xl">
                <p className="text-[10px] font-mono font-bold text-slate-500 flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-cyan-500" />
                  CORE DUTY REGISTRY:
                </p>
                <ul className="mt-1.5 space-y-1 text-[11px] text-slate-400 leading-relaxed font-mono">
                  {act.id === "act-1" ? (
                    <>
                      <li>• 외국인 교수진 행정 커뮤니케이션 조율 및 가독 데이터 연동</li>
                      <li>• 교내 외국 교육과정 프로그램 모니터링 및 시각 보조자료 제작</li>
                      <li>• 부서 예산 문서 집행 보조 및 오피스 라이브러리 행정 운영</li>
                    </>
                  ) : (
                    <>
                      <li>• 해성여고 자치 교육 연수 프리젠테이션 기획 및 무대 스피치</li>
                      <li>• 학과별 브릭 레이아웃 카드 및 학교 홍보 책자 이미지 협의 설계</li>
                      <li>• 교내 외빈 방문 투어 가이드 수행 및 공식 세러머니 참여</li>
                    </>
                  )}
                </ul>
              </div>

              {act.id === "act-2" && (
                <div className="mt-4 flex justify-start">
                  <a
                    href="https://youtu.be/0C1ZKJlBfDk?si=q8l4zvwPhXsQCwR2"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 py-2 px-4 rounded-xl bg-purple-600/25 hover:bg-purple-600/40 text-white border border-purple-500/30 text-[11px] font-bold transition hover:scale-[1.02] active:scale-95 shadow-md group/hb"
                  >
                    <span>영상 보러가기</span>
                    <ExternalLink className="w-3.5 h-3.5 text-purple-300 group-hover/hb:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL: Stellar Awards Closet (5 cols) */}
      <div className="lg:col-span-5 space-y-6">
        <div className="flex items-center gap-2 mb-2">
          <Trophy className="w-5 h-5 text-yellow-400" />
          <h3 className="text-lg font-bold text-white">빛나는 별자리 수상 (Stellar Awards)</h3>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {awardsList.map((aw, index) => {
            const isGrand = aw.awardType === "최우수상";
            const isSelected = activeTrophy === aw.id;
            return (
              <motion.div
                key={aw.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => {
                  if (aw.id === "award-1") {
                    window.open("https://26-1-dah-exhibition.vercel.app/award", "_blank");
                  }
                  setActiveTrophy(isSelected ? null : aw.id);
                }}
                className={`cursor-pointer p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                  isSelected
                    ? "bg-purple-950/30 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                    : isGrand
                    ? "bg-gradient-to-r from-yellow-500/10 step to-purple-500/10 border-yellow-500/20 hover:border-yellow-400/40"
                    : "bg-slate-900/30 border-slate-800/80 hover:border-purple-500/20"
                }`}
              >
                {/* Visual trophy background aura */}
                <div className={`absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-10 pointer-events-none ${isGrand ? "bg-yellow-400" : "bg-purple-500"}`} />

                <div className="flex items-center gap-3.5">
                  <div className={`p-2.5 rounded-xl flex items-center justify-center ${
                    isGrand
                      ? "bg-yellow-400/10 text-yellow-400 border border-yellow-400/20"
                      : "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                  }`}>
                    {isGrand ? <Trophy className="w-5 h-5 animate-bounce" /> : <AwardIcon className="w-5 h-5" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-purple-400 font-bold">{aw.year} SEMESTER</span>
                      <span className={isGrand ? "text-yellow-400 font-bold" : "text-slate-400"}>{aw.awardType}</span>
                    </div>
                    <h4 className={`text-sm font-bold truncate ${isGrand ? "text-yellow-300" : "text-white"}`}>
                      {aw.title}
                    </h4>
                    <p className="text-[10px] text-slate-450 font-mono">{aw.host}</p>
                  </div>
                </div>

                {/* Animated expand panel inside awards card! */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 pt-3 border-t border-slate-800 text-[11px] text-slate-350 select-none leading-relaxed font-mono"
                    >
                      <div className="flex items-center gap-1.5 mb-1.5 text-yellow-400">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Sumin Lee Academic Star Log</span>
                      </div>
                      {aw.id === "award-1" ? (
                        <div className="space-y-2">
                          <p>디지털 인문학(DAH) 전시회 최고 훈정 작으로 선정. 영문학 소설 구절의 감정 벡터를 분석하여 몽환적으로 수려하게 렌더링한 이미지 전시를 총괄하였습니다.</p>
                          <div className="pt-2">
                            <a
                              href="https://26-1-dah-exhibition.vercel.app/award"
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-xl bg-yellow-400/20 hover:bg-yellow-400/35 text-yellow-200 border border-yellow-400/30 text-[11px] font-bold transition hover:scale-[1.01] active:scale-95 group/awb"
                            >
                              <span>수상작 보러가기</span>
                              <ExternalLink className="w-3.5 h-3.5 text-yellow-400 group-hover/awb:translate-x-0.5 transition-transform" />
                            </a>
                          </div>
                        </div>
                      ) : aw.id === "award-2" ? (
                        "영어 텍스트에 내포된 역사적 사건을 디지털 매핑 기법으로 가공하여, 인류학 자료와 지형을 조합한 스토리맵 어플리케이션으로 높은 연구 가치를 인정받았습니다."
                      ) : aw.id === "award-3" ? (
                        "DAH를 대외에 널리 알리는 브랜드 콜라주 대표 포스터 공모에서, 비주얼 크리에이티브 시안이 채택되어 우승 및 전체 홍보용 포스터로 실제 인쇄 위촉되었습니다."
                      ) : aw.id === "award-4" ? (
                        "영문 수학교재 분석 데이터 및 트렌디 웹 UI에 생성형 AI 엔진을 매치하여 공스타그램 및 교재 개선 가이드라인을 출판 마케팅에 효과적으로 제안하여 득점했습니다."
                      ) : (
                        "한림대 영어영문학과 주관 문학 창작 부문에서, 영시 독해 사일런트 분석 구절과 서술적 자아를 담은 시 창작물을 연사해 학술적 성취를 높이 평가받았습니다."
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
