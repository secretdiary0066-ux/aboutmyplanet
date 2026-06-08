import { Project, Award, Activity, SkillNode } from "./types";

export const SUMIN_PROFILE = {
  name: "이수민",
  englishName: "Sumin Lee (Olivia)",
  birth: "2005. 10. 25",
  email: "hayanie04@gmail.com",
  motto: "Practice doesn’t make perfect, it makes progress.",
  instagram: {
    personal: "ivian_olivia",
    study: "study.via_n"
  },
  youtube: {
    personal: "이비안 Olivia",
    sub: "이비 (세븐틴 팬 채널)"
  },
  futureGoals: [
    {
      title: "뷰티 마케터 (Beauty Marketer)",
      description: "트렌디한 감각과 브랜딩 솔루션으로 자아를 빛나게 하는 화장품 전문 마케터가 되고자 합니다.",
      icon: "Sparkles"
    },
    {
      title: "영어 교육 전문가 (English Education)",
      description: "문학적 소양과 유창한 언어 능력을 결합하여 사람과 배움을 이어주는 가교 역할을 지향합니다.",
      icon: "BookOpen"
    }
  ],
  education: [
    { period: "2024 - 현재", school: "한림대학교 영어영문학과 재학" },
    { period: "2021 - 2024", school: "해성여자고등학교 졸업" },
    { period: "2018 - 2021", school: "용마중학교 졸업" },
    { period: "2012 - 2018", school: "서울중곡초등학교 졸업" }
  ],
  hobbies: [
    { name: "영상 편집", desc: "감성적인 숏폼 및 유튜브 채널 편집을 직접 즐깁니다.", icon: "Video" },
    { name: "소설 쓰기", desc: "마음 속의 몽환적인 상상들을 글로 엮어내는 창작 활동을 좋아합니다.", icon: "PenTool" },
    { name: "책 읽기", desc: "영문 소설과 문학 번역본 속 문체에서 영감을 얻습니다.", icon: "BookOpen" },
    { name: "음악 감상", desc: "감성을 충전하며 Xdinary Heroes의 Pluto 같은 밴드 사운드를 자주 듣습니다.", icon: "Music" }
  ],
  recommendedSong: {
    title: "Pluto",
    artist: "Xdinary Heroes"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "fwee-marketing",
    title: "뷰티 메이크업 브랜드 '퓌(fwee)' 서포터즈 활동",
    subtitle: "퓌톡틴즈 (fwee talk teens)",
    category: "marketing",
    period: "2025. 12 ~ 2026. 02",
    description: "트렌디한 메이크업 브랜드 fwee의 공식 고등&대학생 앰버서더서 실무 브랜딩 및 인플루언서 제휴 마케팅을 경험했습니다.",
    details: [
      "Z세대 뷰티 마케팅 연계 트렌드 분석 및 인스타그램 뷰티 릴스 제안",
      "컬러 무드 분석을 통한 개인 맞춤형 블러셔 및 립 제품 홍보 콘텐츠 기획",
      "fwee 브랜드 이미지 빌딩과 소통을 강조한 바이럴 콘텐츠 공동 제작"
    ],
    tags: ["뷰티 마케팅", "브랜드 마케팅", "SNS 콘텐츠 기획", "Z세대 트렌드"],
    glowColor: "rgba(168, 85, 247, 0.6)" // Neon Purple
  },
  {
    id: "dah-grand-prize",
    title: "DAH 전시회 포스터 및 디지털 아트 연구",
    subtitle: "디지털 인문학 & 종합 디지털 아트 최우수상 및 공모전 싹쓸이",
    category: "design",
    period: "2025. 2 ~ 2026. 6",
    description: "한림대학교 Digital Arts & Humanities (DAH) 전시회에서 텍스트와 디지털 예술의 융합을 연구하여 여러 차례 최고 영예를 안았습니다.",
    details: [
      "핵심 수행 과제 및 성과 : AI와 휴머니즘을 접목한 전시회 포스터 디자인 제작"
    ],
    tags: ["디지털 아트", "포스터 디자인", "AI 아트 연구", "전시기획"],
    glowColor: "rgba(59, 130, 246, 0.6)" // Electric Blue
  },
  {
    id: "toeic-mentor",
    title: "한림대학교 신입생 영어 토익 스터디 멘토링",
    subtitle: "신입생들의 맞춤형 멘토이자 학습 디렉터",
    category: "education",
    period: "2025. 3 ~ 5 & 2026. 3 ~ 5",
    description: "한림대학교에 갓 입학한 신입생들을 대상으로 밀착 어휘 지도 및 문제 풀이 노하우 공유 스터디 멘토링을 수년간 리드했습니다.",
    details: [
      "학생 맞춤형 일일 단어 챌린지 및 기출 구문 반복 훈련 코스 기획",
      "학습 의지 고취를 위한 데일리 질의응답 및 토익 모의고사 학습 분석 피드백 제공",
      "2년 연속 스터디 멘토로 위촉되어 멘티 전원의 모의토익 성적 향상 및 대학 적응 서포트"
    ],
    tags: ["영어 교육", "멘토링", "TOEIC 스터디", "학습 전략 기획"],
    glowColor: "rgba(139, 92, 246, 0.6)" // Royal Violet
  },
  {
    id: "pungsanja-supporters",
    title: "풍산자 수학교재 시리즈 서포터즈 프로그램",
    subtitle: "교육 출판 도서 홍보 및 브랜드 피드백",
    category: "marketing",
    period: "2023. 03 ~ 2023. 04",
    description: "유명 전문 교육 퍼블리셔의 풍산자 패밀리 도서 공식 서포터즈로 참가하여 마케팅 다각화와 피드백 개선을 이끌었습니다.",
    details: [
      "교재 가독성 및 학습 구문 레이아웃 분석 피드백 보고서 제출",
      "공부 소통 채널(study.via_n) 운영을 통한 트렌디한 도서 홍보 콘텐츠 업로드",
      "출판사 기획 아이디어 피드백 회의 참가로 참신한 독자 지향형 프로모션 파악"
    ],
    tags: ["에듀테크 마케팅", "공스타그램 운영", "가독성 모니터링", "독자 분석"],
    glowColor: "rgba(6, 182, 212, 0.6)" // Cyan Magic
  }
];

export const AWARDS: Award[] = [
  {
    id: "award-1",
    year: "2026-1",
    title: "한림대학교 DAH 전시회 최우수상",
    host: "한림대학교",
    awardType: "최우수상"
  },
  {
    id: "award-2",
    year: "2026-1",
    title: "한림대학교 DAH 전시회 우수상",
    host: "한림대학교",
    awardType: "우수상"
  },
  {
    id: "award-3",
    year: "2026-1",
    title: "한림대학교 DAH 전시회 포스터 공모전 우수상",
    host: "한림대학교",
    awardType: "우수상"
  },
  {
    id: "award-4",
    year: "2025-2",
    title: "한림대학교 DAH 전시회 우수상",
    host: "한림대학교",
    awardType: "우수상"
  },
  {
    id: "award-5",
    year: "2024-2",
    title: "한림대학교 영어영문학과 문학상 공모전 우수상",
    host: "한림대학교 영어영문학과",
    awardType: "우수상"
  }
];

export const ACTIVITIES: Activity[] = [
  {
    id: "act-1",
    period: "2024. 09 ~ 2026. 06",
    title: "한림대학교 영어교육센터",
    role: "수행 요원 / 센터 운영 근무",
    description: "약 1년 10개월 동안 학과 프로그램 서포트 및 외교 원어민 소통 환경 관리, 주요 전산 행정 및 프로그램 모니터링 근무를 진행했습니다."
  },
  {
    id: "act-2",
    period: "2022",
    title: "해성여자고등학교 공식 홍보대사 5기",
    role: "학교 브랜드 홍보대사",
    description: "고등학교 대표 퍼블릭 릴레이션 앰버서더로 활동하며 학생 자치 브리핑, 입시 설명회 리플렛 디자인 등 대외적 이미지 조율 능력을 발휘했습니다."
  }
];

export const SKILLS: SkillNode[] = [
  // Language & Verbal
  { name: "OPIc IH등급", level: "High", description: "유창한 영어 의사소통 및 정밀한 회화 구성이 가능합니다.", x: 25, y: 30, glow: "glow-purple-500", category: "language" },
  { name: "영어 회화", level: "Mid", description: "원어민 소통 및 캐주얼 번역과 센터 행정 인프라 응대가 가능합니다.", x: 45, y: 15, glow: "glow-cyan-400", category: "language" },
  
  // AI & Generation Tools
  { name: "생성형 AI 웹&PPT 제작", level: "High", description: "Generative AI 툴을 통하여 이미지 합성, 고독창성 PPT 및 반응형 레이아웃 구성이 능숙합니다.", x: 75, y: 25, glow: "glow-purple-400", category: "ai" },
  { name: "Google AI Studio 활용", level: "Mid", description: "Gemini Pro 및 Multimodal 모델 튜닝 기법을 활용하여 지능형 프롬프트 엔지니어링을 해내옵니다.", x: 80, y: 60, glow: "glow-blue-500", category: "ai" },
  
  // Office Admin & Marketing Content
  { name: "Google Docs Suite", level: "Mid-High", description: "Docs, Spreadsheets, Slides 협업 툴 시트를 원활히 관리하고 마케팅 피치를 시각화합니다.", x: 20, y: 70, glow: "glow-teal-400", category: "office" },
  { name: "MOS & 한글 행정 능력", level: "Mid-High", description: "MOS 오피스 자격 및 한글 툴을 활용하여 신속하고 깔끔하게 행정 데이터베이스를 가공합니다.", x: 50, y: 80, glow: "glow-indigo-500", category: "office" }
];
