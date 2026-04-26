"use client";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import { Toaster } from "sonner";

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster richColors position="top-right" closeButton />;
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default GlobalProvider;
