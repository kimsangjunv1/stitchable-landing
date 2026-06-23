## 장점 정리

fivepixels은 스테이징·QA·내부 도구에 DOM 요소 단위 피드백을 얹는 React 라이브러리입니다. README, package.json, 번들 측정 결과를 기준으로 장점을 정리했습니다.

핵심 가치 (왜 쓰는가)
DOM 요소에 직접 피드백 — 스크린샷·이슈 트래커 대신, 실제 버튼·섹션을 클릭해 마커를 남깁니다. “어디가 문제인지”가 UI와 1:1로 연결됩니다.
data-report-id 기반 위치 복원 — 화면이 바뀌어도 querySelector로 같은 요소를 다시 찾아 마커 위치를 복원합니다. 요소가 사라지면 좌표 fallback도 지원합니다.
스테이징/QA 전용 도구에 적합 — visibility.devOnly로 production 빌드에서는 UI를 숨길 수 있어, 내부 QA 도구로 쓰기 좋습니다.
답변·검수 워크플로우 내장 — 단순 코멘트가 아니라 suggested → denied/confirm/checkout 검수 흐름까지 패널에 포함되어 있습니다.
GitHub Issue 승격 — 로컬 피드백을 나중에 Issue로 올리는 흐름(github.onCreate handler 포함)을 지원합니다.
통합·도입이 쉬운 점
한 줄로 시작 — <FivePixels /> 하나 + 대상 요소에 data-report-id만 붙이면 동작합니다.
별도 CSS import 불필요 — UI가 Shadow Root(#fivepixels-root)에 렌더링되며, purge된 Tailwind CSS가 번들에 포함됩니다.
호스트 앱 CSS와 격리 — Shadow Root라 Tailwind reset, global style, 호스트 테마와 스타일 충돌이 없습니다.
저장소 선택이 유연함 — handler를 생략하면 localStorage가 기본이고, onList/onCreate/onUpdate/onDelete로 서버 API에 바로 연동할 수 있습니다.
점진적 확장 — 로컬만 쓰다가 → 팀·필드 추가 → 서버 persistence → GitHub·Slack 연동 순으로 단계적으로 늘릴 수 있습니다.
subpath export — @fivepixels-js/react/report는 FivePixels·타입만 export해, motion 등은 필요할 때만 fivepixels에서 가져올 수 있습니다.
TypeScript 타입 제공 — ReportFeedback, CreateReportFeedbackPayload, ReportEvent 등 계약이 타입으로 정의되어 있습니다.
가벼움·의존성 (라이브러리로서)
런타임 dependencies 0개 — react, react-dom만 peer dependency입니다. Framer Motion, Radix, MUI 같은 UI 프레임워크에 묶이지 않습니다.
애니메이션도 자체 구현 — components/motion을 쓰므로 motion(Framer) 같은 추가 패키지가 없습니다.
스타일시트는 비교적 작음 — minify+gzip 기준 stylesheet 약 10KB (CI 목표 12KB 이하).
번들 예산을 CI로 관리 — npm run size:bundle로 minify+gzip 크기를 자동 측정합니다.
항목 대략적인 크기 (React 제외, minify+gzip)
stylesheet
~10KB
@fivepixels-js/react/report 전체
~55KB
JS만 (stylesheet 제외)
~45KB
React를 peer로 두는 점, Shadow Root UI·검수 워크플로우·i18n 등이 포함된 점을 감안하면 의존성 측면에서는 가볍고, 기능 포함 UI 번들은 중간 정도라고 보는 게 맞습니다. “의존성 0 + QA 풀스택 UI” 트레이드오프입니다.

운영·팀 협업
키보드 단축키 — ⌘⇧M(피드백), ⌘⇧L(보기), ⌘⇧E(요소 미리보기) 등 마우스 없이도 QA 가능합니다.
다국어 — ui.locale: "ko" | "en", 브라우저 언어 자동 감지, ui.messages로 문구 커스터마이즈.
커스텀 필드 — textarea, checkbox(태그 pill)로 피드백 폼을 앱에 맞게 구성할 수 있습니다.
팀·리뷰어 설정 — team.user, team.reviewers로 작성자·검수자를 미리 지정할 수 있습니다.
프로젝트/환경/버전 분리 — project.id, env, version으로 피드백을 스코프별로 나눌 수 있습니다.
라우트별 분리 — 기본적으로 pathname 기준으로 피드백이 분리되고, routeKey로 세밀하게 조정 가능합니다.
localStorage Import/Export — 서버 없이도 JSON으로 피드백을 백업·공유·이관할 수 있습니다.
Side effect 훅 — onEvent(analytics), onReply(Slack 등)로 저장 이후 동작을 분리해 붙일 수 있습니다.
품질·신뢰
MIT 라이선스 — 상업·내부 도구에 제약이 적습니다.
테스트·CI — Vitest, typecheck, build, bundle size, example build가 CI에서 돌아갑니다.
문서가 충실함 — README, getting-started, data model, example app 가이드가 있습니다.
데이터 계약이 명확함 — replies, status, field_values, GitHub integrations 등 스키마가 문서화되어 있습니다.
한 줄 요약
“React 앱에 <FivePixels /> 하나만 넣으면, CSS 충돌 없이 DOM 단위 QA·피드백·검수·GitHub 연동까지 돌아가고, 서버 없이도 localStorage로 바로 쓸 수 있는 라이브러리”

Marker.io, BugHerd, Usersnap, Jam.dev 같은 SaaS QA 위젯과 fivepixels을 나란히 보면, 포지션이 꽤 다릅니다. SaaS는 “바로 쓰는 올인원 서비스”, fivepixels은 “내 React 앱에 박아 넣는 오픈소스 라이브러리”에 가깝습니다.

한눈에 보는 포지셔닝
구분 Marker.io / BugHerd / Usersnap / Jam fivepixels
형태
SaaS + 외부 위젯/확장 프로그램
npm 라이브러리 (앱 안에 내장)
비용
월 $39~$99+ (시트/프로젝트 제한)
MIT, 구독료 없음
데이터
SaaS 대시보드·클라우드
localStorage 또는 내 서버/DB
피드백 방식
스크린샷 + 주석 + 메타데이터
DOM 요소 클릭 + 마커
타깃
에이전시·클라이언트 UAT·비개발자 리포터
내부 QA·스테이징·개발팀
fivepixels이 SaaS QA 도구 대비 유리한 점

1. 비용·벤더 락인 없음
   Marker.io는 월 $39부터, BugHerd는 멤버 기준 월 구독입니다.
   fivepixels은 MIT + 런타임 dependency 0이라 시트 수·프로젝트 수·기간 제한이 없습니다.
   SaaS를 끊어도 피드백 UI·데이터 흐름을 내 코드/인프라로 유지할 수 있습니다.
2. 데이터·프라이버시를 완전히 내가 소유
   Marker.io/Jam 등은 피드백이 외부 서비스로 올라갑니다.
   fivepixels은 기본이 localStorage, 서버 연동 시에도 onList/onCreate/onUpdate로 내 API·내 DB에만 저장합니다.
   금융·헬스·사내망·폐쇄망처럼 서드파티 스크립트를 못 쓰는 환경에 맞습니다.
3. “요소 단위” 피드백 — 스크린샷보다 개발 친화적
   Marker.io/BugHerd/Jam은 화면 캡처 + 픽셀 좌표 중심입니다. 레이아웃이 바뀌면 “그때 그 버튼”을 다시 찾기 어렵습니다.
   fivepixels은 data-report-id로 실제 DOM 요소에 앵커를 겁니다. 화면이 바뀌어도 querySelector로 같은 요소를 찾아 마커를 복원합니다.
   개발자 입장에서는 “hero-cta 버튼 색상 이슈”처럼 코드·컴포넌트와 1:1로 대응되는 피드백이 됩니다.
4. 앱에 녹아든 QA 도구 (외부 위젯이 아님)
   SaaS는 보통 스니펫 1~2줄 + 외부 위젯이 붙습니다. 브랜딩·로딩·CSP·성능 이슈가 생길 수 있습니다.
   fivepixels은 <FivePixels /> 하나로 React 트리에 들어가고, UI는 Shadow Root에 격리됩니다.
   호스트 CSS와 충돌 없고, 별도 CSS import도 필요 없습니다.
5. production에 안 보이게 설계됨
   visibility.devOnly로 production 빌드에서는 UI를 숨길 수 있습니다.
   Marker.io 등은 스테이징/프로덕션 환경 분리는 되지만, “앱 코드 레벨에서 아예 렌더 안 함”은 fivepixels이 더 직접적입니다.
   내부 QA 전용 도구로 쓰기 좋습니다.
6. 검수 워크플로우가 라이브러리에 내장
   SaaS 대부분: 코멘트 → 이슈 트래커로 넘기기.
   fivepixels: suggested → denied / confirm / checkout 검수 타임라인이 view 모드에 포함됩니다.
   Jira까지 안 가도, 스테이징에서 PM·디자이너·개발자가 한 화면에서 검수할 수 있습니다.
7. 저장소·연동을 내 방식으로
   SaaS: Jira/Linear/GitHub 제공 방식에 맞춤 (플랜·동기화 방식 제한).
   fivepixels: persistence handler로 어떤 백엔드든 연결 가능하고, GitHub Issue도 github.onCreate로 내 서버 API 경유.
   Slack·analytics는 onEvent/onReply로 붙이면 됩니다.
8. 의존성이 가벼움
   Framer Motion, Radix, MUI 같은 UI 스택에 묶이지 않습니다. react/react-dom만 peer입니다.
   애니메이션도 자체 motion 구현입니다.
   SaaS 위젯은 “가벼운 스니펫”이라고 하지만, 실제로는 외부 CDN + 대시보드 + 계정 전체를 끌어옵니다.
9. 한국어·커스터마이즈
   ui.locale: "ko" 기본 지원, ui.messages로 문구 오버라이드.
   Marker.io/BugHerd 등은 영어 중심 UI가 많고, 한국 팀 내부 QA용으로 맞추려면 브랜딩 플랜이나 제한이 있습니다.
10. 오픈소스라 포크·확장 가능
    폼 필드, 검수 정책, 패널 UI를 소스 수정으로 바꿀 수 있습니다.
    SaaS는 기능 요청·플랜 업그레이드를 기다려야 합니다.
    도구별로 보면 fivepixels이 이기는 지점
    vs Marker.io
    Marker.io 강점: 스크린샷·주석, 콘솔/네트워크 로그, 세션 리플레이, Jira/Linear 네이티브 연동, 비개발자용 위젯.

fivepixels이 나은 경우

월 구독 없이 스테이징 QA만 돌리고 싶을 때
피드백을 내 DB에만 두고 싶을 때
“어느 컴포넌트/버튼”인지 DOM id로 추적하고 싶을 때
React 앱에 스타일 격리된 내장 패널을 원할 때
vs BugHerd
BugHerd 강점: 에이전시·클라이언트용 핀/칸반, 비기술자 리포팅.

fivepixels이 나은 경우

클라이언트 대시보드가 아니라 개발팀 내부 QA가 목적일 때
Kanban 대신 검수 워크플로우(denied/confirm) 가 필요할 때
PM 도구 2-way sync보다 GitHub Issue 승격 + 내 API가 맞을 때
vs Usersnap
Usersnap 강점: NPS·마이크로서베이·스크린 녹화, 엔드유저 피드백·프로덕트 인사이트.

fivepixels이 나은 경우

베타 유저 설문이 아니라 스테이징 버그 픽스·UAT가 목적일 때
피드백량이 많은 프로덕트 분석이 아니라 요소 단위 이슈 추적이 목적일 때
vs Jam.dev
Jam 강점: 원클릭 버그 리포트, 자동 콘솔/네트워크/세션 컨텍스트, 개발자 재현 속도.

fivepixels이 나은 경우

“그 순간 화면”보다 “그 UI 요소가 계속 문제” 를 추적할 때
Jam 계정·클라우드 없이 완전 자체 호스팅이 필요할 때
React 앱 안에서 QA 패널을 제품 UI처럼 통합하고 싶을 때
솔직히 SaaS가 더 나은 경우 (fivepixels 약점)
비교를 공정하게 하려면 이쪽도 짚어야 합니다.

SaaS가 유리한 점 fivepixels 현재
비개발자·클라이언트가 계정 없이 리포트
data-report-id 마크업 + React 연동 필요
자동 스크린샷·주석
DOM 마커 중심 (스크린샷 없음)
콘솔/네트워크 로그, 세션 리플레이
미포함
Jira/Linear/Asana 네이티브 2-way sync
handler/GitHub 콜백으로 직접 구현
WordPress/노코드 사이트
React 전용
브라우저 확장으로 아무 사이트나 QA
앱에 <FivePixels /> 삽입 필요
AI로 피드백 정리 (Marker.io 등)
미포함
선택 가이드 (한 줄)
클라이언트에게 “여기 클릭해서 스크린샷 보내세요” → Marker.io / BugHerd / Jam
스테이징에서 개발팀이 DOM 단위로 QA·검수하고, 데이터는 내가 갖고, 구독은 안 쓰고 싶다 → fivepixels
요약
fivepixels의 차별점은 “더 많은 QA 기능”이 아니라 소유권·비용·DOM 앵커·React 내장·검수 워크플로우 쪽입니다. Marker.io류는 올인원 SaaS + 시각적 리포팅 + PM 연동이 강하고, fivepixels은 내 앱 안의 가벼운 오픈소스 QA 레이어에 가깝습니다.

특정 상황(예: “에이전시가 클라이언트 UAT만 한다” vs “사내 React 스테이징만”)을 알려주시면 그 시나리오 기준으로 추천을 더 좁혀 드리겠습니다.
