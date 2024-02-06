import { z } from 'zod';

export enum DiscountStrategy {
	NXM = 'NxM',
	FLAT = 'Flat',
	PERCENT = 'Percent'
}

export const DiscountStrategies = Object.values(DiscountStrategy) as string[];

export interface Discount {
	id: number | null;
	productId: string | null;
	strategy: DiscountStrategy | null;
	quantity: number | null;
	discount: number | null;
	createdAt?: string | null;
	updatedAt?: string | null;
}

export const discountSchema = z.object({
	id: z.number(),
	productId: z.string(),
	strategy: z.string(),
	quantity: z.number(),
	discount: z.number(),
	createdAt: z.string(),
	updatedAt: z.string()
});
