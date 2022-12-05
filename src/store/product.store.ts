import create from "zustand";
import { updateProductById } from "../services/products.service";

import { IProduct } from "../interfaces";

export type ProductState = {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
};

export const useProductStore = create<ProductState>()((set) => ({
  products: [],
  setProducts: (products: IProduct[]) => set((_) => ({ products })),
}));

export const deleteProductById = (productId: number) => {
  useProductStore.setState((state) => ({
    ...state,
    products: state.products.filter((product) => product.id !== productId),
  }));
};

export const addNewProduct = (product: IProduct) => {
  useProductStore.setState((state) => ({
    ...state,
    products: [...state.products, product],
  }));
};

export const editProductById = (item: Partial<IProduct>) => {
  useProductStore.setState((state) => ({
    ...state,
    products: state.products.map((product) => {
      if (product.id === item.id) return { ...product, ...item };
      return product;
    }),
  }));
};
