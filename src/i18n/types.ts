import type { GuideMessages } from "./guide/types"

export type Locale = "en" | "ko"

export type LandingMessages = {
  guide: GuideMessages
  localeOption: {
    en: string
    ko: string
  }
  panel: {
    stopFeedback: string
    addFeedback: string
    statsFound: string
    statsGroup: string
    statsItem: string
    tabPageDetails: string
    tabFeedbackList: string
  }
  author: {
    placeholder: string
    creatorLabel: string
  }
  composer: {
    placeholder: string
    sendAriaLabel: string
  }
  thread: {
    resolved: string
    select: string
  }
  status: {
    feedback: {
      currently_wait: string
      suggested: string
      resolved: string
    }
  }
  statusText: {
    selectedItem: string
  }
  resolution: {
    issueResolvedMessage: string
  }
  landing: {
    header: {
      beta: string
      navFeatures: string
      navHowItWorks: string
      navDocs: string
      navPricing: string
      github: string
      getStarted: string
    }
    hero: {
      eyebrow: string
      title: string
      description: string
      getStarted: string
      installCmd: string
      codeCopy: string
      codeCopied: string
      badges: string[]
    }
    preview: {
      title: string
      subtitle: string
      exportReport: string
      progress: string[]
      feedbackMessage: string
      replyMessage: string
      designer: string
      developer: string
      envLabel: string
    }
    workflow: {
      steps: { label: string; desc: string }[]
    }
    features: {
      eyebrow: string
      title: string
      subtitle: string
      items: { title: string; desc: string }[]
    }
    pricing: {
      eyebrow: string
      title: string
      description: string
      freeTitle: string
      freeSubtitle: string
      freePrice: string
      freePriceSuffix: string
      freeCta: string
      proTitle: string
      proSubtitle: string
      proBadge: string
      proPrice: string
      proCta: string
      freeFeatures: string[]
      proFeatures: string[]
    }
    footer: {
      tagline: string
      docs: string
      features: string
      github: string
    }
  }
}
