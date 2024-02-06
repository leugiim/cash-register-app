import { discountsUrl } from '$lib/fetch/endpoints';
import { useFetch } from '$lib/fetch';
import { type Discount, discountSchema } from '$lib/types/Discount';
import type { FetchResult } from '$lib/types/Fetch';

export const useDiscounts = (fetchResult: FetchResult<Discount[]>) => {
    useFetch<Discount[]>(fetchResult, {
        schema: discountSchema,
        url: discountsUrl()
    });
};