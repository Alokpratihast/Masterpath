"use client";

import { useState } from "react";
import Image from "next/image";

type BlogImageUploadProps = {
  featuredImage: string;
  featuredImageAlt: string;
  ogImage: string;

  onFeaturedImageChange: (
    value: string
  ) => void;

  onFeaturedImageAltChange: (
    value: string
  ) => void;

  onOgImageChange: (
    value: string
  ) => void;
};

export default function BlogImageUpload({
  featuredImage,
  featuredImageAlt,
  ogImage,
  onFeaturedImageChange,
  onFeaturedImageAltChange,
  onOgImageChange,
}: BlogImageUploadProps) {
  const [imageError, setImageError] =
    useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold">
          Blog Images
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Configure featured and Open Graph images.
        </p>
      </div>

      {/* Featured Image URL */}
      <div className="space-y-2">
        <label
          htmlFor="featuredImage"
          className="text-sm font-medium"
        >
          Featured Image URL
        </label>

        <input
          id="featuredImage"
          type="url"
          value={featuredImage}
          onChange={(e) => {
            setImageError(false);
            onFeaturedImageChange(
              e.target.value
            );
          }}
          placeholder="https://ik.imagekit.io/..."
          className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Preview */}
      {featuredImage && !imageError && (
        <div className="overflow-hidden rounded-lg border">
          <div className="relative aspect-video w-full">
            <Image
              src={featuredImage}
              alt={
                featuredImageAlt ||
                "Blog featured image"
              }
              fill
              className="object-cover"
              onError={() =>
                setImageError(true)
              }
            />
          </div>
        </div>
      )}

      {/* Alt */}
      <div className="space-y-2">
        <label
          htmlFor="featuredImageAlt"
          className="text-sm font-medium"
        >
          Featured Image Alt Text
        </label>

        <input
          id="featuredImageAlt"
          type="text"
          value={featuredImageAlt}
          onChange={(e) =>
            onFeaturedImageAltChange(
              e.target.value
            )
          }
          placeholder="Describe the image"
          className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* OG Image */}
      <div className="space-y-2">
        <label
          htmlFor="ogImage"
          className="text-sm font-medium"
        >
          Open Graph Image URL
        </label>

        <input
          id="ogImage"
          type="url"
          value={ogImage}
          onChange={(e) =>
            onOgImageChange(e.target.value)
          }
          placeholder="https://ik.imagekit.io/..."
          className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
        />

        <p className="text-xs text-muted-foreground">
          Used when the blog is shared on social
          platforms.
        </p>
      </div>
    </div>
  );
}