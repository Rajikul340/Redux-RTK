import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
   tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (id) =>({
        url: "/product"
      }),
      providesTags:["products"]
    }),
    addProduct: builder.mutation({
        query:(data)=>({
            url:"/product",
            method:"POST",
            body: data
        })

    }),
    removeProduct: builder.mutation({
        query:(id)=>({
            url:`/product/${id}`,
            method:"DELETE",      
        }),
      invalidatesTags:["products"]
    }),
  }),
});

export const { useGetProductsQuery, useAddProductMutation, useRemoveProductMutation } = apiSlice;