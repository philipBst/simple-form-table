import { PRODUCT_BASE_ENDPOINT } from "../api/endpoints";
import { getRequest } from "../api/methods";

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
