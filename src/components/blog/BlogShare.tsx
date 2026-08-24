"use client";

import {
  Check,
  Copy,
  MessageCircle,
  Share2,
} from "lucide-react";
import { useState } from "react";

type BlogShareProps = {
  title: string;
  slug: string;
};

export default function BlogShare({
  title,
  slug,
}: BlogShareProps) {
  const [copied, setCopied] =
    useState(false);

  const getUrl = () => {
    if (typeof window === "undefined") {
      return "";
    }

    return `${window.location.origin}/blogs/${slug}`;
  };

  const copyLink = async () => {
    const url = getUrl();

    if (!url) return;

    try {
      await navigator.clipboard.writeText(
        url
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  const shareLinkedIn = () => {
    const url = encodeURIComponent(
      getUrl()
    );

    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const shareWhatsApp = () => {
    const url = getUrl();

    const text = encodeURIComponent(
      `${title}\n\n${url}`
    );

    window.open(
      `https://wa.me/?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

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
      <div className="border-b border-border/60 bg-muted/20 px-5 py-4">
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              bg-primary/10
              text-primary
            "
          >
            <Share2 className="h-4 w-4" />
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">
              Share this article
            </p>

            <p className="mt-0.5 text-xs text-muted-foreground">
              Share it with your network
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="grid grid-cols-3 gap-2">
          {/* LinkedIn */}
          <button
            type="button"
            onClick={shareLinkedIn}
            className="
              group
              flex
              flex-col
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-border/60
              px-2
              py-3
              text-xs
              font-medium
              text-muted-foreground
              transition-all
              hover:border-[#0A66C2]/30
              hover:bg-[#0A66C2]/5
              hover:text-[#0A66C2]
            "
          >
            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                bg-[#0A66C2]/10
                text-xs
                font-bold
                text-[#0A66C2]
                transition-transform
                group-hover:scale-105
              "
            >
              in
            </span>

            LinkedIn
          </button>

          {/* WhatsApp */}
          <button
            type="button"
            onClick={shareWhatsApp}
            className="
              group
              flex
              flex-col
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-border/60
              px-2
              py-3
              text-xs
              font-medium
              text-muted-foreground
              transition-all
              hover:border-green-500/30
              hover:bg-green-500/5
              hover:text-green-600
            "
          >
            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                bg-green-500/10
                text-green-600
                transition-transform
                group-hover:scale-105
              "
            >
              <MessageCircle className="h-4 w-4" />
            </span>

            WhatsApp
          </button>

          {/* Copy */}
          <button
            type="button"
            onClick={copyLink}
            className="
              group
              flex
              flex-col
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-border/60
              px-2
              py-3
              text-xs
              font-medium
              text-muted-foreground
              transition-all
              hover:border-primary/30
              hover:bg-primary/5
              hover:text-primary
            "
          >
            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                bg-primary/10
                text-primary
                transition-transform
                group-hover:scale-105
              "
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </span>

            {copied
              ? "Copied"
              : "Copy Link"}
          </button>
        </div>

        {/* Copied message */}
        {copied && (
          <div className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-green-500/5 px-3 py-2 text-xs font-medium text-green-600">
            <Check className="h-3.5 w-3.5" />

            Link copied successfully
          </div>
        )}
      </div>
    </div>
  );
}
