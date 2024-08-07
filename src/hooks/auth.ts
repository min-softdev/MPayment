"use client";
import { useSelector, useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { supabase, authReducer } from "@store";

export const useAuth = (props?: any) => {
  const auth = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  return {
    ...auth,
    authReducer,
    dispatch,
    useSelector,
  };
};

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
