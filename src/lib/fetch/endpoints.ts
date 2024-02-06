const apiUrl = import.meta.env.VITE_API_BASE_URL;

export const productsUrl = () => `${apiUrl}/products`;
export const productUrl = (id: string) => `${apiUrl}/products/${id}`;
export const discountsUrl = () => `${apiUrl}/discounts`;
export const discountUrl = (id: number) => `${apiUrl}/discounts/${id}`;
export const ticketsUrl = () => `${apiUrl}/tickets`;
export const ticketUrl = (id: number) => `${apiUrl}/tickets/${id}`;
export const previewUrl = () => `${apiUrl}/tickets/preview`;
