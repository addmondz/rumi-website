export const GA_MEASUREMENT_ID = "G-1J3FT8P1QL";

export function trackEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}
