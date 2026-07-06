import type { GuideMessages } from "./guide/types";
import type { LandingContentMessages } from "./landing/types";

export type Locale = "en" | "ko";

export type LandingMessages = LandingContentMessages & {
    guide: GuideMessages;
    backendApiGuide: GuideMessages;
};
