"use client"

import type { GuideBlock, GuideSection } from "@/i18n/guide/types"
import { CodeBlock } from "./CodeBlock"
import { Callout } from "./Callout"
import { DocTable } from "./DocTable"

function BlockRenderer({ block }: { block: GuideBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="my-4 text-[15px] leading-7 text-muted-foreground">{block.text}</p>
    case "list":
      return (
        <ul className="my-4 list-disc space-y-2 pl-6 text-[15px] leading-7 text-muted-foreground">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case "ordered":
      return (
        <ol className="my-4 list-decimal space-y-2 pl-6 text-[15px] leading-7 text-muted-foreground">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      )
    case "code":
      return <CodeBlock snippet={block.snippet} language={block.language} />
    case "callout":
      return <Callout text={block.text} />
    case "table":
      return <DocTable headers={block.headers} rows={block.rows} />
    case "subheading":
      return (
        <h3 className="mt-8 mb-3 text-lg font-semibold tracking-tight text-foreground">
          {block.text}
        </h3>
      )
    default:
      return null
  }
}

function SectionAnchor({ id, title }: { id: string; title: string }) {
  return (
    <a
      href={`#${id}`}
      className="group relative -ml-6 inline-flex items-center gap-2 no-underline"
    >
      <span
        aria-hidden
        className="absolute -left-5 opacity-0 transition-opacity group-hover:opacity-100 text-muted-foreground"
      >
        #
      </span>
      <h2
        id={id}
        className="scroll-mt-24 border-t border-border pt-10 text-2xl font-semibold tracking-tight text-foreground first:border-t-0 first:pt-0"
      >
        {title}
      </h2>
    </a>
  )
}

export function Document({
  title,
  description,
  sections,
}: {
  title: string
  description: string
  sections: GuideSection[]
}) {
  return (
    <article className="min-w-0 flex-1 pb-20 pt-8">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      </header>

      {sections.map((section, index) => (
        <section key={section.id} className={index === 0 ? "" : "mt-2"}>
          {index === 0 ? (
            <h2 id={section.id} className="scroll-mt-24 text-2xl font-semibold text-foreground">
              {section.title}
            </h2>
          ) : (
            <SectionAnchor id={section.id} title={section.title} />
          )}
          <div className="mt-2">
            {section.blocks.map((block, i) => (
              <BlockRenderer key={`${section.id}-${i}`} block={block} />
            ))}
          </div>
        </section>
      ))}
    </article>
  )
}
