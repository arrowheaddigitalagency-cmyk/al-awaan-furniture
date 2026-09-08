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
    gtagSendEvent?: (url: string) => boolean;
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

/**
 * Google Ads delayed-navigation helper for WhatsApp clicks.
 * Fires `whatsapp_click`, then navigates after the event is sent (or 2s timeout).
 */
export function gtagSendEvent(
  url: string,
  payload: TrackingPayload = {}
): false {
  if (typeof window === "undefined") return false;

  const callback = () => {
    if (typeof url === "string") {
      window.location.href = url;
    }
  };

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    event: "whatsapp_click",
    ...payload,
    timestamp: Date.now(),
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click", {
      ...payload,
      event_callback: callback,
      event_timeout: 2000,
    });
  } else {
    callback();
  }

  window.dispatchEvent(
    new CustomEvent("alawan_track", {
      detail: { event: "whatsapp_click", ...payload, timestamp: Date.now() },
    })
  );

  return false;
}
