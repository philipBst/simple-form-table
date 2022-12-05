import { toggleProductDialog } from "./../store/productDialog.store";
import { IProduct } from "../interfaces";
import {
  createNewProduct,
  updateProductById,
} from "../services/products.service";
import { addNewProduct, editProductById } from "../store/product.store";
import { useProductDialog } from "../store/productDialog.store";

export const addProduct = () => {
  const product = useProductDialog.getState().product;
  createNewProduct(product)
    .then((data) => addNewProduct(data as IProduct))
    .then((_) => toggleProductDialog());
};

export const editProduct = () => {
  const product = useProductDialog.getState().product;
  updateProductById(product.id as number, product)
    .then((data) => editProductById(data as Partial<IProduct>))
    .then((_) => toggleProductDialog());
};
