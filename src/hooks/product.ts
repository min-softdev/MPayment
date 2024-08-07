"use client";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@store";

export const useGetProducts = () => {
  const queryOptions = {
    queryKey: ["products"],
    queryFn: async () => {
      const data = await supabase
        .from("products")
        .select("*", { count: "exact" });

      return data;
    },
  };

  return useQuery(queryOptions);
};

export const useGetProduct = (id: string) => {
  const queryOptions = {
    queryKey: ["product", id],
    queryFn: async () => {
      const data = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      return data;
    },
  };

  return useQuery(queryOptions);
};
