import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { GetKpisResponse, GetProductsResponse, GetTransactionResponse } from "./types"

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL}),
    reducerPath:"main",
    tagTypes: ["Kpis", "Products", "Transactions"], 
    endpoints: (build)=>({
        getkpis: build.query<Array<GetKpisResponse>, void>({
            query: () => "kpi/kpis/",
            providesTags: ["Kpis"],
        }),
        getProducts: build.query<Array<GetProductsResponse>, void>({
            query: () => "product/products/",
            providesTags: ["Products"]
        }),
        getTransactions: build.query<Array<GetTransactionResponse>, void>({
            query: () => "transaction/transactions/",
            providesTags: ["Transactions"]
        }),
    })
})

export const { useGetkpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api