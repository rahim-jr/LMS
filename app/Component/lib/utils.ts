import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge Tailwind classes while supporting conditional classnames.
export function cn(...inputs: Array<string | undefined | false | null>) {
  return twMerge(clsx(inputs));
}
