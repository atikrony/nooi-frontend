"use client";
import { TagTypeList } from "@/types/tagTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const baseQueryF = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
  prepareHeaders: (headers) => {
    const token = Cookies.get("token-in-here");
    if (token) {
      headers.set("Authorization", token);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryF,
  endpoints: () => ({}),
  tagTypes: TagTypeList,
});
