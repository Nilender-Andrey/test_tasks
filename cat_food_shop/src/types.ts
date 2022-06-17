export type ProductType = {
  id: number;
  name: string;
  portions: string;
  present: string;
  weight: string;
  isHappy: boolean;
  selected: boolean;
  isStock: boolean;
  about: string;
};

export type ProductsState = {
  products: ProductType[];
};

export type ProductsAction = {
  type: string;
  payload: number;
};
