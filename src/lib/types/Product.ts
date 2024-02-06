import { z } from 'zod';

export interface Product {
	id: string | null;
	name: string | null;
	price: number | null;
	createdAt?: string | null;
	updatedAt?: string | null;
}

export const productSchema = z.object({
	id: z.string(),
	name: z.string(),
	price: z.number(),
	createdAt: z.string(),
	updatedAt: z.string()
});
