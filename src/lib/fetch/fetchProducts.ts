import { productsUrl, productUrl } from '$lib/fetch/endpoints';
import { useFetch } from '$lib/fetch';
import { type Product, productSchema } from '$lib/types/Product';
import { FetchMethod, type FetchResult } from '$lib/types/Fetch';

export const useProducts = (fetchResult: FetchResult<Product[]>) => {
	useFetch<Product[]>(fetchResult, {
		schema: productSchema,
		url: productsUrl()
	});
};

export const useCreateProduct = (fetchResult: FetchResult<Product>, body: Product) => {
	useFetch<Product, Product>(fetchResult, {
		schema: productSchema,
		url: productsUrl(),
		method: FetchMethod.POST,
		body
	});
};

export const useGetProduct = (fetchResult: FetchResult<Product>, id: string) => {
	useFetch<Product>(fetchResult, {
		schema: productSchema,
		url: productUrl(id)
	});
};

export const useEditProduct = (fetchResult: FetchResult<Product>, id: string, body: Product) => {
	useFetch<Product, Product>(fetchResult, {
		schema: productSchema,
		url: productUrl(id),
		method: FetchMethod.PUT,
		body
	});
};

export const useDeleteProduct = (fetchResult: FetchResult<Product>, id: string) => {
	useFetch<Product>(fetchResult, {
		schema: null,
		url: productUrl(id),
		method: FetchMethod.DELETE
	});
};
