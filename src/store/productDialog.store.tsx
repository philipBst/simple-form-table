import create from "zustand";
import { IProduct } from "../interfaces";

export type ProductDialogState = {
  dialogTitle: string;
  isOpen: boolean;
  setIsOpen: () => void;
  product: Partial<IProduct>;
  actionButtonLabel: string;
  onActionButtonClick: (product: Partial<IProduct>) => void;
  changeProduct: <K extends keyof IProduct>(key: K, value: IProduct[K]) => void;
};

export const useProductDialog = create<ProductDialogState>((set) => ({
  dialogTitle: "",
  isOpen: false,
  setIsOpen: () => set((state) => ({ ...state, isOpen: !state.isOpen })),
  product: {},
  actionButtonLabel: "",
  onActionButtonClick: () => {},
  changeProduct: (key, value) => {
    set((state) => ({ ...state, product: { ...state.product, [key]: value } }));
  },
}));

export const openProductDialog = (
  title: string,
  buttonLabel: string = "",
  product: Partial<IProduct> = {},
  onActionButtonClick?: (product: Partial<IProduct>) => void
) => {
  useProductDialog.setState((state) => ({
    ...state,
    dialogTitle: title,
    isOpen: true,
    actionButtonLabel: buttonLabel,
    product,
    onActionButtonClick,
  }));
};

export const toggleProductDialog = () => {
  useProductDialog.setState((state) => ({
    ...state,
    isOpen: !state.isOpen,
  }));
};
