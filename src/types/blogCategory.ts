export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateBlogCategoryInput {
  name: string;
  slug?: string;
  description?: string;
}

export interface UpdateBlogCategoryInput {
  name?: string;
  slug?: string;
  description?: string;
}