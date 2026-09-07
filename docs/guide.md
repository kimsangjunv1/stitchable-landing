# fivepixels 가이드 사이트 구성 브리프

> **문서 목적:** 이 파일은 최종 유저용 가이드가 아니라, **다른 AI·작성자가 가이드 사이트·문서 페이지를 구성할 때 참고하는 심층 브리프**입니다.  
> **제품:** `@fivepixels-js/react` (MIT) — React 18+ DOM 요소 단위 피드백 라이브러리  
> **버전 기준:** 패키지 `0.2.24` 전후 코드베이스 (2026-09)  
> **기존 온라인 가이드:** https://library.codi-agit.com/fivepixels/guide  
> **npm:** https://www.npmjs.com/package/@fivepixels-js/react  
> **GitHub:** https://github.com/kimsangjunv1/fivepixels

---

## 0. 이 문서를 읽는 AI에게 — 작업 지시

### 0.1 당신이 만들 것

1. **도입·정착 가이드** (`/guides/*`) — 비개발자·개발자 모두 읽히는 “오늘부터 쓰는법”
2. **개발자 문서** (`/docs/*`) — 설치·Props·Adapter·DOM·엣지케이스
3. (선택) 랜딩·데모와 연결되는 **네비·사이트맵** 일관성

### 0.2 반드시 지킬 원칙

| 원칙                       | 설명                                                                                                            |
| -------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **사실 기반**              | 추상 마케팅(“혁신적 QA”) 금지. Shadow DOM / localStorage / `devOnly` / 반나절·1페이지 등 **검증 가능한 사실**만 |
| **이중 독자**              | 비개발자 = 공감·워크플로 / 개발자 = 도입 리스크 해소. 한쪽만 설득하지 말 것                                     |
| **경쟁사명 금지**          | 특정 QA SaaS·자동화 툴 이름 비교 금지. 비교는 「캡처·슬랙·구두 vs fivepixels」만                                |
| **라이브러리 포지션**      | 엔터프라이즈 QA 플랫폼·E2E 대체·별도 로그인 SaaS가 **아님**                                                     |
| **코드 스니펫은 최신 API** | 레거시 `onList`/`onCreate` 단독 예시는 쓰지 말 것 → `sync` + `adapter` (`FivePixelsAdapter`)                    |
| **UI Edit 한계 명시**      | 세션 전용, 새로고침 시 원복, 코드베이스 자동 반영 **아님**                                                      |
| **한국어 우선**            | 가이드 본문은 한국어. 영문 병기는 용어·Props 키만                                                               |

### 0.3 레포 내 참고 원본 (우선순위)

| 우선 | 파일                                                 | 용도                                                   |
| ---- | ---------------------------------------------------- | ------------------------------------------------------ |
| 1    | `README.md` / `README-en_us.md`                      | 설치·Props·UI Edit·공식 사실                           |
| 2    | `examples/basic/memo.md`                             | 랜딩·사이트맵·카피·CTA·안티패턴                        |
| 3    | `docs/features-for-user.md`                          | 유저 관점 기능 흐름 (일부 API 레거시 — Adapter로 보정) |
| 4    | `docs/analyze.md`                                    | QA 엣지케이스·체크리스트                               |
| 5    | `docs/fivepixels-report-id-prompt.md`                | `data-report-id` 태깅 규칙·AI 프롬프트                 |
| 6    | `functions_describe.md`                              | 기능 목록 표 (버전 표기 구식일 수 있음 → 코드 확인)    |
| 7    | `src/shared/types/publicApi.ts`                      | `FivePixelsProps` 단일 소스                            |
| 8    | `src/shared/types/adapter.ts`                        | `FivePixelsAdapter` handler 계약                       |
| 9    | `docs/backend-api-route.md` / `docs/backend-spec.md` | API 연동 상세 (백엔드 구현자용)                        |

### 0.4 산출물 품질 체크리스트

- [ ] 히어로/퀵스타트에서 비개발자가 5초 안에 “캡처 대신 화면 클릭”을 이해
- [ ] 개발자 안심 근거 5종(§3.3)이 **문장으로** 존재
- [ ] Primary CTA = 데모 / Secondary CTA = 설치·5분 가이드
- [ ] Props·Adapter는 `/docs`에, 랜딩에는 장문 API 없음
- [ ] FAQ에 “코드 자동 반영 아님” 명시
- [ ] `data-fp-view` / `data-fp-open` / `onNavigate`가 SPA·모달 가이드에 포함

---

## 1. 제품 한 줄 · 포지셔닝

### 1.1 기술적으로 정확한 한 줄

스테이징·QA·내부 도구 화면에서 **DOM 요소 단위 피드백**을 남기고, 팀과 **답변·검수**한 뒤 필요하면 **GitHub Issue로 승격**할 수 있는 React 라이브러리. UI는 **Shadow Root**에 렌더링되어 **별도 CSS import가 필요 없음**.

### 1.2 비개발자 히어로 (확정 톤)

> **스크린샷과 슬랙 대신, 검수하는 그 화면에서 바로 피드백하세요.**

서브: 무거운 QA 툴 없이도 됩니다. 클릭한 위치에 남기고, 팀과 확인하고, 필요할 때만 이슈로 넘깁니다.

### 1.3 개발자 서브

> **기존 React 앱 위에 얇게 붙이고, 1페이지부터 점진적으로 확장하세요.**

### 1.4 대체하는 것 / 아닌 것

| 대체 (Pain)                        | 아닌 것                         |
| ---------------------------------- | ------------------------------- |
| 캡처 + 슬랙/카톡 + “저기요”        | 엔터프라이즈 QA 플랫폼          |
| 노션·메일에 흩어진 수정 요청       | 별도 로그인 필수 피드백 SaaS    |
| 무거운 도입 프로젝트만 하다 미루기 | 브라우저 자동화·E2E 테스트 대체 |
| “말로만 설명하는 시안”             | 디자인 툴(Figma) 대체           |

### 1.5 핵심 가치 8 (가이드 카드·목차용)

| #   | 대상     | 한 줄                                 |
| --- | -------- | ------------------------------------- |
| 1   | 공통     | 스테이징 화면 위 클릭 피드백          |
| 2   | 공통     | UI Edit로 시안을 화면으로 전달        |
| 3   | 비개발자 | 캡처·슬랙 대신 위치 고정 이슈         |
| 4   | 비개발자 | 클라이언트 안내문으로 빠른 검수       |
| 5   | 개발자   | Shadow DOM — 호스트 CSS import 불필요 |
| 6   | 개발자   | 로컬 저장으로 백엔드 없이 체험        |
| 7   | 개발자   | 1페이지부터 점진적 `data-report-id`   |
| 8   | 성장     | GitHub Issue·커스텀 API (선택)        |

---

## 2. 타깃 · 페르소나 · 역할별 여정

### 2.1 세그먼트

| 세그먼트          | 상황                    | 가장 아픈 점                  | 가이드 메시지                                   |
| ----------------- | ----------------------- | ----------------------------- | ----------------------------------------------- |
| 초기 스타트업     | QA·프로세스 없음        | 피드백이 구두·메신저로 사라짐 | 검수 전용 사이트 말고, 있는 스테이징에 붙이세요 |
| 체계 안 잡힌 팀   | 도구는 쓰지만 규칙 없음 | 같은 이슈 반복 설명           | 화면에 고정되니 “어디 말한 거?”가 줄어듭니다    |
| 도입 여유 없는 팀 | 비용·시간·인력 부담     | 도입 프로젝트 자체가 부담     | 오늘 시작, 학습할 새 앱이 아닙니다              |
| 프리랜서          | 클라이언트 피드백 모호  | “조금만”, “저기”              | 스테이징 URL + 안내문으로 직접 표시             |
| QA툴 허들 팀      | 학습곡선 부담           | 새 툴 온보딩                  | 보는 화면에 코멘트 — 별도 QA 앱이 아님          |

### 2.2 역할별 “누가 무엇을”

| 역할                       | 주요 행동                   | 자주 쓰는 모드/기능               | 가이드 페이지                       |
| -------------------------- | --------------------------- | --------------------------------- | ----------------------------------- |
| QA / 테스터                | 버그·오타 위치 표시, 재검수 | Report/View, 필터, 상태           | `/guides/workflow`, `/guides/roles` |
| 디자이너                   | 시안 차이 코멘트, UI Edit   | 우클릭 수정, Before/After         | `/docs/ui-edit`, `/guides/workflow` |
| PM / 기획                  | 상태 추적, 우선순위         | 목록·Needs Attention·Today Digest | `/guides/rules`                     |
| 개발자                     | 설치·태깅·API·GitHub        | Adapter, `devOnly`, `onNavigate`  | `/docs/setup`, `/docs/persistence`  |
| 클라이언트 / 프리랜서 고객 | 클릭으로 남기기만           | Report 모드 최소 UX               | `/guides/client`                    |

### 2.3 패널 역할(Panel Role) — 제품 내 온보딩과 맞추기

코드 상수 (`PANEL_ROLE_VALUES`):

`general` · `qa` · `developer` · `designer` · `planner` · `general-user`

가이드에서 “역할별 추천 탭”을 설명할 때 이 값을 쓰고, 온보딩에서 역할 선택 → 기본 노출 탭이 달라진다는 점을 안내하세요.

---

## 3. 권장 사이트 구성 (IA)

### 3.1 사이트맵

```
/ ............................ 홈 (랜딩) — 공감 + 개발자 안심
/demo ........................ 라이브 체험 (examples/basic 또는 임베드)

/for ......................... 세그먼트 허브
  /for/startups
  /for/small-teams
  /for/freelancers
  /for/agencies (선택)

/why ......................... 캡처·슬랙 vs 화면 피드백 (이름 없는 비교)

/guides ...................... ★ 도입·정착 (1급 메뉴)
  /guides/quickstart ......... 비개발자 탭 + 개발자 탭
  /guides/rollout ............ 1주 도입 로드맵
  /guides/rules .............. 팀 규칙 템플릿
  /guides/client ............. 클라이언트 안내문
  /guides/workflow ........... 남김→확인→해결 (+ UI Edit)
  /guides/roles .............. 역할별 누가 무엇을
  /guides/faq
  /guides/shortcuts .......... (권장) 단축키 치트시트
  /guides/dom-tagging ........ (권장) data-report-id 네이밍·AI 프롬프트

/examples
  /examples/basic
  /examples/recipes (선택)

/docs ........................ 개발자 문서
  /docs/install
  /docs/setup
  /docs/dom-attributes
  /docs/modes-and-shortcuts
  /docs/ui-edit
  /docs/persistence          sync / localStorage / adapter
  /docs/auth-and-team
  /docs/github
  /docs/panel-and-tabs
  /docs/mentions-and-thread
  /docs/import-export
  /docs/mobile-preview       (선택) QR·디바이스 프리뷰
  /docs/custom-ui            ReportProvider / hooks
  /docs/api                  Props + Adapter 레퍼런스
  /docs/edge-cases           analyze.md 요약
  /docs/backend              (선택) 자체 API 구현자용

/changelog
/blog (선택)

외부: GitHub · npm
```

### 3.2 상단 네비 (5개)

| 메뉴            | 경로        |
| --------------- | ----------- |
| 데모            | `/demo`     |
| 이런 팀에게     | `/for`      |
| **도입 가이드** | `/guides`   |
| 예제            | `/examples` |
| 문서            | `/docs`     |

### 3.3 개발자 안심 근거 5종 (홈·퀵스타트 개발자 섹션 필수)

가이드/랜딩 어디든 개발자 설득 블록에는 아래가 **각각 문장으로** 들어가야 함:

| 근거         | 예시 문장                                                                |
| ------------ | ------------------------------------------------------------------------ |
| 도입 비용    | `npm install` 후 `<FivePixels />` 한 번, **반나절**이면 스테이징 1페이지 |
| 점진 적용    | 전체 앱이 아니라 검수 많은 페이지·요소에만 `data-report-id`              |
| Shadow DOM   | 피드백 UI는 Shadow DOM — 호스트에 CSS import 없음, 스타일 충돌 없음      |
| localStorage | API 없이도 handler/`adapter` 생략 시 localStorage로 팀 체험              |
| `devOnly`    | `visibility.devOnly`로 프로덕션 비노출, 스테이징에서만 켜기              |

### 3.4 구현 우선순위 (콘텐츠)

| 단계 | 페이지                                                                                             |
| ---- | -------------------------------------------------------------------------------------------------- |
| 1차  | `/guides/quickstart`, `/guides/client`, `/docs/setup`, `/docs/dom-attributes`                      |
| 2차  | `/guides/rollout`, `/guides/rules`, `/guides/workflow`, `/docs/ui-edit`, `/docs/persistence`       |
| 3차  | `/docs/api`, `/docs/github`, `/docs/edge-cases`, `/for/*`, `/why`                                  |
| 4차  | `/guides/roles`, `/docs/panel-and-tabs`, `/docs/mentions-and-thread`, `/docs/mobile-preview`, blog |

---

## 4. 페이지별 콘텐츠 명세

### 4.1 `/guides/quickstart`

**구조:** 탭 2개 (비개발자 | 개발자)

#### 비개발자 탭

1. 스테이징 URL을 연다
2. **피드백 추가** 모드로 전환 (`⌘⇧M` / 패널)
3. 요소 클릭 → 메시지 작성 → 제출
4. **보기** 모드(`⌘⇧L`)에서 마커·목록 확인
5. (선택) 우클릭 → 수정하기로 “이렇게” 보여 주기

스크린샷 권장: 모드 전환 → 클릭 하이라이트 → 작성 폼 → 마커

#### 개발자 탭 (5분)

```tsx
import { FivePixels } from "@fivepixels-js/react";

export default function App() {
    return (
        <>
            <FivePixels
                project={{ id: "my-app" }}
                visibility={{ devOnly: true }}
            />
            <button data-report-id="hero-cta">시작하기</button>
        </>
    );
}
```

성공 기준: 스테이징 1페이지에서 피드백 1건 생성·마커 표시.

### 4.2 `/guides/rollout` — 1주 로드맵

| 일차   | 할 일                                  | 성공 기준             |
| ------ | -------------------------------------- | --------------------- |
| Day 1  | 스테이징 1페이지에만 붙이기            | `devOnly`, id 1~3개   |
| Day 2  | 내부 2~3명 사용                        | 피드백 5건            |
| Day 3  | 팀 규칙 합의 (`/guides/rules`)         | 1페이지 규칙 문서화   |
| Day 4  | (프리랜서) 클라이언트 1차 검수         | `/guides/client` 발송 |
| Day 5  | 미해결만 보기                          | View 모드 + 상태 필터 |
| Day 6~ | (선택) `sync="api"` + adapter / GitHub | 팀 공유 저장소        |

점진 도입 다이어그램:

```
Day 0   npm install + <FivePixels /> + visibility.devOnly
Day 1   검수 많은 페이지 1곳에만 data-report-id
Day 2+  adapter 연동 / GitHub / 팀 규칙
```

### 4.3 `/guides/rules` — 복사 템플릿

| 규칙              | 내용                                                  |
| ----------------- | ----------------------------------------------------- |
| 어디에            | 스테이징 URL만 (캡처 메일 지양)                       |
| 이름              | id는 kebab-case (`hero-cta`)                          |
| 한 수정 한 케이스 | 여러 요청은 케이스 분리                               |
| 해결              | 스테이징 재확인 후 `resolved`                         |
| 클라이언트        | 안내문 + 클릭으로 표시                                |
| 모달·탭           | `data-fp-view` / `data-fp-open` 연결                  |

### 4.4 `/guides/client` — 프리랜서 발송문

- 제목: 「스테이징에서 직접 표시해 주세요」
- 본문: URL / 클릭 방법 / “저기요” 대신 화면에 남기기
- 스크린샷 3장: 모드 전환 → 클릭 → 작성
- FAQ 한 줄: “새로고침하면 UI Edit 미리보기는 원래대로 돌아갑니다. 피드백 글은 남습니다(저장 방식에 따라).”

### 4.5 `/guides/workflow`

```
남김(open)
  → (선택) UI Edit로 시안 전달
  → 확인 요청 / 답변 스레드
  → 수정
  → 재확인
  → 해결(resolved)
  → (성장) GitHub Issue (git_issued)
  → (선택) archived
```

상태 머신 (`ReportStatus`):

`open` → `git_issued` | `resolved` | `archived`  
`git_issued` → `resolved` | `archived`  
`resolved` → `open` | `archived`  
`archived` → (복원 정책은 제품 UI 기준)

### 4.6 `/docs/setup` — 최소·권장·원격

#### A. 최소 (local)

```tsx
<FivePixels project={{ id: "my-app" }} />
```

#### B. 스테이징 권장

```tsx
<FivePixels
    project={{ id: "my-app", env: "stage", version: "1.2.0" }}
    visibility={{ enabled: true, devOnly: true }}
    ui={{ appearance: "system", locale: "ko" }}
/>
```

#### C. API 연동 (최신)

```tsx
import { useMemo } from "react";
import { FivePixels, type FivePixelsAdapter } from "@fivepixels-js/react";

function createAdapter(): FivePixelsAdapter {
    const base = "/api/v1/fivepixels/projects/my-app";
    return {
        markers: {
            list: ({ pathname }) => fetch(`${base}/feedbacks/markers?pathname=${encodeURIComponent(pathname)}`).then((r) => r.json()),
        },
        feedback: {
            create: (payload) => fetch(`${base}/feedbacks`, { method: "POST", body: JSON.stringify(payload) }).then((r) => r.json()),
            getForUi: (id) => fetch(`${base}/feedbacks/${id}/overview`).then((r) => r.json()),
            update: (id, payload) => fetch(`${base}/feedbacks/${id}`, { method: "PATCH", body: JSON.stringify(payload) }).then((r) => r.json()),
        },
    };
}

export function App() {
    const adapter = useMemo(() => createAdapter(), []); // ★ 인라인 객체 금지 — 목록 API 반복 호출 방지

    return (
        <FivePixels
            project={{ id: "my-app", env: "stage" }}
            sync="api"
            adapter={adapter}
        />
    );
}
```

**로그인 없이 API만 (공유형):**

```tsx
<FivePixels
    sync="api"
    require={{ authLogin: false, reviewerKey: false }}
    adapter={adapter}
/>
```

필수 원격 persistence: `adapter.markers.list`, `adapter.feedback.create`, 그리고 `adapter.feedback.update` **또는** `adapter.cases.update` 중 하나 이상.

### 4.7 `/docs/dom-attributes`

| 속성               | 필수 | 설명                                                  |
| ------------------ | ---- | ----------------------------------------------------- |
| `data-report-id`   | 권장 | 요소 식별자. 마커 복원. 없으면 CSS selector 대체 추적 |
| `data-report-type` | 선택 | `item`(기본) / `group`(섹션)                          |
| `data-fp-view`     | 선택 | 모달·탭 등 다시 열어야 하는 영역의 키                 |
| `data-fp-open`     | 선택 | 같은 키의 view를 여는 트리거                          |

네이밍:

- kebab-case, 영문·숫자·하이픈
- 권장: `{route}-{section}-{role}` — `pricing-hero-cta`
- 리스트는 **index 금지**, 안정 id/slug 사용

숨김 UI는 `data-fp-view`와 `data-fp-open`을 같은 키로 연결해 복원한다.

중첩 view는 바깥쪽부터 순서 복원.

### 4.8 `/docs/ui-edit`

언제: 말로 설명하기 어려운 UI를 스테이징에서 맞춰 볼 때.

시작:

1. 피드백 추가 모드에서 요소 선택
2. 우클릭 → **수정하기**
3. 적용 → **수정됨** 표시

조정 가능:

| 구분   | 항목                                                      |
| ------ | --------------------------------------------------------- |
| 텍스트 | `textContent`, `fontSize`, `lineHeight` (비텍스트면 숨김) |
| 박스   | `padding`, `margin`                                       |
| 색상   | `textColor`, `backgroundColor`, `borderColor`             |
| flex   | 정렬·방향·gap (`display:flex`일 때만)                     |
| grid   | 칸 수 1~12, gap (`display:grid`일 때만)                   |

컨텍스트 메뉴: 수정하기 / 원래대로 / 지우기(세션 내 복원 가능)

패널 배너: 초기화 · Undo/Redo · Before/After

피드백 반영: 드래프트에 “스타일 변경 요약 반영” 배너

**제한 (가이드에 굵게):**

- `element.style` 인라인 — 클래스(CSS/Tailwind)보다 우선
- **탭 세션만** 유지, **새로고침 시 원복**
- 코드베이스 자동 저장 **아님**
- 복잡한 grid 템플릿은 단순화

### 4.9 `/docs/persistence`

| `sync`         | 의미                                             |
| -------------- | ------------------------------------------------ |
| `local` (기본) | localStorage. adapter 생략 가능                  |
| `api`          | 회사/자체 API + `adapter`                        |
| `artemis`      | Artemis 백엔드 + `auth.artemisLogin` (로그인 시) |

프로젝트 스코프: `project.id` / `env` / `version` — 저장 키·데이터 분리. version bump 시 스코프 분리되는지 **팀 합의** 필요.

Import/Export·Command JSON은 **local 모드** 중심 (가이드에 “팀 공유는 API 권장” 명시).

#### 4.9.1 추가 예시 — localStorage / API 연동 (상황 1줄 + 코드)

형식: **첫 줄 = 상황**, **다음 = 복붙 코드**. 레거시 `onList`/`onCreate` 금지 · `sync` + `adapter`만.

##### A. localStorage (`sync="local"` / 생략)

백엔드 없이 오늘 스테이징 1페이지에서 바로 체험한다.

```tsx
<FivePixels
    project={{ id: "my-app" }}
    visibility={{ devOnly: true }}
/>
```

저장 전략을 문서·코드 리뷰에서 분명히 `local`로 남긴다.

```tsx
<FivePixels
    project={{ id: "my-app" }}
    sync="local"
/>
```

스테이징/프로덕션·버전별로 localStorage 키를 나눠 피드백이 섞이지 않게 한다.

```tsx
<FivePixels
    project={{ id: "my-app", env: "stage", version: "1.2.0" }}
    sync="local"
/>
```

공개 API로 local adapter를 직접 만들어 주입한다(테스트·커스텀 스코프).

```tsx
import { FivePixels, createLocalStorageReportAdapter } from "@fivepixels-js/react";
const adapter = createLocalStorageReportAdapter({ projectId: "my-app", environment: "stage", appVersion: "1.2.0" });
<FivePixels
    project={{ id: "my-app", env: "stage", version: "1.2.0" }}
    sync="local"
    adapter={adapter}
/>;
```

개발자 없이 QA만 쓰게 두고, 프로덕션 번들에서는 패널을 끈다.

```tsx
<FivePixels
    project={{ id: "my-app" }}
    sync="local"
    visibility={{ enabled: true, devOnly: true }}
/>
```

클라이언트 시연용으로 프레젠테이션 모드 + 로컬 저장만 켠다.

```tsx
<FivePixels
    project={{ id: "demo" }}
    sync="local"
    mode="presentation"
/>
```

피드백 작성 시 팀 전용 체크리스트 필드를 local에서도 쓴다.

```tsx
<FivePixels
    sync="local"
    project={{ id: "my-app" }}
    fields={[
        { key: "repro", type: "textarea", label: "재현 절차" },
        { key: "blocker", type: "checkbox", label: "배포 블로커" },
    ]}
/>
```

브라우저 로컬만 쓰되 리뷰어 명단·표시 이름을 패널에 미리 넣어 둔다.

```tsx
<FivePixels
    sync="local"
    project={{ id: "my-app" }}
    team={{
        reviewers: [
            { id: "r1", name: "Kim", publicKey: "pk_…" },
            { id: "r2", name: "Lee", publicKey: "pk_…" },
        ],
    }}
/>
```

SPA에서 다른 경로 피드백으로 이동할 때 라우터와 local 저장을 같이 쓴다.

```tsx
<FivePixels
    sync="local"
    project={{ id: "my-app" }}
    onNavigate={(pathname) => navigate(pathname)}
/>
```

##### B. API 연동 (`sync="api"` / `artemis`)

회사 API에 최소 필수 handler만 연결해 팀 공유 저장소를 켠다.

```tsx
const adapter = useMemo<FivePixelsAdapter>(
    () => ({
        markers: { list: ({ pathname }) => fetch(`/api/v1/fivepixels/projects/my-app/feedbacks/markers?pathname=${encodeURIComponent(pathname)}`).then((r) => r.json()) },
        feedback: {
            create: (payload) =>
                fetch(`/api/v1/fivepixels/projects/my-app/feedbacks`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }).then((r) => r.json()),
            update: (id, payload) =>
                fetch(`/api/v1/fivepixels/projects/my-app/feedbacks/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }).then((r) => r.json()),
        },
    }),
    [],
);
<FivePixels
    project={{ id: "my-app", env: "stage" }}
    sync="api"
    adapter={adapter}
/>;
```

원격 sync 기본값대로 회사 로그인을 요구한다(`auth.login` 필수).

```tsx
<FivePixels
    sync="api"
    require={{ authLogin: true }}
    adapter={adapterWithAuthLogin}
/>
```

로그인 없이 API만 쓰는 공유형 스테이징(표시 이름·개인키로 구분).

```tsx
<FivePixels
    sync="api"
    require={{ authLogin: false, reviewerKey: false }}
    adapter={adapter}
/>
```

리뷰어 공개키와 개인키 매칭을 강제해 “누가 남겼는지”를 팀 규칙으로 고정한다.

```tsx
<FivePixels
    sync="api"
    require={{ authLogin: false, reviewerKey: true }}
    team={{ reviewers: [{ id: "qa-lead", name: "QA-Lead", publicKey: "pk_…" }] }}
    adapter={adapter}
/>
```

adapter 인라인 객체로 목록 API가 매 렌더 재호출되지 않게 `useMemo`로 고정한다.

```tsx
const adapter = useMemo(() => createFivepixelsAdapter({ baseUrl, projectId: "my-app", getAccessToken }), [baseUrl, getAccessToken]);
<FivePixels
    sync="api"
    adapter={adapter}
    project={{ id: "my-app" }}
/>;
```

`feedback.update` 대신 `cases.update`로 persistence 최소 조건을 충족한다.

```tsx
const adapter: FivePixelsAdapter = {
    markers: { list: listMarkers },
    feedback: { create: createFeedback },
    cases: { update: updateCase },
};
<FivePixels
    sync="api"
    adapter={adapter}
/>;
```

피드백 생성·상태 변경을 슬랙/로그 파이프로 넘긴다.

```tsx
<FivePixels
    sync="api"
    adapter={adapter}
    onEvent={(event) => {
        if (event.type === "feedback:create") notifyOps(event);
    }}
/>
```

API 저장 + GitHub Issue 승격을 같은 스테이징에서 쓴다.

```tsx
<FivePixels
    sync="api"
    adapter={adapter}
    github={{ enabled: true, modes: ["on-create", "from-list"], onCreate: async (feedback) => createGhIssue(feedback) }}
/>
```

React Router 등 SPA에서 View 모드 크로스 페이지 이동을 API 모드와 함께 연결한다.

```tsx
<FivePixels
    sync="api"
    adapter={adapter}
    onNavigate={(pathname) => navigate(pathname)}
/>
```

Artemis 백엔드 + SSO 로그인으로 원격 저장한다.

```tsx
const adapter: FivePixelsAdapter = {
    auth: { artemisLogin: () => artemisSso() },
    markers: { list: listMarkers },
    feedback: { create: createFeedback, update: updateFeedback },
};
<FivePixels
    sync="artemis"
    require={{ authLogin: true }}
    adapter={adapter}
/>;
```

API flow 탭 트래픽 캡처를 끄고 민감 네트워크 로그를 줄인다.

```tsx
<FivePixels
    sync="api"
    adapter={adapter}
    networkMonitor={false}
/>
```

##### C. 모드 전환·하이브리드 주의

로컬로 익힌 뒤 같은 `project.id`로 API로 올린다(데이터는 자동 이전 아님 — JSON Export/Import 또는 재작성).

```tsx
// Before: <FivePixels project={{ id: "my-app" }} sync="local" />
<FivePixels
    project={{ id: "my-app", env: "stage" }}
    sync="api"
    adapter={adapter}
/>
```

`version` bump 시 local/API 모두 스코프가 갈라질 수 있어 팀에서 “유지 vs 초기화”를 합의한다.

```tsx
<FivePixels
    project={{ id: "my-app", env: "stage", version: "1.3.0" }}
    sync="api"
    adapter={adapter}
/>
```

#### 4.9.2 협업 Best Practice 예시 3

검수 많은 히어로만 먼저 태깅하고, 전원 local로 하루 써 본 뒤 규칙을 정한다.

```tsx
<>
    <FivePixels
        project={{ id: "my-app", env: "stage" }}
        sync="local"
        visibility={{ devOnly: true }}
    />
    <button data-report-id="home-hero-cta">시작하기</button>
</>
```

팀 공유가 필요해지는 시점에 동일 `project.id`로 API로 전환하고, adapter는 모듈에서 `useMemo`로만 주입한다.

```tsx
const adapter = useMemo(() => createFivepixelsAdapter({ baseUrl: "/api/v1/fivepixels", projectId: "my-app" }), []);
<FivePixels
    project={{ id: "my-app", env: "stage" }}
    sync="api"
    require={{ authLogin: false }}
    adapter={adapter}
    onNavigate={(p) => navigate(p)}
/>;
```

역할·상태 규칙을 코드에 고정한다: 리뷰어 키 + GitHub 승격 + 해결은 스테이징 재확인 후.

```tsx
<FivePixels
    project={{ id: "my-app", env: "stage" }}
    sync="api"
    adapter={adapter}
    require={{ authLogin: false, reviewerKey: true }}
    team={{
        reviewers: [
            { id: "qa", name: "QA", publicKey: "pk_…" },
            { id: "dev", name: "Dev", publicKey: "pk_…" },
        ],
    }}
    github={{ enabled: true, modes: ["from-list"], onCreate: createGhIssue }}
    onEvent={(e) => e.type === "feedback:update" && trackStatus(e)}
/>
```

### 4.10 `/docs/auth-and-team`

| 개념                  | 설명                                                                  |
| --------------------- | --------------------------------------------------------------------- |
| `require.authLogin`   | 원격 sync 시 회사 로그인 (기본 true). false면 표시 이름·개인키로 구분 |
| `require.reviewerKey` | reviewers 공개키와 개인키 매칭                                        |
| `team.reviewers`      | 리뷰어 명단 (공개키 포함 가능)                                        |
| `team.user`           | 비권장(레거시) — 문서에 deprecated 표기                               |
| 개인키                | ECDSA P-256, 설정 패널에서 생성·복사·교체                             |
| `adapter.auth`        | `login` / `signup` / `logout` / `refresh` / `artemisLogin`            |

### 4.11 `/docs/github`

```tsx
github={{
  enabled: true,
  modes: ["on-create", "from-list"],
  onCreate: async (feedback) => ({ issueNumber, issueUrl }),
}}
```

| 모드        | 동작                 |
| ----------- | -------------------- |
| `on-create` | 작성 직후 Issue 옵션 |
| `from-list` | 목록에서 전송        |

생성 후: 상태 `git_issued`, 시스템 스레드 + Issue 링크.  
이벤트: `feedback:github-issue-created`.

### 4.12 `/docs/panel-and-tabs`

패널 탭 (사용자 선택 가능, `panelTabRegistry` 기준):

| id                | 성격         | 설명 가이드 한 줄                                          |
| ----------------- | ------------ | ---------------------------------------------------------- |
| `route-details`   | 안정         | 현재 페이지 통계                                           |
| `feedback-list`   | 안정         | 피드백 목록 (스코프·필터·검색)                             |
| `memo-list`       | 안정         | 메모성 목록                                                |
| `diagnostics`     | 안정         | 진단                                                       |
| `api-flow`        | 안정         | 호스트 fetch/XHR 모니터 (`networkMonitor` prop, 기본 true) |
| `overview`        | experimental | 전체 개요                                                  |
| `my-tasks`        | experimental | 내 할 일                                                   |
| `page-brief`      | experimental | 페이지 브리프                                              |
| `needs-attention` | experimental | 주의 필요                                                  |
| `project-health`  | experimental | 프로젝트 헬스                                              |
| `today-digest`    | experimental | 오늘 다이제스트                                            |

전체 스코프 탭(`listAll` 필요): `overview`, `my-tasks`, `needs-attention`, `project-health`, `today-digest` — **탭이 활성화될 때** fetch.

기타 UI: 좌우 도킹, 리사이즈, 온보딩(역할·탭 선택), 프레젠테이션 모드(`mode="presentation"`), 알림 센터, 최소화 독.

### 4.13 `/docs/mentions-and-thread`

가이드에 넣을 기능:

- 다중 **케이스** (텍스트·담당자·`open`/`resolved`)
- 답변 상태: `suggested`, `additional_question`, `found_error`, `recheck_requested`, `resolved` 등
- 중첩 답변 (`parent_reply_id`), 질문 스레드 그룹
- **요소 멘션** / **유저 멘션** (작성기 `MentionComposerInput`)
- 작성자 타입: `user` / `manager` / `system`
- Git Issue 스레드 엔트리, Ask AI 관련 UI(제품에 있으면 “선택적/실험”으로 표기)

### 4.14 `/docs/mobile-preview` (선택 페이지)

제품 기능: 디바이스 프레임 프리뷰, QR로 모바일 URL 공유, 캡처 사이드 패널.  
가이드 톤: “반응형 검수·실기기 확인 보조” — E2E·디바이스 랩 대체 아님.

### 4.15 `/docs/custom-ui`

서브패스:

| import                        | 용도                     |
| ----------------------------- | ------------------------ |
| `@fivepixels-js/react`        | `FivePixels`, 타입, 유틸 |
| `@fivepixels-js/react/report` | Provider·훅·커스텀 조립  |
| `@fivepixels-js/react/demo`   | 데모 런타임              |

훅 파티션:

| 훅                       | 용도                                       |
| ------------------------ | ------------------------------------------ |
| `useReport()`            | 전체 (하위 호환)                           |
| `useReportPreferences()` | appearance, locale, role, messages         |
| `useReportSession()`     | mode, draft, markers, pickProbe, composers |
| `useReportData()`        | lists, filters, CRUD, stats, reply history |

### 4.16 `/docs/api` — Props 요약표

| Prop             | 타입 요지                                                            | 설명                                  |
| ---------------- | -------------------------------------------------------------------- | ------------------------------------- |
| `project`        | `{ id?, env?, version? }`                                            | 식별. `id` 기본 `"my-app"`            |
| `ui`             | appearance, locale, messages, showFeedbackList, visibleShortcutKeys… | UI                                    |
| `visibility`     | enabled, devOnly, routeKey                                           | 표시                                  |
| `team`           | reviewers, user?…                                                    | 팀                                    |
| `mode`           | `default` \| `presentation`                                          | 시연용                                |
| `sync`           | `local` \| `api` \| `artemis`                                        | 저장 전략                             |
| `require`        | authLogin?, reviewerKey?                                             | 신원 정책                             |
| `requireAuth`    | boolean                                                              | **Deprecated** → `require.authLogin`  |
| `adapter`        | `FivePixelsAdapter`                                                  | 원격 handler 묶음                     |
| `fields`         | `ReportField[]`                                                      | textarea / checkbox                   |
| `onNavigate`     | `(pathname) => void`                                                 | View 모드 경로 이동                   |
| `onEvent`        | event callback                                                       | create/update/delete/reply/github     |
| `onReply`        | side effect                                                          | 답변 후처리                           |
| `github`         | enabled, modes, onCreate                                             | Issue                                 |
| `networkMonitor` | boolean                                                              | API flow 탭용 트래픽 캡처 (기본 true) |

Adapter 도메인: `auth` · `session` · `markers` · `feedback` · `cases` · `replies` · `members`.

타입 위치:

- Props → `FivePixelsProps` (`src/shared/types/publicApi.ts`)
- Adapter → `FivePixelsAdapter` (`src/shared/types/adapter.ts`)
- 엔티티 → `ReportFeedback`, `ReportCase`, `ReportReply` 등 (`src/shared/types/report.ts`)

예제 어댑터 실물: `examples/basic/src/fivepixels/adapter.ts` (경로 확인 후 링크).

---

## 5. 기능 인벤토리 (가이드 목차·검색용)

### 5.1 엔트리 · 렌더링

- `<FivePixels />` 1회 마운트
- Shadow DOM UI (CSS import 불필요)
- `ReportProvider`로 커스텀 조립 가능

### 5.2 모드 · 단축키 (`REPORT_SHORTCUTS`)

| 동작                    | 단축키              |
| ----------------------- | ------------------- |
| Report 모드 토글        | `⌘⇧M` (Mod+Shift+M) |
| View 모드 토글          | `⌘⇧L`               |
| 선택 가능 요소 미리보기 | `⌘⇧E`               |
| 목록 검색 포커스        | `⌘⇧S`               |
| 제출                    | `⌘Enter`            |
| 취소                    | `Escape`            |

가이드에 Windows는 `Ctrl`로 병기.

### 5.3 피드백 작성·관리

- 다중 케이스, 케이스 담당자, 케이스 상태
- 카테고리 선택 (`category`)
- 커스텀 필드 (`fields`)
- 마커 좌표 + viewport + scroll + anchor
- 드래프트 마커
- 상태: open / git_issued / resolved / archived
- 삭제(확인), 복사, 위치로 스크롤·펄스
- 숨김 대상 복원 (`data-fp-view`, `data-fp-open`)

### 5.4 답변 · 스레드 · 멘션

- 답변 상태·케이스 연결·중첩 스레드
- 요소/유저 멘션
- 검수 브랜치 액션 (제안 확인, 재확인 요청 등)
- 알림 센터 (멘션 등 그룹핑)

### 5.5 UI Edit (Pick Probe)

§4.8 전체.

### 5.6 패널 · 설정

- 탭·역할·도킹·리사이즈·온보딩
- 테마 light/dark/system, 로케일 ko/en, messages 오버라이드
- API 연동 상태 UI (handler 연결·기능 잠금)
- JSON 드래그 앤 드롭 가져오기
- 자동 새로고침 컨트롤
- 통합 잠금 (`IntegrationLock`) 등

### 5.7 목록 · 통계

- 현재 페이지 / 전체 페이지 스코프
- 상태·유형 필터, 검색, 페이지네이션
- 호버 카드
- 경로별·필드별 통계
- activity summary (adapter.session)

### 5.8 저장 · 이벤트

- localStorage / api / artemis
- `onEvent`, `onReply`
- `createLocalStorageReportAdapter` 공개 API

### 5.9 Import / Export / Command

- JSON 다운로드·업로드·드래그
- 프로젝트 불일치 확인, ID 충돌 교체 확인
- `validateFeedbackImport`

### 5.10 GitHub · 팀 · 키

§4.10–4.11.

### 5.11 모바일 · 프리뷰 · 시연

- Mobile/Device preview, QR, capture
- `mode="presentation"` 데모/시연 뷰어

### 5.12 품질 · DX

- TypeScript 타입 전부
- Vitest 단위 테스트
- `npm run lint` = architecture + utils + typecheck + test
- 예제: `npm run dev` → `examples/basic`
- Node 22 권장 (CI), engines >=18

---

## 6. 전체 사용자 흐름 (다이어그램용)

```
[1. 대상 지정]     data-report-id (± type, fp-view/open)
        ↓
[2. 피드백 작성]   Report ⌘⇧M → 클릭 → (선택 UI Edit) → 제출
        ↓
[3. 마커 표시]     좌표·anchor 저장 (local 또는 API)
        ↓
[4. 조회·검수]     View ⌘⇧L → 목록/마커 → 답변·멘션·상태
        ↓
[5. 상태 변경]     open → git_issued → resolved → archived
        ↓
[6. (선택) GitHub / 외부 onEvent]
```

---

## 7. FAQ (홈·가이드 공통)

| Q                          | A                                                                          |
| -------------------------- | -------------------------------------------------------------------------- |
| 코드에 자동 반영되나요?    | 아니요. 검수·소통용. UI Edit도 세션·새로고침 시 원복.                      |
| 클라이언트도 쓸 수 있나요? | 스테이징 URL + `/guides/client` 안내문.                                    |
| 개발자 없이 가능한가요?    | 최초 붙이기 약 0.5일. 이후 비개발자 중심.                                  |
| CSS가 깨지나요?            | Shadow DOM으로 호스트와 분리.                                              |
| SPA에서 되나요?            | pathname 스코프 + `onNavigate` + 숨김 UI용 `data-fp-*` 속성.               |
| 팀과 데이터 공유는?        | localStorage는 브라우저 로컬. API adapter 또는 JSON 수동 이전.             |
| 프로덕션에 붙이나요?       | 가능. 보통 `devOnly` 또는 `enabled: false`로 스테이징만.                   |
| SaaS 대신 왜 라이브러리?   | 스테이징 임베드, 데이터는 local 또는 **내 API**, 구독·시트 제한 없음(MIT). |

---

## 8. 엣지케이스 (가이드 `/docs/edge-cases` 요약)

상세는 `docs/analyze.md`. 가이드에 최소 포함:

| 주제               | 요지                                                           |
| ------------------ | -------------------------------------------------------------- |
| id 누락            | 클릭 선택 실패 → 컴포넌트 루트에 id                            |
| 중복 id            | 첫 매칭만 → 리스트는 고유 id                                   |
| group vs item      | 리팩터 시 type 변경으로 복원 실패                              |
| 중첩 id            | 가장 가까운 item 우선                                          |
| 모달/오버레이      | `data-fp-view`와 `data-fp-open`을 같은 키로 연결               |
| SPA 라우팅         | `onNavigate`, pathname 스코프                                  |
| prod 빌드 스테이징 | `devOnly:true`면 `NODE_ENV=production`에서 안 보임 → 의도 확인 |
| adapter 인라인     | useMemo로 고정                                                 |
| version bump       | 데이터 스코프 분리 합의                                        |

도입 전 체크리스트:

- [ ] 저장 방식 (local vs api)
- [ ] `project.id` / `env` / `version` 정책
- [ ] QA 대상 `data-report-id` 전수(또는 1페이지부터)
- [ ] 모달·탭 복원 전략
- [ ] `onNavigate` (크로스 페이지)
- [ ] visibility / prod 노출 정책

---

## 9. 톤 · 카피 규칙

| ✅                                    | ❌                         |
| ------------------------------------- | -------------------------- |
| 스테이징, 검수, 가볍게, 오늘부터      | 엔터프라이즈, 올인원, 혁신 |
| 화면 위 코멘트                        | 타사 제품명                |
| 점진 도입, `devOnly`, 반나절, 1페이지 | “쉽다”만 반복              |
| 사실·수치                             | DX 극대화, 워크플로우 혁신 |

히어로에 Shadow DOM·localStorage 용어 **나열 금지** → 개발자 섹션에서 풀기.

---

## 10. 시각·미디어 권장

가이드에 넣을 스크린/GIF 우선순위:

1. Report 모드 클릭 → 마커
2. View 모드 목록·스레드
3. UI Edit Before/After
4. 패널 탭·역할 온보딩
5. GitHub Issue 승격
6. (선택) 모바일 QR 프리뷰

데모: `examples/basic` (`npm run dev`) — Pulse 대시보드형 데모 앱.

배너 에셋: `assets/fivepixels-banner.png`

---

## 11. `data-report-id` 일괄 태깅 (개발자 가이드 부록)

`docs/fivepixels-report-id-prompt.md`를 `/guides/dom-tagging` 또는 `/docs/dom-attributes` 부록으로 링크·요약.

핵심 MUST:

- 레이아웃/로직 변경 없이 속성만 추가
- 새 래퍼 div 남발 금지
- `data-report-type` 자동 삽입하지 않기 (정책에 따라)
- MUST 태깅: 헤더/푸터/네비, 주요 section, button/a/input, 리스트 아이템(안정 id)

---

## 12. Adapter 계약 요약 (문서 작성자용)

원격 `sync="api"|"artemis"` persistence 최소:

1. `markers.list({ pathname })` → `ReportFeedback[]`
2. `feedback.create(payload)` → `ReportFeedback` (서버 id 포함)
3. `feedback.update` **또는** `cases.update`

인증 (`require.authLogin` 기본 true):

- api → `auth.login` 필수
- artemis → `auth.artemisLogin` 필수
- `authLogin: false` → 개인키 온보딩, auth handler 미사용

선택 확장: `feedback.getForUi`, `replies.*`, `members.*`, `session.panelBootstrap`, `session.activitySummary`, assignee/status 전용 PUT 등.

경로 컨벤션 예시: `/api/v1/fivepixels/projects/{projectId}/...` (호스트가 base URL 공급).

설정 패널 **API 연동** 탭에서 handler 연결·기능 잠금 확인 가능 — 가이드에 스크린샷 권장.

---

## 13. 이벤트 타입 (고급 문서)

| type                            | 시점       |
| ------------------------------- | ---------- |
| `feedback:create`               | 생성       |
| `feedback:update`               | 수정·상태  |
| `feedback:delete`               | 삭제       |
| `feedback:reply`                | 답변       |
| `feedback:github-issue-created` | Issue 생성 |

---

## 14. 레거시 주의 (문서 작성 시)

구버전 문서/`features-for-user.md`에 남아 있을 수 있는 **구 API**:

- `onList` / `onCreate` / `onUpdate` 최상위 props → **현재는 `adapter`로 이전**
- `requireAuth` → `require.authLogin`
- `team.requireReviewerKey` → `require.reviewerKey`
- `functions_describe.md`의 버전 번호(v0.1.7)는 구식

**가이드·코드 샘플은 README + `publicApi.ts` + `adapter.ts`를 진실의 원천으로 할 것.**

---

## 15. 페이지 작성 템플릿 (AI용)

각 `/guides/*` 또는 `/docs/*` 페이지를 쓸 때:

```markdown
# {제목}

> 한 줄 요약 (독자 + 결과)

## 이 페이지에서 얻을 것

- …

## 전제

- React 18+, 스테이징 URL, …

## 단계 / 본문

…

## 코드 (필요 시)

…

## 성공 기준

- …

## 다음에 볼 문서

- …

## 관련 FAQ

- …
```

---

## 16. 완료 정의 (Definition of Done)

가이드 사이트/문서 세트가 “완료”로 보려면:

1. `/guides/quickstart` 이중 탭 완성
2. `/docs/setup` + `/docs/dom-attributes` + `/docs/ui-edit` + `/docs/persistence` 완성
3. FAQ에 자동 반영 아님·Shadow DOM·팀 공유·devOnly 포함
4. 최신 Adapter 샘플만 사용 (레거시 onList 없음)
5. 엣지케이스 페이지 또는 quickstart 경고 박스에 모달/SPA/중복 id
6. `/guides/client` 복사 가능한 안내문
7. 네비에 도입 가이드가 1급
8. 데모 링크 동작 (`/demo` 또는 GitHub examples)

---

## 17. 빠른 복붙 — 최소 설치 블록

```bash
npm install @fivepixels-js/react react react-dom
```

```tsx
import { FivePixels } from "@fivepixels-js/react";

export default function App() {
    return (
        <>
            <FivePixels
                project={{ id: "my-app" }}
                visibility={{ devOnly: true }}
            />
            <main>
                <section
                    data-report-id="hero"
                    data-report-type="group"
                >
                    <button data-report-id="hero-cta">시작하기</button>
                </section>
            </main>
        </>
    );
}
```

요구 사항: React 18+. 브라우저 런타임. 레포 빌드·테스트 시 Node.js 22 권장.

라이선스: MIT © Sangjun Kim.

---

_이 브리프는 fivepixels 레포의 README·memo·기능 문서·타입 정의를 종합한 것입니다. 구현 세부가 충돌하면 코드(`src/shared/types/_`)와 README를 우선하세요.\*
