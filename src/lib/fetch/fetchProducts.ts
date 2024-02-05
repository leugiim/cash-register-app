import { productsUrl } from '$lib/fetch/endpoints';
import { useFetch } from '$lib/fetch';
import { type Product, productSchema } from '$lib/types/Product';
import type { FetchResult } from '$lib/types/Fetch';

export const useProducts = (fetchResult: FetchResult<Product[]>) => {
    useFetch<Product[]>(fetchResult, {
        schema: productSchema,
        url: productsUrl()
    });
};