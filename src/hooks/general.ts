"use client";
import { useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export const useGeneral = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, values: any, isMulti: boolean) => {
      if (isMulti) {
        const params = new URLSearchParams(searchParams);
        params.delete(name);

        if (values.length > 0) {
          params.append(name, values.join(","));
        }

        return params.toString();
      } else {
        const params = new URLSearchParams(searchParams);
        params.set(name, values);

        return params.toString();
      }
    },
    [searchParams]
  );

  const setQueryParam = (
    queryName: string,
    values: string[] | string | number[] | number,
    isMulti: boolean = true
  ) => {
    const queryString = createQueryString(queryName, values, isMulti);
    router.push(`${pathname}?${queryString}`);
  };

  return { queryParams: searchParams, createQueryString, setQueryParam };
};
