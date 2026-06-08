"use client";

import { useMessages } from "@/app/providers/LocaleProvider";
import {
  CodeVisual,
  DualCodeVisual,
  FeatureRow,
} from "./features/feature-shared";
import { FeatureBentoGrid } from "./features/FeatureBentoGrid";
import { AdoptionPath } from "./AdoptionPath";
import { CapabilitiesStrip } from "./CapabilitiesStrip";

const CORE_TAB_IDS = [
  "install",
  "feedback",
  "restore",
  "github",
  "export",
] as const;
const GLOW_VARIANTS = ["teal", "purple", "cyan"] as const;

export function FeatureSections() {
  const messages = useMessages().landing;
  const { gettingStarted, showcase, hero } = messages;
  const learnMore = hero.readDocs;

  const coreTabs = showcase.tabs.filter((tab) =>
    CORE_TAB_IDS.includes(tab.id as (typeof CORE_TAB_IDS)[number]),
  );

  return (
    <div id="features">
      <FeatureRow
        id="quickstart"
        eyebrow={gettingStarted.eyebrow}
        title={gettingStarted.title}
        description={gettingStarted.description}
        learnMoreHref="/guide"
        learnMoreLabel={learnMore}
        reportId="quickstart"
      >
        <DualCodeVisual
          npmCmd={gettingStarted.npmCmd}
          yarnCmd={gettingStarted.yarnCmd}
          npmLabel={gettingStarted.npmLabel}
          yarnLabel={gettingStarted.yarnLabel}
          copyLabel={hero.codeCopy}
          copiedLabel={hero.codeCopied}
        />
      </FeatureRow>

      <AdoptionPath />

      {coreTabs.map((tab, index) => (
        <FeatureRow
          key={tab.id}
          id={`feature-${tab.id}`}
          eyebrow={tab.label}
          title={tab.title}
          description={tab.description}
          bullets={tab.bullets}
          learnMoreHref="/guide"
          learnMoreLabel={learnMore}
          reverse={index % 2 === 1}
          reportId={`feature-${tab.id}`}
        >
          <CodeVisual
            lines={tab.output}
            copyText={tab.output.join("\n")}
            copyLabel={hero.codeCopy}
            copiedLabel={hero.codeCopied}
            glowVariant={GLOW_VARIANTS[index % GLOW_VARIANTS.length]}
          />
        </FeatureRow>
      ))}

      <FeatureBentoGrid />
      <CapabilitiesStrip />
    </div>
  );
}
