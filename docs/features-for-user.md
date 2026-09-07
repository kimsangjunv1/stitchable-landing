# fivepixels 기능 가이드

> 스테이징·QA·내부 도구 화면에서 **DOM 요소 단위 피드백**을 남기고, 팀과 검수한 뒤 필요하면 GitHub Issue로 승격하는 React 라이브러리입니다.

이 문서는 처음 fivepixels를 접하는 분이 **무엇을 할 수 있는지** 빠르게 이해할 수 있도록 정리했습니다. 설치·API 상세는 [README](../README.md)와 [온라인 가이드](https://library.codi-agit.com/fivepixels/guide)를 참고하세요.

---

## 목차

1. [한 줄 요약](#한-줄-요약)
2. [누가, 언제 쓰나요?](#누가-언제-쓰나요)
3. [빠른 시작](#빠른-시작)
4. [전체 흐름](#전체-흐름)
5. [핵심 기능](#핵심-기능)
6. [제어 패널](#제어-패널)
7. [저장 방식](#저장-방식)
8. [GitHub Issue 연동](#github-issue-연동)
9. [팀·인증](#팀인증)
10. [데이터 이전](#데이터-이전)
11. [UI 커스터마이징](#ui-커스터마이징)
12. [주요 설정 한눈에 보기](#주요-설정-한눈에-보기)
13. [고급 확장](#고급-확장)
14. [관련 링크](#관련-링크)

---

## 한 줄 요약

웹 페이지의 특정 버튼·섹션을 **클릭해서 마커를 찍고**, 그 위치에 **피드백을 남기고**, 팀원이 **답변·검수**한 뒤 **GitHub Issue로 넘길 수 있는** 도구입니다. UI는 Shadow DOM에 그려지므로 **별도 CSS import가 필요 없습니다.**

---

## 누가, 언제 쓰나요?

| 역할 | 활용 예 |
|------|---------|
| **QA / 테스터** | 스테이징 화면에서 버그·오타 위치를 정확히 표시 |
| **디자이너 / PM** | 시안 대비 UI 차이를 요소 단위로 코멘트 |
| **개발자** | 내부 관리 도구·프로토타입에 피드백 레이어를 빠르게 붙임 |
| **팀 리드** | 피드백 상태(진행중·해결됨)를 한 화면에서 추적 |

주로 **배포 전 검수**, **내부 데모**, **스테이징 환경**에서 사용합니다.

---

## 빠른 시작

### 설치

```bash
npm install @fivepixels-js/react react react-dom
```

### 최소 설정

피드백 대상 요소에 `data-report-id`를 붙이고, 앱 어디에든 `<FivePixels />`를 한 번 렌더링합니다.

```tsx
import { FivePixels } from "@fivepixels-js/react";

export default function App() {
    return (
        <>
            <FivePixels project={{ id: "my-app" }} />

            <main>
                <section data-report-id="hero" data-report-type="group">
                    <h1>환영합니다</h1>
                    <button data-report-id="hero-cta">시작하기</button>
                </section>
            </main>
        </>
    );
}
```

handler를 넘기지 않으면 피드백은 **브라우저 localStorage**에 저장됩니다.

---

## 전체 흐름

```
[1. 대상 지정]          data-report-id를 DOM 요소에 붙임
        ↓
[2. 피드백 작성]        패널에서 Report 모드 선택 → 요소 클릭 → 메시지 작성
        ↓
[3. 마커 표시]          화면에 점(마커)이 남고, 위치가 저장됨
        ↓
[4. 조회·검수]          패널에서 View 모드 선택 → 목록·마커 클릭 → 답변·확인/반려
        ↓
[5. 상태 변경]          open → git_issued → resolved → archived
        ↓
[6. (선택) GitHub]      피드백을 GitHub Issue로 승격
```

---

## 핵심 기능

### 1. DOM 마커 & 대상 지정

피드백은 **특정 DOM 요소**에 연결됩니다. 요소가 바뀌어도 `data-report-id`가 같으면 마커 위치를 복원할 수 있습니다.

| DOM 속성 | 필수 | 설명 |
|----------|------|------|
| `data-report-id` | ✅ | 요소 식별자. 마커 위치 복원에 사용 |
| `data-report-type` | | `item`(기본, 개별 요소) 또는 `group`(섹션 단위) |

- **item** — 버튼, 입력창 등 개별 UI 요소
- **group** — 섹션·카드 등 묶음 단위 (마커 색상이 다름)

피드백을 클릭하면 해당 요소로 **자동 스크롤**되며, 잠시 하이라이트(펄스) 효과가 표시됩니다. 요소가 DOM에서 사라진 경우에는 저장된 스크롤 위치로 이동합니다.

### 2. Report / View 모드

두 가지 모드로 전환하며 작업합니다.

| 모드 | 패널에서 선택 | 하는 일 |
|------|---------------|---------|
| **Report** (피드백 추가) | 피드백 추가 | 화면 요소를 클릭해 새 피드백 작성 |
| **View** (피드백 보기) | 피드백 보기 | 기존 마커·목록 조회, 답변·검수 |

### 3. 피드백 작성

Report 모드에서 대상을 클릭하면 작성 폼이 열립니다.

- **메시지** — 기본 텍스트 필드 (필수)
- **커스텀 필드** — `textarea`, `checkbox` 타입 지원
  - 예: "버그 여부", "중요도" 체크박스
- **작성자** — 팀 설정 시 작성자 이름 선택 가능

제출하면 해당 위치에 **마커(점)** 가 표시되고, 클릭 시 말풍선 형태로 내용을 볼 수 있습니다.

### 4. 피드백 상태

각 피드백은 아래 상태를 거칩니다.

| 상태 | 의미 |
|------|------|
| `open` | 새로 등록됨, 검수 대기 |
| `git_issued` | GitHub Issue로 전송됨 |
| `resolved` | 해결 완료 |
| `archived` | 보관(비활성) |

상태 전환은 패널·스레드 UI에서 수행하거나, API handler를 통해 백엔드에서 관리할 수 있습니다.

### 5. 답변·검수 스레드

View 모드에서 피드백을 열면 **타임라인 형태의 답변 스레드**가 표시됩니다.

리뷰어는 다음 작업을 할 수 있습니다.

- **확인(Resolved)** — 제안된 수정이 맞다고 승인
- **반려(Deny)** — 문제가 남아 있음을 알림
- **재확인 요청(Recheck)** — 다시 확인해 달라고 요청
- **추가 질문** — 작성자에게 질문
- **체크아웃(Checkout)** — 수정 제안을 수락하고 작업 시작

답변마다 상태 배지가 붙어 **현재 어디까지 진행됐는지** 한눈에 파악할 수 있습니다.

### 6. Shadow DOM UI

fivepixels의 패널·마커·오버레이는 **Shadow Root** 안에 렌더링됩니다.

- 호스트 앱의 CSS와 **충돌하지 않음**
- 별도 스타일시트 import **불필요**
- 화면 최상단 레이어에 고정 표시

---

## 제어 패널

화면에 떠 있는 **제어 패널**에서 대부분의 작업을 할 수 있습니다. 패널은 드래그로 위치를 바꾸고, 크기를 조절할 수 있습니다.

### 탭 구성

| 탭 | 내용 |
|----|------|
| **페이지 상세** | 현재 경로의 피드백 통계 (전체·오늘, 상태별·필드별 집계) |
| **피드백 목록** | 검색·필터·페이지네이션으로 피드백 탐색 |
| **설정** | 테마, 언어, 데이터보내기/가져오기, 개인키 관리 |

### 피드백 목록 기능

- **범위** — 현재 페이지만 / 전체 페이지 (`onListAll` 연동 시)
- **필터** — 상태(open, git_issued, resolved 등), 타입(item/group)
- **검색** — 메시지 또는 report id로 검색
- **삭제** — 두 번 클릭으로 안전 삭제
- **복사** — 피드백 JSON을 클립보드에 복사
- **GitHub** — 목록에서 바로 Issue 생성 (연동 설정 시)

목록 항목을 클릭하면 해당 피드백 위치로 이동하고 스레드를 엽니다. SPA에서 다른 경로에 있는 피드백은 `onNavigate`로 페이지 이동 후 위치를 복원합니다.

---

## 저장 방식

### 기본: localStorage

`onList`, `onCreate`, `onUpdate`를 **모두 생략**하면 브라우저 localStorage에 저장됩니다.

- 별도 백엔드 없이 **바로 사용 가능**
- 프로젝트 id·환경·버전별로 저장 키가 분리됨
- 데이터보내기/가져오기·Command 기능 사용 가능

### 커스텀 API

백엔드와 연동할 때는 handler를 **함께** 넘깁니다.

```tsx
<FivePixels
    project={{ id: "my-app", env: "stage" }}
    onList={({ pathname }) => fetch(`/api/feedbacks?pathname=${pathname}`).then((r) => r.json())}
    onCreate={(payload) =>
        fetch("/api/feedbacks", { method: "POST", body: JSON.stringify(payload) }).then((r) => r.json())
    }
    onUpdate={(id, payload) =>
        fetch(`/api/feedbacks/${id}`, { method: "PATCH", body: JSON.stringify(payload) }).then((r) => r.json())
    }
    onDelete={(id) => fetch(`/api/feedbacks/${id}`, { method: "DELETE" })}
    onListAll={({ cursor, limit }) =>
        fetch(`/api/feedbacks/all?cursor=${cursor ?? ""}&limit=${limit}`).then((r) => r.json())
    }
/>
```

| Handler | 역할 |
|---------|------|
| `onList` | 현재 pathname의 피드백 목록 |
| `onCreate` | 새 피드백 생성 |
| `onUpdate` | 수정·답변·상태·GitHub 정보 반영 |
| `onDelete` | (선택) 피드백 삭제 |
| `onListAll` | (선택) 전체 페이지 목록 + 페이지네이션 |

> `onList`, `onCreate`, `onUpdate`는 **세 개 모두 넘기거나 모두 생략**해야 합니다.

---

## GitHub Issue 연동

피드백을 **GitHub Issue로 승격**할 수 있습니다. `github.onCreate`에 Issue 생성 API를 연결합니다.

```tsx
<FivePixels
    github={{
        enabled: true,
        modes: ["on-create", "from-list"],
        onCreate: async (feedback) => {
            const res = await fetch("/api/github/issues", {
                method: "POST",
                body: JSON.stringify({ feedback }),
            });
            return res.json(); // { issueNumber, issueUrl }
        },
    }}
/>
```

| 모드 | 동작 |
|------|------|
| `on-create` | 피드백 작성 직후 Issue 생성 옵션 제공 |
| `from-list` | 피드백 목록에서 Issue로 전송 |

Issue가 생성되면 피드백 상태가 `git_issued`로 바뀌고, 스레드에 시스템 메시지와 Issue 링크가 추가됩니다.

이벤트 hook:

```tsx
onEvent={(event) => {
    if (event.type === "feedback:github-issue-created") {
        console.log(event.payload.issueUrl);
    }
}}
```

---

## 팀·인증

### 작성자·리뷰어

```tsx
<FivePixels
    team={{
        user: { id: "user-1", name: "김테스터" },
        reviewers: [
            { id: "rev-1", name: "이리뷰어" },
            { id: "rev-2", name: "박매니저", publicKey: "stpub1..." },
        ],
        requireReviewerKey: true,
    }}
/>
```

- **user** — 기본 작성자 정보
- **reviewers** — 검수 가능한 팀원 목록
- **requireReviewerKey** — 리뷰어 개인키 없이는 검수 불가

### 개인키(ECDSA) 서명

리뷰어에게 `publicKey`를 등록하고, 본인 브라우저에 **개인키**를 보관하면 피드백 생성·수정 시 **서명**이 첨부됩니다. 위변조 방지와 작성자 확인에 활용할 수 있습니다.

설정 탭에서 개인키를 복사·삽입·교체할 수 있습니다.

---

## 데이터 이전

localStorage 모드에서만 사용 가능합니다.

| 기능 | 설명 |
|------|------|
| **보내기** | 전체 피드백을 JSON 파일로 다운로드 |
| **가져오기** | JSON 파일 선택 또는 패널에 **드래그앤드롭** |
| **Command** | JSON 배열을 붙여넣어 일괄 삽입·교체 |

가져오기 시 프로젝트 id가 다르면 **경고 후 진행 여부**를 확인합니다. ID가 겹치는 항목은 **교체 확인** 다이얼로그가 표시됩니다.

---

## UI 커스터마이징

### 테마

```tsx
ui={{ appearance: "system" }} // "light" | "dark" | "system"
```

패널 설정에서도 런타임에 변경할 수 있습니다.

### 언어

```tsx
ui={{ locale: "ko" }} // "ko" | "en"
```

브라우저 언어가 한국어면 기본값은 `ko`입니다. `messages`로 문구를 부분 덮어쓸 수 있습니다.

### 표시 조건

```tsx
visibility={{
    enabled: true,      // 전체 on/off
    devOnly: true,      // 개발 환경에서만 표시
    routeKey: "/path",  // 특정 경로 기준 (SPA pathname)
}}
```

### 기타 UI 옵션

| 옵션 | 설명 |
|------|------|
| `showFeedbackList` | 피드백 목록 탭 표시 여부 (기본 true) |

### 커스텀 필드

```tsx
fields={[
    { key: "message", type: "textarea", label: "내용", required: true },
    { key: "isBug", type: "checkbox", label: "버그" },
    { key: "isImportant", type: "checkbox", label: "중요" },
]}
```

---

## 주요 설정 한눈에 보기

### `<FivePixels />` Props

| Prop | 설명 |
|------|------|
| `project` | `{ id?, env?, version? }` — 프로젝트·환경·앱 버전 식별 |
| `ui` | 테마, 언어, 목록 표시, 메시지 오버라이드 |
| `visibility` | 표시 여부, devOnly, routeKey |
| `team` | 작성자, 리뷰어, 개인키 필수 여부 |
| `fields` | 커스텀 입력 필드 배열 |
| `onList` / `onCreate` / `onUpdate` | 저장 handler (함께 사용) |
| `onDelete` | 삭제 handler |
| `onListAll` | 전체 페이지 목록 + cursor 페이지네이션 |
| `onNavigate` | View 모드에서 다른 경로 피드백 클릭 시 이동 |
| `onEvent` | create / update / delete / reply / github 이벤트 |
| `onReply` | 답변 작성 시 side effect |
| `github` | GitHub Issue 연동 설정 |

### 패키지 export

| import 경로 | 내용 |
|-------------|------|
| `@fivepixels-js/react` | `FivePixels`, 타입, storage adapter, GitHub 유틸, i18n |
| `@fivepixels-js/react/report` | report 컴포넌트·타입만 (동일 내용의 서브패스) |

---

## 고급 확장

### ReportProvider & useReport

`<FivePixels />` 내부에서 쓰는 상태를 앱 다른 곳에서도 쓰려면:

```tsx
import { ReportProvider, useReport } from "@fivepixels-js/react";

function CustomBadge() {
    const { reports, mode } = useReport();
    return <span>{reports.length}건</span>;
}
```

### Storage Adapter

localStorage 대신 직접 adapter를 만들 수 있습니다.

```tsx
import { createLocalStorageReportAdapter } from "@fivepixels-js/react";

const adapter = createLocalStorageReportAdapter({
    projectId: "my-app",
    environment: "stage",
});
```

`ReportStorageAdapter` 인터페이스: `list`, `create`, `update`, `remove?`, `listAll?`

### motion 유틸

라이브러리는 경량 `motion`, `AnimatedPresence` 컴포넌트도 export합니다. 호스트 앱의 애니메이션에 재사용할 수 있습니다.

```tsx
import { motion, AnimatedPresence } from "@fivepixels-js/react";
```

### 이벤트 종류

`onEvent`로 받을 수 있는 이벤트:

| type | 시점 |
|------|------|
| `feedback:create` | 피드백 생성 |
| `feedback:update` | 수정·상태 변경 |
| `feedback:delete` | 삭제 |
| `feedback:reply` | 답변 추가 |
| `feedback:github-issue-created` | GitHub Issue 생성 완료 |

---

## 관련 링크

| 자료 | URL |
|------|-----|
| npm 패키지 | https://www.npmjs.com/package/@fivepixels-js/react |
| 온라인 가이드 | https://library.codi-agit.com/fivepixels/guide |
| GitHub 저장소 | https://github.com/kimsangjunv1/fivepixels |
| 이슈 제보 | https://github.com/kimsangjunv1/fivepixels/issues |
| 예제 앱 | 저장소 `examples/basic` (`npm run dev`) |

---

## 자주 묻는 질문

**Q. 프로덕션에도 붙일 수 있나요?**  
가능합니다. `visibility.devOnly: true`로 개발·스테이징에서만 켜거나, `enabled: false`로 완전히 끌 수 있습니다.

**Q. CSS가 깨지지 않나요?**  
UI는 Shadow DOM에 렌더링되어 호스트 스타일과 분리됩니다.

**Q. React Router 같은 SPA에서 잘 동작하나요?**  
pathname 기준으로 피드백을 나누며, `onNavigate`로 라우팅을 연결하면 됩니다.

**Q. 데이터를 팀과 공유하려면?**  
localStorage는 브라우저 로컬 전용입니다. 팀 공유는 `onList`/`onCreate`/`onUpdate`로 백엔드 API를 연결하거나, JSON보내기/가져오기로 수동 이전할 수 있습니다.
