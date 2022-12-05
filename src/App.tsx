import { useEffect, Fragment } from "react";
import { TableContainer, Button, VStack } from "@chakra-ui/react";

import { ProductTable } from "./components";

import { getAllProducts } from "./services/products.service";

import { useProductStore } from "./store/product.store";
import { openProductDialog } from "./store/productDialog.store";
import { addProduct } from "./actions/product.actions";

const preFetch = (() => getAllProducts())();

function App() {
  const { products, setProducts } = useProductStore();

  useEffect(() => {
    preFetch.then((data) => setProducts(data));
  }, []);

  return (
    <VStack gap={10}>
      <TableContainer maxWidth={1200} mt={10}>
        <ProductTable data={products} />
      </TableContainer>
      <Button
        onClick={() => openProductDialog("Add new Item", "Add", {}, addProduct)}
      >
        Add new item
      </Button>
    </VStack>
  );
}

export default App;
