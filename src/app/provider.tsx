"use client";
import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { AiOutlineUp } from "react-icons/ai";

import { store, persistor } from "@store";
import { Container } from "./container";

const queryClient = new QueryClient();

export const Providers = ({ children }: any) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <div className="relative">
            <Container>{children}</Container>
            {showScrollButton && (
              <button
                onClick={scrollToTop}
                className="fixed z-50 bottom-10 right-6 bg-[#000] p-3 rounded-sm focus:outline-none"
              >
                <AiOutlineUp className="text-white" />
              </button>
            )}
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};
