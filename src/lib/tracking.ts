export type TrackingEvent =
  | "generate_lead"
  | "form_start"
  | "form_submit"
  | "click_to_call"
  | "whatsapp_click"
  | "service_view"
  | "project_view"
  | "cta_click";

export type TrackingPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  event: TrackingEvent,
  payload: TrackingPayload = {}
): void {
  if (typeof window === "undefined") return;

  const detail = { event, ...payload, timestamp: Date.now() };

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(detail);

  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  }

  window.dispatchEvent(new CustomEvent("alawan_track", { detail }));
}
