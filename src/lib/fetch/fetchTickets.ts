import { previewUrl, ticketsUrl, ticketUrl } from '$lib/fetch/endpoints';
import { useFetch } from '$lib/fetch';
import { type Ticket, ticketSchema, type TicketBody } from '$lib/types/Ticket';
import { FetchMethod, type FetchResult } from '$lib/types/Fetch';

export const useTickets = (fetchResult: FetchResult<Ticket[]>) => {
	useFetch<Ticket[]>(fetchResult, {
		schema: ticketSchema,
		url: ticketsUrl()
	});
};

export const useCreateTicket = (fetchResult: FetchResult<Ticket>, body: TicketBody) => {
	useFetch<Ticket, TicketBody>(fetchResult, {
		schema: ticketSchema,
		url: ticketsUrl(),
		method: FetchMethod.POST,
		body
	});
};

export const usePreviewTicket = (fetchResult: FetchResult<Ticket>, body: TicketBody) => {
	useFetch<Ticket, TicketBody>(fetchResult, {
		schema: ticketSchema,
		url: previewUrl(),
		method: FetchMethod.POST,
		body
	});
};

export const useGetTicket = (fetchResult: FetchResult<Ticket>, id: number) => {
	useFetch<Ticket>(fetchResult, {
		schema: ticketSchema,
		url: ticketUrl(id)
	});
};
