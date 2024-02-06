import { z } from 'zod';

export interface Product {
	id: string;
	name: string;
	price: number;
	createdAt: string;
	updatedAt: string;
}

export const productSchema = z.object({
	id: z.string(),
	name: z.string(),
	price: z.number(),
	createdAt: z.string(),
	updatedAt: z.string()
});
