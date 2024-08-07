"use client";
import { Key, useRef, useState } from "react";
import {
  Table,
  Input,
  Button,
  Space,
  Pagination,
  Image,
  Popconfirm,
  Typography,
  Tag,
} from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import type { InputRef } from "antd";
import { AiOutlineSearch } from "react-icons/ai";

import { product } from "@hooks";

interface DataType {
  id: Key;
  name: string;
  price: number;
  quantity: number;
  status: string;
}

type DataIndex = keyof DataType;
export default function Products() {
  const searchInput = useRef<InputRef>(null);
  const [productOptions, setProductOptions] = useState({
    page: 1,
    limit: 10,
  });

  const getProductsData: any = product.useGetProducts();

  const handleDelete = (item: any) => {};

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex
  ) => {
    setProductOptions({
      ...productOptions,
      page: 1,
      limit: 10,
      [dataIndex]: selectedKeys[0],
    });
    confirm();
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): ColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<AiOutlineSearch />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <AiOutlineSearch
        size={18}
        style={{ color: filtered ? "#1677ff" : undefined }}
      />
    ),
  });

  const columns: ColumnsType<DataType> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: 180,
      ...getColumnSearchProps("id"),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 200,
      ...getColumnSearchProps("name"),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 150,
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 150,
      render: (createdAt: any) => {
        return <span>{new Date(createdAt).toLocaleString()}</span>;
      },
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      key: "updatedAt",
      width: 150,
      render: (updatedAt: any) => {
        return <span>{new Date(updatedAt).toLocaleString()}</span>;
      },
    },
    {
      title: "Actions",
      key: "operation",
      width: 150,
      fixed: "right",
      render: (item?: any) => (
        <div className="flex items-center">
          <div>
            <Typography.Link
              href={`/product/${item?.id}`}
              style={{ marginRight: 10 }}
            >
              detail
            </Typography.Link>
          </div>
          <div>
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(item)}
              className="cursor-pointer"
            >
              delete
            </Popconfirm>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="w-full flex items-center justify-center py-7 bg-primary-50 border-b border-border">
        <h3 className="text-typo">Products</h3>
      </div>
      <div className="container">
        <div>
          <Table
            loading={getProductsData?.isLoading}
            columns={columns}
            dataSource={getProductsData?.data?.data || []}
            scroll={{ x: 1000, y: 600 }}
            rowKey={(record: any) => record.id}
            pagination={false}
          />
          <div className="pagination-container">
            <Pagination
              current={productOptions?.page}
              onChange={(page) =>
                setProductOptions({ ...productOptions, page })
              }
              total={getProductsData?.data?.count}
            />
          </div>
        </div>
      </div>
    </>
  );
}
