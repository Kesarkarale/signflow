import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(
  ...inputs: ClassValue[]
) {
  return twMerge(clsx(inputs));
}

export function formatDate(
  date: Date
) {
  return new Intl.DateTimeFormat(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  ).format(date);
}

export function truncateText(
  text: string,
  length = 40
) {
  if (text.length <= length) {
    return text;
  }

  return text.slice(0, length) + "...";
}
