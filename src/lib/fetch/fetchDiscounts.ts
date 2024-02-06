import { discountsUrl, discountUrl } from '$lib/fetch/endpoints';
import { useFetch } from '$lib/fetch';
import { type Discount, discountSchema } from '$lib/types/Discount';
import { FetchMethod, type FetchResult } from '$lib/types/Fetch';

export const useDiscounts = (fetchResult: FetchResult<Discount[]>) => {
	useFetch<Discount[]>(fetchResult, {
		schema: discountSchema,
		url: discountsUrl()
	});
};

export const useCreateDiscount = (fetchResult: FetchResult<Discount>, body: Discount) => {
	useFetch<Discount, Discount>(fetchResult, {
		schema: discountSchema,
		url: discountsUrl(),
		method: FetchMethod.POST,
		body
	});
};

export const useGetDiscount = (fetchResult: FetchResult<Discount>, id: number) => {
	useFetch<Discount>(fetchResult, {
		schema: discountSchema,
		url: discountUrl(id)
	});
};

export const useEditDiscount = (fetchResult: FetchResult<Discount>, id: number, body: Discount) => {
	useFetch<Discount, Discount>(fetchResult, {
		schema: discountSchema,
		url: discountUrl(id),
		method: FetchMethod.PUT,
		body
	});
};

export const useDeleteDiscount = (fetchResult: FetchResult<Discount>, id: number) => {
	useFetch<Discount>(fetchResult, {
		schema: null,
		url: discountUrl(id),
		method: FetchMethod.DELETE
	});
};
