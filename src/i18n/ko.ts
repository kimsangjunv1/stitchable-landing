import type { LandingMessages } from "./types";
import { exampleKo } from "./example/ko";
import { fivepixelsKo } from "./fivepixels/ko";
import { backendApiGuideKo } from "./guide/backend-api/ko";
import { guideKo } from "./guide/ko";
import { homeKo } from "./home/ko";
import { layoutKo } from "./layout/ko";

export const ko: LandingMessages = {
    layout: layoutKo,
    home: homeKo,
    fivepixels: fivepixelsKo,
    example: exampleKo,
    guide: guideKo,
    backendApiGuide: backendApiGuideKo,
};
