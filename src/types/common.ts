export type TPdf = {
  name: string;
  url: string;
  size: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
export type TImage = {
  id: number;
  name: string;
  url: string;
};

export type TMetaInfo = {
  title: string;
  description: string;
  breadCrumb?: string;
};
