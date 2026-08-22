"use client";

type BlogEditorProps = {
  title: string;
  content: string;
  excerpt: string;
  onTitleChange: (value: string) => void;
  onContentChange: (value: string) => void;
  onExcerptChange: (value: string) => void;
};

export default function BlogEditor({
  title,
  content,
  excerpt,
  onTitleChange,
  onContentChange,
  onExcerptChange,
}: BlogEditorProps) {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="space-y-2">
        <label
          htmlFor="title"
          className="text-sm font-medium"
        >
          Blog Title
        </label>

        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) =>
            onTitleChange(e.target.value)
          }
          placeholder="Enter blog title"
          className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Excerpt */}
      <div className="space-y-2">
        <label
          htmlFor="excerpt"
          className="text-sm font-medium"
        >
          Excerpt
        </label>

        <textarea
          id="excerpt"
          value={excerpt}
          onChange={(e) =>
            onExcerptChange(e.target.value)
          }
          placeholder="Short description of the blog..."
          rows={3}
          className="w-full resize-none rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
        />

        <p className="text-xs text-muted-foreground">
          A short summary shown on blog cards and
          listings.
        </p>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <label
          htmlFor="content"
          className="text-sm font-medium"
        >
          Content
        </label>

        <textarea
          id="content"
          value={content}
          onChange={(e) =>
            onContentChange(e.target.value)
          }
          placeholder="Write your blog content..."
          rows={20}
          className="w-full resize-y rounded-md border bg-background px-3 py-3 text-sm leading-6 outline-none focus:ring-2 focus:ring-primary"
        />

        <p className="text-xs text-muted-foreground">
          Blog content can later be replaced with a
          rich text editor such as Tiptap.
        </p>
      </div>
    </div>
  );
}