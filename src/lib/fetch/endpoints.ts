const apiUrl = import.meta.env.VITE_API_BASE_URL;

export const products = () => `${apiUrl}/products`;
export const tickets = () => `${apiUrl}/tickets`;
export const preview = () => `${apiUrl}/tickets/preview`;