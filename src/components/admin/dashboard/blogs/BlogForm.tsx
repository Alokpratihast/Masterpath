"use client";

import {
  FormEvent,
  useEffect,
  useState,
} from "react";

import { useRouter } from "next/navigation";

import BlogEditor from "./BlogEditor";
import BlogSeoForm from "./BlogSeoForm";
import BlogImageUpload from "./BlogImageUpload";
import BlogCategorySelect from "./BlogCategorySelect";
import BlogTagInput from "./BlogTagInput";

type BlogFormProps = {
  blogId?: string;
};

export default function BlogForm({
  blogId,
}: BlogFormProps) {
  const router = useRouter();

  const isEditMode = Boolean(blogId);

  const [title, setTitle] =
    useState("");

  const [slug, setSlug] =
    useState("");

  const [excerpt, setExcerpt] =
    useState("");

  const [content, setContent] =
    useState("");

  const [
    featuredImage,
    setFeaturedImage,
  ] = useState("");

  const [
    featuredImageAlt,
    setFeaturedImageAlt,
  ] = useState("");

  const [ogImage, setOgImage] =
    useState("");

  const [
    categoryId,
    setCategoryId,
  ] = useState("");

  const [tags, setTags] =
    useState<string[]>([]);

  const [status, setStatus] =
    useState<
      "DRAFT" | "PUBLISHED"
    >("DRAFT");

  const [seoTitle, setSeoTitle] =
    useState("");

  const [
    seoDescription,
    setSeoDescription,
  ] = useState("");

  const [
    focusKeyword,
    setFocusKeyword,
  ] = useState("");

  const [
    canonicalUrl,
    setCanonicalUrl,
  ] = useState("");

  const [noIndex, setNoIndex] =
    useState(false);

  const [noFollow, setNoFollow] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [
    initialLoading,
    setInitialLoading,
  ] = useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  /**
   * Generate slug from title
   */
  const generateSlug = (
    value: string
  ) => {
    return value
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  /**
   * Fetch existing blog
   * when edit mode is enabled.
   */
  useEffect(() => {
    if (!blogId) {
      return;
    }

    const fetchBlog = async () => {
      try {
        setInitialLoading(true);
        setError("");

        const response = await fetch(
          `/api/admin/blogs/${blogId}`
        );

        const result =
          await response.json();

        if (!response.ok) {
          throw new Error(
            result.message ||
              "Failed to fetch blog"
          );
        }

        const blog = result.data;

        /**
         * Basic information
         */
        setTitle(blog.title || "");

        setSlug(blog.slug || "");

        setExcerpt(
          blog.excerpt || ""
        );

        setContent(
          blog.content || ""
        );

        /**
         * Images
         */
        setFeaturedImage(
          blog.featuredImage || ""
        );

        setFeaturedImageAlt(
          blog.featuredImageAlt || ""
        );

        setOgImage(
          blog.ogImage || ""
        );

        /**
         * Category
         */
        setCategoryId(
          blog.categoryId || ""
        );

        /**
         * Tags
         */
        setTags(
          (blog.tags || [])
            .map(
              (blogTag: any) =>
                blogTag.tag?.name ||
                blogTag.name ||
                ""
            )
            .filter(Boolean)
        );

        /**
         * Publishing
         */
        setStatus(
          blog.status === "PUBLISHED"
            ? "PUBLISHED"
            : "DRAFT"
        );

        /**
         * SEO
         */
        setSeoTitle(
          blog.seoTitle || ""
        );

        setSeoDescription(
          blog.seoDescription || ""
        );

        setFocusKeyword(
          blog.focusKeyword || ""
        );

        setCanonicalUrl(
          blog.canonicalUrl || ""
        );

        setNoIndex(
          Boolean(blog.noIndex)
        );

        setNoFollow(
          Boolean(blog.noFollow)
        );
      } catch (error) {
        console.error(
          "Blog fetch error:",
          error
        );

        setError(
          error instanceof Error
            ? error.message
            : "Failed to load blog"
        );
      } finally {
        setInitialLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

  /**
   * Submit blog
   */
  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const payload = {
        title,

        slug:
          slug ||
          generateSlug(title),

        excerpt:
          excerpt || undefined,

        content,

        featuredImage:
          featuredImage || undefined,

        featuredImageAlt:
          featuredImageAlt ||
          undefined,

        ogImage:
          ogImage || undefined,

        categoryId:
          categoryId || undefined,

        tags,

        status,

        seoTitle:
          seoTitle || undefined,

        seoDescription:
          seoDescription ||
          undefined,

        focusKeyword:
          focusKeyword ||
          undefined,

        canonicalUrl:
          canonicalUrl ||
          undefined,

        noIndex,

        noFollow,
      };

      const url = isEditMode
        ? `/api/admin/blogs/${blogId}`
        : "/api/admin/blogs";

      const method = isEditMode
        ? "PUT"
        : "POST";

      const response =
        await fetch(url, {
          method,

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            payload
          ),
        });

      const result =
        await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ||
            "Failed to save blog"
        );
      }

      setSuccess(
        isEditMode
          ? "Blog updated successfully"
          : "Blog created successfully"
      );

      /**
       * After update,
       * go back to blog listing.
       */
      if (isEditMode) {
        setTimeout(() => {
          router.push("/admin/blogs");
          router.refresh();
        }, 800);

        return;
      }

      /**
       * Clear form after create.
       */
      setTitle("");
      setSlug("");
      setExcerpt("");
      setContent("");
      setFeaturedImage("");
      setFeaturedImageAlt("");
      setOgImage("");
      setCategoryId("");
      setTags([]);
      setStatus("DRAFT");
      setSeoTitle("");
      setSeoDescription("");
      setFocusKeyword("");
      setCanonicalUrl("");
      setNoIndex(false);
      setNoFollow(false);
    } catch (error) {
      console.error(
        "Blog form submit error:",
        error
      );

      setError(
        error instanceof Error
          ? error.message
          : "Failed to save blog"
      );
    } finally {
      setLoading(false);
    }
  };

  /**
   * Loading state while
   * existing blog is being fetched.
   */
  if (
    isEditMode &&
    initialLoading
  ) {
    return (
      <div className="rounded-lg border bg-background p-8">
        <p className="text-sm text-muted-foreground">
          Loading blog...
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      {/* Messages */}

      {error && (
        <div className="rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </div>
      )}

      {success && (
        <div className="rounded-md border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-700">
          {success}
        </div>
      )}

      {/* Main Content */}

      <div className="rounded-lg border bg-background p-6">
        <BlogEditor
          title={title}
          content={content}
          excerpt={excerpt}
          onTitleChange={(value) => {
            setTitle(value);

            /**
             * Automatically generate slug
             * only while creating a blog.
             */
            if (!isEditMode) {
              setSlug(
                generateSlug(value)
              );
            }
          }}
          onContentChange={
            setContent
          }
          onExcerptChange={
            setExcerpt
          }
        />

        {/* URL Slug */}

        <div className="mt-6 space-y-2">
          <label
            htmlFor="slug"
            className="text-sm font-medium"
          >
            URL Slug
          </label>

          <input
            id="slug"
            type="text"
            value={slug}
            onChange={(e) =>
              setSlug(e.target.value)
            }
            placeholder="my-blog-post"
            className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
          />

          <p className="text-xs text-muted-foreground">
            Your blog URL will be:
            {" "}
            /blog/{slug || "my-blog-post"}
          </p>
        </div>
      </div>

      {/* Publishing */}

      <div className="rounded-lg border bg-background p-6">
        <h2 className="text-base font-semibold">
          Publishing
        </h2>

        <div className="mt-4 space-y-2">
          <label
            htmlFor="status"
            className="text-sm font-medium"
          >
            Status
          </label>

          <select
            id="status"
            value={status}
            onChange={(e) =>
              setStatus(
                e.target.value as
                  | "DRAFT"
                  | "PUBLISHED"
              )
            }
            className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="DRAFT">
              Draft
            </option>

            <option value="PUBLISHED">
              Published
            </option>
          </select>
        </div>
      </div>

      {/* Category */}

      <div className="rounded-lg border bg-background p-6">
        <BlogCategorySelect
          value={categoryId}
          onChange={setCategoryId}
        />
      </div>

      {/* Tags */}

      <div className="rounded-lg border bg-background p-6">
        <BlogTagInput
          value={tags}
          onChange={setTags}
        />
      </div>

      {/* Images */}

      <div className="rounded-lg border bg-background p-6">
        <BlogImageUpload
          featuredImage={
            featuredImage
          }
          featuredImageAlt={
            featuredImageAlt
          }
          ogImage={ogImage}
          onFeaturedImageChange={
            setFeaturedImage
          }
          onFeaturedImageAltChange={
            setFeaturedImageAlt
          }
          onOgImageChange={
            setOgImage
          }
        />
      </div>

      {/* SEO */}

      <div className="rounded-lg border bg-background p-6">
        <BlogSeoForm
          seoTitle={seoTitle}
          seoDescription={
            seoDescription
          }
          focusKeyword={
            focusKeyword
          }
          canonicalUrl={
            canonicalUrl
          }
          noIndex={noIndex}
          noFollow={noFollow}
          onSeoTitleChange={
            setSeoTitle
          }
          onSeoDescriptionChange={
            setSeoDescription
          }
          onFocusKeywordChange={
            setFocusKeyword
          }
          onCanonicalUrlChange={
            setCanonicalUrl
          }
          onNoIndexChange={
            setNoIndex
          }
          onNoFollowChange={
            setNoFollow
          }
        />
      </div>

      {/* Submit */}

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={() =>
            router.push(
              "/admin/blogs"
            )
          }
          className="rounded-md border px-5 py-2 text-sm font-medium hover:bg-muted"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading
            ? "Saving..."
            : isEditMode
              ? "Update Blog"
              : "Create Blog"}
        </button>
      </div>
    </form>
  );
}