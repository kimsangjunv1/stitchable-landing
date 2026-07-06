import type { LandingMessages } from "./types";
import { exampleEn } from "./example/en";
import { fivepixelsEn } from "./fivepixels/en";
import { backendApiGuideEn } from "./guide/backend-api/en";
import { guideEn } from "./guide/en";
import { homeEn } from "./home/en";
import { layoutEn } from "./layout/en";

export const en: LandingMessages = {
    layout: layoutEn,
    home: homeEn,
    fivepixels: fivepixelsEn,
    example: exampleEn,
    guide: guideEn,
    backendApiGuide: backendApiGuideEn,
};
