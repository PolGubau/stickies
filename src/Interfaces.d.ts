export interface ISticky {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  archived: boolean;
  private: boolean;
  createdAt: string;
  updatedAt?: string;
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
