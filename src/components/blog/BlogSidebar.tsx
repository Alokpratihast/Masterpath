import BlogShare from "./BlogShare";
import BlogTags from "./BlogTags";

type BlogSidebarProps = {
  title: string;
  slug: string;

  tags: {
    tag: {
      id: string;
      name: string;
      slug: string;
    };
  }[];
};

export default function BlogSidebar({
  title,
  slug,
  tags,
}: BlogSidebarProps) {
  return (
    <aside
      className="
        space-y-5
        lg:sticky
        lg:top-24
        lg:self-start
      "
    >
      {/* Share */}
      <BlogShare
        title={title}
        slug={slug}
      />

      {/* Tags */}
      <BlogTags tags={tags} />
    </aside>
  );
}