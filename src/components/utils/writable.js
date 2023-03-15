import { writable } from 'svelte/store';

export const userInput = writable({});
export const calculatedResults = writable({
    carattere: 0,
    destino: 0,
    arcano: 0
})