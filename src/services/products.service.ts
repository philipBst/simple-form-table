import { PRODUCT_BASE_ENDPOINT } from "../api/endpoints";
import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "../api/methods";

import { IProduct } from "../interfaces";

export async function getAllProducts() {
  try {
    const products = await getRequest<IProduct[]>(PRODUCT_BASE_ENDPOINT);
    return products;
  } catch (error) {
    // handle error
    return [];
  }
}

export async function createNewProduct(product: IProduct) {
  try {
    const response = await postRequest(PRODUCT_BASE_ENDPOINT, product);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function updateProductById(
  productId: Pick<IProduct, "id">["id"],
  product: IProduct
) {
  try {
    const response = await putRequest(
      PRODUCT_BASE_ENDPOINT + productId,
      product
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteProductById(productId: Pick<IProduct, "id">["id"]) {
  try {
    const response = await deleteRequest(PRODUCT_BASE_ENDPOINT + productId);
    return response;
  } catch (error) {
    console.error(error);
  }
}
