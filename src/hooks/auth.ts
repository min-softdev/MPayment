"use client";
import { useMutation } from "@tanstack/react-query";
import { supabase } from "@store";

export const useSignIn = () => {
  const mutation: any = {
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const data = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      return data;
    },
  };

  return useMutation(mutation);
};

export const useSignUp = () => {
  const mutation: any = {
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const data = await supabase.auth.signUp({ email, password });

      return data;
    },
  };

  return useMutation(mutation);
};

export const useSignOut = () => {
  const mutation: any = {
    mutationFn: async () => {
      const data = await supabase.auth.signOut();

      return data;
    },
  };

  return useMutation(mutation);
};