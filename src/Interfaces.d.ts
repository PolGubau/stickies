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
  id: string;
  name: string;
  color: string;
  createdAt: string;
  updatedAt?: string;
}
export interface ICategories {
  categories: ICategory[];
}

export type ListOfPopups = "settings" | "newCategory" | "newSticky";
