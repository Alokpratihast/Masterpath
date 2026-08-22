export interface BlogTag {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateBlogTagInput {
  name: string;
  slug?: string;
}

export interface UpdateBlogTagInput {
  name?: string;
  slug?: string;
}