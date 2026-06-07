type ServicePlaceholderProps = {
  title?: string
  description?: string
}

export function ServicePlaceholder({
  title = "Coming soon",
  description = "This page is being prepared.",
}: ServicePlaceholderProps) {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-3 text-center">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <p className="max-w-md text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
