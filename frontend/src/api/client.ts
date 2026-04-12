const BASE_URL = import.meta.env.VITE_API_URL!;

export const excessApi = async (
  endpoint: string,
  options: RequestInit = {},
) => {
  const cleanBase = BASE_URL.replace(/\/$/, "");
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  const url = `${cleanBase}${cleanEndpoint}`;
};
