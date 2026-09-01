import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { WHATSAPP_NUMBER } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
