const DEFAULT_WEB3FORMS_ACCESS_KEY = "40344aa9-93ee-42a8-be8f-e32e12b3f0e7";

export function getWeb3FormsAccessKey(): string {
  const fromEnv =
    process.env.WEB3FORMS_ACCESS_KEY?.trim() ||
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();

  return fromEnv || DEFAULT_WEB3FORMS_ACCESS_KEY;
}
