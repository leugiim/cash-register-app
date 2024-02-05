const apiUrl = import.meta.env.VITE_API_BASE_URL;

export const productsUrl = () => `${apiUrl}/products`;
export const productUrl = (id: string) => `${apiUrl}/products/${id}`;
export const ticketsUrl = () => `${apiUrl}/tickets`;
export const ticketUrl = (id: number) => `${apiUrl}/products/${id}`;
export const previewUrl = () => `${apiUrl}/tickets/preview`;