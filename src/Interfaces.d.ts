export interface ISticky {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
  category?: string;
}

export interface IStickies {
  stickies: ISticky[];
}

export interface ICategory {
  id: number;
  name: string;
  createdAt: string;
}
export interface ICategories {
  categories: ICategory[];
}
