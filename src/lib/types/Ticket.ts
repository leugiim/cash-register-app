import { z } from "zod"

export interface Ticket {
	id: number | null;
	totalPrice: number;
	price: number;
	discount: number;
  ticketDetails: TicketDetail[];
	createdAt?: string | null;
	updatedAt?: string | null;
}

export interface TicketDetail {
	id: number | null;
    ticketId: number | null;
    productId: string;
    productName: string;
    quantity:number;
    pricePerUnit:number;
    totalPrice:number;
    price:number;
    discount:number;
}

export interface TicketBody {
    productsIds: string;
}

export const ticketDetailSchema = z.object({
  id: z.number().nullable(),
  ticketId: z.number().nullable(),
  productId: z.string(),
  productName: z.string(),
  quantity: z.number(),
  pricePerUnit: z.number(),
  totalPrice: z.number(),
  price: z.number(),
  discount: z.number()
})

export const ticketSchema = z.object({
  id: z.number().nullable(),
  totalPrice: z.number(),
  price: z.number(),
  discount: z.number(),
  ticketDetails: z.array(ticketDetailSchema),
  createdAt: z.string().nullable(),
  updatedAt: z.string().nullable()
})