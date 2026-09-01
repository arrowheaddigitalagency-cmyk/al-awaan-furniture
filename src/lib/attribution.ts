import { ATTRIBUTION_PARAMS } from "./constants";

const STORAGE_KEY = "alawan_attribution";

export type AttributionData = Partial<
  Record<(typeof ATTRIBUTION_PARAMS)[number], string>
>;

export function captureAttributionFromUrl(): void {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const data: AttributionData = {};
  let hasData = false;

  for (const key of ATTRIBUTION_PARAMS) {
    const value = params.get(key);
    if (value) {
      data[key] = value;
      hasData = true;
    }
  }

  if (hasData) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
}

export function getStoredAttribution(): AttributionData {
  if (typeof window === "undefined") return {};

  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as AttributionData) : {};
  } catch {
    return {};
  }
}

export function formatAttributionForForm(): string {
  const data = getStoredAttribution();
  const entries = Object.entries(data).filter(([, v]) => v);

  if (entries.length === 0) return "";

  return entries.map(([k, v]) => `${k}: ${v}`).join("\n");
}
