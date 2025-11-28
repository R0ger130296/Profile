// Buenas prácticas: Utility function centralizada para combinar clases
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina clases CSS de manera inteligente
 * Usa clsx para manejar condicionales y tailwind-merge para resolver conflictos
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

