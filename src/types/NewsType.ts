export type NewsType = {
  id: number;
  title: string;
  content: string;
  created_at: Date;
};

export type NewsFormType = {
  id?: number;
  title: string;
  content: string;
  search?: string;
};
