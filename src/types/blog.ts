export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  tags: Tags[];
};

export type Tags = {
  contents: string[];
  totalCount: number;
  offset: number;
  limit: number;
};
