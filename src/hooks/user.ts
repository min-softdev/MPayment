"use client";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@store";

export const useGetUsers = () => {
  const queryOptions = {
    queryKey: ["users"],
    queryFn: async () => {
      const data = await supabase.from("users").select("*", { count: "exact" });

      return data;
    },
  };

  return useQuery(queryOptions);
};

export const useGetUser = () => {
  const queryOptions = {
    queryKey: ["user"],
    queryFn: async () => {
      const data = await supabase.auth.getUser();

      return data;
    },
    cacheTime: 0, // Disable caching
    staleTime: 0, // Always consider data stale
  };

  return useQuery(queryOptions);
};
