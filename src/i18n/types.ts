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
      titleLine1: string
      titleLine2: string
      description: string
      license: string
      getStarted: string
      readDocs: string
      copyPrompt: string
      codeCopy: string
      codeCopied: string
      copyPromptText: string
    }
    terminal: {
      lines: string[]
    }
    gettingStarted: {
      eyebrow: string
      title: string
      description: string
      ciNote: string
      ciLink: string
      npmLabel: string
      npmCmd: string
      yarnLabel: string
      yarnCmd: string
    }
    capabilities: {
      items: {
        title: string
        description: string
        tags: string[]
      }[]
    }
    trust: {
      title: string
      description: string
      stats: { value: string; label: string }[]
      performance: {
        title: string
        description: string
      }
    }
    libraryGoodPoints: {
      title: string
      mainStat: { label: string; value: string }
      chart: {
        label: string
        axisStart: string
        axisEnd: string
      }
      stats: { value: string; label: string }[]
    }
    adoptionPath: {
      eyebrow: string
      title: string
      description: string
      steps: { label: string; description: string }[]
    }
    devOnlyCallout: {
      title: string
      description: string
      codeLine: string
    }
    techTrust: {
      eyebrow: string
      title: string
      description: string
      panels: {
        title: string
        description: string
        codeLines: string[]
      }[]
      stats: { value: string; label: string }[]
    }
    qualityAssurance: {
      eyebrow: string
      title: string
      description: string
      items: { title: string; description: string }[]
    }
    saasComparison: {
      eyebrow: string
      title: string
      description: string
      positioning: {
        headers: string[]
        rows: string[][]
      }
      advantages: {
        title: string
        items: { title: string; description: string }[]
      }
      honestLimits: {
        title: string
        headers: string[]
        rows: string[][]
      }
      selectionGuide: {
        saasTitle: string
        saasDescription: string
        saasTools: string
        stitchableTitle: string
        stitchableDescription: string
        cta: string
      }
      tools: {
        name: string
        competitorStrength: string
        stitchableWins: string[]
      }[]
    }
    benefits: {
      shipping: {
        title: string
        items: string[]
      }
      security: {
        title: string
        description: string
        items: string[]
      }
    }
    showcase: {
      title: string
      subtitle: string
      tabs: {
        id: string
        label: string
        title: string
        description: string
        bullets: string[]
        poweredBy: string
        output: string[]
      }[]
    }
    bento: {
      eyebrow: string
      title: string
      description: string
      modes: {
        id: string
        label: string
        shortcut: string
        description: string
      }[]
      shortcuts: {
        action: string
        mac: string
        win: string
      }[]
      config: {
        title: string
        description: string
        tags: string[]
      }[]
    }
    architecture: {
      eyebrow: string
      title: string
      description: string
      bullets: string[]
      diagram: {
        host: string
        root: string
        shadow: string
        ui: string
      }
      codeLines: string[]
    }
    workflow: {
      eyebrow: string
      title: string
      description: string
      steps: {
        id: string
        label: string
        title: string
        description: string
        status?: string
      }[]
    }
    persistence: {
      eyebrow: string
      title: string
      description: string
      local: {
        title: string
        description: string
        bullets: string[]
        codeLines: string[]
      }
      server: {
        title: string
        description: string
        bullets: string[]
        codeLines: string[]
      }
    }
    fullstack: {
      title: string
      description: string
      items: { title: string; description: string; tags?: string[] }[]
    }
    cta: {
      title: string
      button: string
    }
    openSource: {
      title: string
      description: string
    }
    footer: {
      companyTitle: string
      companyLinks: { label: string; href: string }[]
      socialTitle: string
      copyright: string
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
  }
}
