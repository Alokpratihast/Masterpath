export type BlogStatus = "DRAFT" | "PUBLISHED";

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
}

export interface BlogAuthor {
  id: string;
  fullName: string;
  email?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
}

export interface Blog {
  id: string;

  title: string;
  slug: string;
  excerpt: string | null;
  content: string;

  featuredImage: string | null;
  featuredImageAlt: string | null;
  ogImage: string | null;

  authorId: string | null;
  author?: BlogAuthor | null;

  categoryId: string | null;
  category?: BlogCategory | null;

  status: BlogStatus;
  publishedAt: Date | null;

  seoTitle: string | null;
  seoDescription: string | null;
  focusKeyword: string | null;
  canonicalUrl: string | null;

  noIndex: boolean;
  noFollow: boolean;

  tags: BlogTag[];

  createdAt: Date;
  updatedAt: Date;
}

export interface BlogListParams {
  page?: number;
  limit?: number;
  search?: string;
  status?: BlogStatus;
  categoryId?: string;
}

export interface BlogPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface BlogListResponse {
  blogs: Blog[];
  pagination: BlogPagination;
}