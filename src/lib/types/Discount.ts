import { z } from 'zod';

export enum DiscountStrategy {
    NXM = 'NxM',
    FLAT = 'Flat',
    PERCENT = 'Percent'
}

export interface Discount {
    id: number;
    productId: string;
    strategy: DiscountStrategy;
    quantity: number;
    discount: number;
    createdAt: string;
    updatedAt: string;
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