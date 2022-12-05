import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Image,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import { deleteProductById as deleteProductByIdFromStore } from "../store/product.store";
import { deleteProductById } from "../services/products.service";

import { IProduct } from "../interfaces";
import { openProductDialog } from "../store/productDialog.store";
import { editProduct } from "../actions/product.actions";

const columnHelper = createColumnHelper<IProduct>();

const columns = [
  columnHelper.accessor("image_url", {
    header: "Image",
    cell(props) {
      return (
        <Image
          src={props.getValue()}
          width={120}
          height={120}
          objectFit="contain"
        ></Image>
      );
    },
  }),
  columnHelper.accessor("name", {
    header: "Name",
  }),
  columnHelper.accessor("description", {
    header: "Description",
  }),
  columnHelper.accessor("categoryname", {
    header: "Category",
  }),
  columnHelper.accessor("unit", {
    header: "Unit",
  }),
  columnHelper.accessor("quantity", {
    header: "Quantity",
  }),
  columnHelper.display({
    id: "actions",
    header: "",
    cell(props) {
      return (
        <HStack>
          <IconButton
            aria-label="edit item"
            icon={<AiFillEdit />}
            onClick={() =>
              openProductDialog(
                "Edit Item",
                "Save",
                props.row.original,
                editProduct
              )
            }
          />
          <IconButton
            aria-label="delete item"
            icon={<AiFillDelete />}
            onClick={() => {
              deleteProductById(props.row.original.id).then((_) =>
                deleteProductByIdFromStore(props.row.original.id)
              );
            }}
          />
        </HStack>
      );
    },
  }),
];

export type ProductTableProps = {
  data: IProduct[];
};

const ProductTable: React.FC<ProductTableProps> = ({ data }) => {
  const { getHeaderGroups, getRowModel } = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <Table variant="simple">
      <Thead>
        {getHeaderGroups().map((headerGroup) => (
          <Tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody>
        {getRowModel().rows.map((row) => (
          <Tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default ProductTable;
