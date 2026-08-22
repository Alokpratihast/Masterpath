type BlogContentProps = {
  content: string;
};

export default function BlogContent({
  content,
}: BlogContentProps) {
  return (
    <div
      className="
        prose
        prose-lg
        max-w-none

        /* Typography */
        prose-headings:font-bold
        prose-headings:tracking-[-0.025em]
        prose-headings:text-foreground

        prose-h1:mb-8
        prose-h1:text-4xl
        prose-h1:leading-tight

        prose-h2:mt-14
        prose-h2:mb-6
        prose-h2:border-b
        prose-h2:border-border/60
        prose-h2:pb-3
        prose-h2:text-2xl

        prose-h3:mt-10
        prose-h3:mb-4
        prose-h3:text-xl

        /* Paragraphs */
        prose-p:my-5
        prose-p:leading-8
        prose-p:text-foreground/85

        /* Links */
        prose-a:font-medium
        prose-a:text-primary
        prose-a:underline
        prose-a:underline-offset-4
        prose-a:decoration-primary/30
        hover:prose-a:decoration-primary

        /* Strong */
        prose-strong:font-semibold
        prose-strong:text-foreground

        /* Lists */
        prose-ul:my-6
        prose-ol:my-6
        prose-li:my-2
        prose-li:leading-7
        prose-li:text-foreground/85
        prose-li:marker:text-primary

        /* Images */
        prose-img:my-10
        prose-img:w-full
        prose-img:rounded-2xl
        prose-img:border
        prose-img:border-border/50
        prose-img:shadow-sm

        /* Blockquote */
        prose-blockquote:my-8
        prose-blockquote:border-l-4
        prose-blockquote:border-primary
        prose-blockquote:bg-primary/[0.04]
        prose-blockquote:px-6
        prose-blockquote:py-4
        prose-blockquote:rounded-r-xl
        prose-blockquote:font-medium
        prose-blockquote:italic
        prose-blockquote:text-foreground/80

        /* Inline Code */
        prose-code:rounded-md
        prose-code:border
        prose-code:border-border/60
        prose-code:bg-muted
        prose-code:px-1.5
        prose-code:py-0.5
        prose-code:text-[0.9em]
        prose-code:font-medium
        prose-code:text-primary

        /* Code Block */
        prose-pre:my-8
        prose-pre:overflow-x-auto
        prose-pre:rounded-2xl
        prose-pre:border
        prose-pre:border-white/10
        prose-pre:bg-[#071B3A]
        prose-pre:px-5
        prose-pre:py-5
        prose-pre:text-sm
        prose-pre:leading-7
        prose-pre:text-blue-50
        prose-pre:shadow-lg

        /* Tables */
        prose-table:my-8
        prose-table:w-full
        prose-table:overflow-hidden
        prose-table:rounded-xl
        prose-table:border
        prose-table:border-border/60

        prose-thead:bg-muted/60

        prose-th:border
        prose-th:border-border/50
        prose-th:px-4
        prose-th:py-3
        prose-th:text-left
        prose-th:text-sm
        prose-th:font-semibold

        prose-td:border
        prose-td:border-border/50
        prose-td:px-4
        prose-td:py-3
        prose-td:text-sm

        /* Horizontal Rule */
        prose-hr:my-10
        prose-hr:border-border/60

        /* First paragraph */
        prose-p:first-of-type:text-[1.08rem]
        prose-p:first-of-type:leading-8
      "
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
}