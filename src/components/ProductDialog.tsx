import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useProductDialog } from "../store/productDialog.store";

const ProductDialog = () => {
  const {
    dialogTitle,
    isOpen,
    setIsOpen,
    actionButtonLabel,
    product,
    onActionButtonClick,
    changeProduct,
  } = useProductDialog();
  return (
    <Modal isOpen={isOpen} onClose={setIsOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{dialogTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={3}>
            <Input
              placeholder="Image URL"
              type="url"
              defaultValue={product.image_url}
              onChange={(e) => changeProduct("image_url", e.target.value)}
            />
            <Input
              placeholder="Name of item"
              type="text"
              defaultValue={product.name}
              onChange={(e) => changeProduct("name", e.target.value)}
            />
            <Input
              placeholder="Description"
              type="text"
              defaultValue={product.description}
              onChange={(e) => changeProduct("description", e.target.value)}
            />
            <Input
              placeholder="Category"
              type="text"
              defaultValue={product.categoryname}
              onChange={(e) => changeProduct("categoryname", e.target.value)}
            />
            <Input
              placeholder="Unit"
              type="text"
              defaultValue={product.unit}
              onChange={(e) => changeProduct("unit", e.target.value)}
            />
            <Input
              placeholder="Quantity"
              type="number"
              min={1}
              defaultValue={product.quantity}
              onChange={(e) =>
                changeProduct("quantity", e.target.valueAsNumber)
              }
            />
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => onActionButtonClick(product)}>
            {actionButtonLabel}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductDialog;
