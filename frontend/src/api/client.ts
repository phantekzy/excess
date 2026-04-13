const BASE_URL = import.meta.env.VITE_API_URL!;

export const excessApi = async (
  endpoint: string,
  options: RequestInit = {},
) => {
  const cleanBase = BASE_URL.replace(/\/$/, "");
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  const url = `${cleanBase}${cleanEndpoint}`;

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.error || `Excess server Error : ${response.status}`,
      );
    }
    return await response.json();
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "An unknown error occured";
    console.error("Network or Logic Error :", message);
    throw error;
  }
};
