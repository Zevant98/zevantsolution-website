export type CurrencyCode = "NPR" | "USD" | "EUR" | "GBP";

export const currencies: { code: CurrencyCode; symbol: string; label: string; flag: string; rate: number }[] = [
  { code: "NPR", symbol: "Rs.", label: "Nepali Rupee", flag: "🇳🇵", rate: 133 },
  { code: "USD", symbol: "$", label: "US Dollar", flag: "🇺🇸", rate: 1 },
  { code: "EUR", symbol: "€", label: "Euro", flag: "🇪🇺", rate: 0.92 },
  { code: "GBP", symbol: "£", label: "British Pound", flag: "🇬🇧", rate: 0.79 },
];

export function formatPrice(usdBase: number, code: CurrencyCode): string {
  const c = currencies.find((c) => c.code === code) ?? currencies[1];
  const value = usdBase * c.rate;
  const rounded = code === "NPR" ? Math.round(value / 10) * 10 : Math.round(value);
  return `${c.symbol} ${rounded.toLocaleString()}`;
}
