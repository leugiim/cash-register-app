import { writable, get } from 'svelte/store';
import { browser } from '$app/environment';
import type { TicketBody } from '$lib/types/Ticket';

export const cart = writable<Cart>();

export interface Cart {
    [id:string] : number
}

const getCart = () => {
    const hash = localStorage.getItem('cart');
    cart.set(hash ? JSON.parse(hash) as Cart : {});
}

const saveCart = (cart: Cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
    getCart();
}

export const cleanCart = () => {
    localStorage.clear();
    getCart();
}

export const addProduct = (cart: Cart, id: string, cantidad: number) => {
    if (cart[id]) cart[id] += cantidad;
    else cart[id] = cantidad;
    if (cart[id] <= 0) delete cart[id];
    saveCart(cart);
}

export const getProducts = (cart: Cart): TicketBody => {
    const productsIds: string = Object.entries(cart).flatMap(([id, quantity]) => Array(quantity).fill(id)).join(',');
    return {productsIds};
}

export const total = (cart: Cart): number => {
    let total = 0;
    for (const id in cart) total += cart[id];
    return total;
}

if (browser) {
    getCart();
}