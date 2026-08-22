"use client";

import { KeyboardEvent, useState } from "react";

type BlogTagInputProps = {
  value: string[];
  onChange: (value: string[]) => void;
};

export default function BlogTagInput({
  value,
  onChange,
}: BlogTagInputProps) {
  const [input, setInput] =
    useState("");

  const addTag = () => {
    const tag = input.trim();

    if (!tag) {
      return;
    }

    const exists = value.some(
      (item) =>
        item.toLowerCase() ===
        tag.toLowerCase()
    );

    if (exists) {
      setInput("");
      return;
    }

    onChange([
      ...value,
      tag,
    ]);

    setInput("");
  };

  const removeTag = (
    tagToRemove: string
  ) => {
    onChange(
      value.filter(
        (tag) =>
          tag !== tagToRemove
      )
    );
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      event.key === "Enter" ||
      event.key === ","
    ) {
      event.preventDefault();
      addTag();
    }

    if (
      event.key === "Backspace" &&
      !input &&
      value.length > 0
    ) {
      onChange(
        value.slice(0, -1)
      );
    }
  };

  return (
    <div className="space-y-2">
      <label
        htmlFor="tags"
        className="text-sm font-medium"
      >
        Tags
      </label>

      <div className="rounded-md border bg-background p-2">
        <div className="flex flex-wrap gap-2">
          {value.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs"
            >
              {tag}

              <button
                type="button"
                onClick={() =>
                  removeTag(tag)
                }
                className="text-muted-foreground hover:text-foreground"
                aria-label={`Remove ${tag}`}
              >
                ×
              </button>
            </span>
          ))}
        </div>

        <input
          id="tags"
          type="text"
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          onKeyDown={handleKeyDown}
          onBlur={addTag}
          placeholder={
            value.length === 0
              ? "Type a tag and press Enter"
              : "Add another tag..."
          }
          className="mt-2 w-full bg-transparent px-1 py-2 text-sm outline-none"
        />
      </div>

      <p className="text-xs text-muted-foreground">
        Press Enter or comma to add a tag.
      </p>
    </div>
  );
}