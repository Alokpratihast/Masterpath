type BlogTagsProps = {
  tags: {
    tag: {
      id: string;
      name: string;
      slug: string;
    };
  }[];
};

export default function BlogTags({
  tags,
}: BlogTagsProps) {
  if (!tags.length) {
    return null;
  }

  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-border/60
        bg-background
        shadow-sm
      "
    >
      {/* Header */}
      <div
        className="
          border-b
          border-border/60
          bg-muted/20
          px-5
          py-4
        "
      >
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Article Topics
        </p>

        <p className="mt-1 text-xs text-muted-foreground/70">
          Explore topics covered in this article
        </p>
      </div>

      {/* Tags */}
      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          {tags.map(({ tag }) => (
            <span
              key={tag.id}
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-primary/10
                bg-primary/[0.05]
                px-3
                py-1.5
                text-xs
                font-medium
                text-primary
                transition-all
                duration-200
                hover:border-primary/20
                hover:bg-primary/10
              "
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}