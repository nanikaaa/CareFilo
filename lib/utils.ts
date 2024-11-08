import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper function to parse and stringify an object to remove undefined values
export const parseStringify = <T>(value: T): T =>
  JSON.parse(JSON.stringify(value));

// Convert a file to a URL for previewing
export const convertFileToUrl = (file: File): string =>
  URL.createObjectURL(file);

// Format date and time based on provided or default timezone
export const formatDateTime = (
  dateString: Date | string,
  timeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone
) => {
  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone,
  };

  const dateDayOptions: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone,
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
    day: "numeric",
    timeZone,
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone,
  };

  try {
    const formattedDateTime: string = new Date(dateString).toLocaleString(
      "en-US",
      dateTimeOptions
    );
    const formattedDateDay: string = new Date(dateString).toLocaleString(
      "en-US",
      dateDayOptions
    );
    const formattedDate: string = new Date(dateString).toLocaleString(
      "en-US",
      dateOptions
    );
    const formattedTime: string = new Date(dateString).toLocaleString(
      "en-US",
      timeOptions
    );

    return {
      dateTime: formattedDateTime,
      dateDay: formattedDateDay,
      dateOnly: formattedDate,
      timeOnly: formattedTime,
    };
  } catch (error) {
    console.error("Invalid date input for formatDateTime:", dateString);
    return {
      dateTime: "",
      dateDay: "",
      dateOnly: "",
      timeOnly: "",
    };
  }
};

// Simple encryption and decryption functions using base64 encoding
export function encryptKey(passkey: string): string {
  return btoa(passkey);
}

export function decryptKey(passkey: string): string {
  return atob(passkey);
}
