"use client";

type BlogSeoFormProps = {
  seoTitle: string;
  seoDescription: string;
  focusKeyword: string;
  canonicalUrl: string;
  noIndex: boolean;
  noFollow: boolean;

  onSeoTitleChange: (value: string) => void;
  onSeoDescriptionChange: (value: string) => void;
  onFocusKeywordChange: (value: string) => void;
  onCanonicalUrlChange: (value: string) => void;
  onNoIndexChange: (value: boolean) => void;
  onNoFollowChange: (value: boolean) => void;
};

export default function BlogSeoForm({
  seoTitle,
  seoDescription,
  focusKeyword,
  canonicalUrl,
  noIndex,
  noFollow,
  onSeoTitleChange,
  onSeoDescriptionChange,
  onFocusKeywordChange,
  onCanonicalUrlChange,
  onNoIndexChange,
  onNoFollowChange,
}: BlogSeoFormProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold">
          SEO Settings
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Configure search engine metadata for this
          blog.
        </p>
      </div>

      {/* SEO Title */}
      <div className="space-y-2">
        <label
          htmlFor="seoTitle"
          className="text-sm font-medium"
        >
          SEO Title
        </label>

        <input
          id="seoTitle"
          type="text"
          value={seoTitle}
          onChange={(e) =>
            onSeoTitleChange(e.target.value)
          }
          placeholder="SEO optimized title"
          className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
        />

        <div className="flex justify-between text-xs text-muted-foreground">
          <span>
            Recommended: around 50–60 characters
          </span>

          <span>{seoTitle.length}/60</span>
        </div>
      </div>

      {/* SEO Description */}
      <div className="space-y-2">
        <label
          htmlFor="seoDescription"
          className="text-sm font-medium"
        >
          SEO Description
        </label>

        <textarea
          id="seoDescription"
          value={seoDescription}
          onChange={(e) =>
            onSeoDescriptionChange(e.target.value)
          }
          placeholder="Write a search engine friendly description..."
          rows={4}
          className="w-full resize-none rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
        />

        <div className="flex justify-between text-xs text-muted-foreground">
          <span>
            Recommended: around 150–160 characters
          </span>

          <span>
            {seoDescription.length}/160
          </span>
        </div>
      </div>

      {/* Focus Keyword */}
      <div className="space-y-2">
        <label
          htmlFor="focusKeyword"
          className="text-sm font-medium"
        >
          Focus Keyword
        </label>

        <input
          id="focusKeyword"
          type="text"
          value={focusKeyword}
          onChange={(e) =>
            onFocusKeywordChange(e.target.value)
          }
          placeholder="e.g. Next.js tutorial"
          className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Canonical URL */}
      <div className="space-y-2">
        <label
          htmlFor="canonicalUrl"
          className="text-sm font-medium"
        >
          Canonical URL
        </label>

        <input
          id="canonicalUrl"
          type="url"
          value={canonicalUrl}
          onChange={(e) =>
            onCanonicalUrlChange(e.target.value)
          }
          placeholder="https://example.com/blog/..."
          className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Robots */}
      <div className="space-y-4 rounded-md border p-4">
        <p className="text-sm font-medium">
          Search Engine Robots
        </p>

        <label className="flex items-center gap-3 text-sm">
          <input
            type="checkbox"
            checked={noIndex}
            onChange={(e) =>
              onNoIndexChange(e.target.checked)
            }
            className="h-4 w-4"
          />

          <span>
            No Index
          </span>
        </label>

        <label className="flex items-center gap-3 text-sm">
          <input
            type="checkbox"
            checked={noFollow}
            onChange={(e) =>
              onNoFollowChange(e.target.checked)
            }
            className="h-4 w-4"
          />

          <span>
            No Follow
          </span>
        </label>
      </div>
    </div>
  );
}