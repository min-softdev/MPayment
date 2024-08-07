"use client";
import { product } from "@hooks";

export default function Products(props: any) {
  const getProductData: any = product.useGetProduct(props.params.id);

  return (
    <>
      <div className="w-full flex items-center justify-center py-7 bg-primary-50 border-b border-border">
        <h3 className="text-typo">Product Detail</h3>
      </div>
      <div className="container">
        <div className="flex items-center justify-between border-b border-border py-3">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center"></div>
            <div className="ml-3">
              <h4 className="text-typo">{getProductData.data?.data?.name}</h4>
              <p className="text-typo text-sm">
                {getProductData.data?.data?.description}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <h4 className="text-typo">${getProductData.data?.data?.price}</h4>
            <button className="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
    </>
  );
}
