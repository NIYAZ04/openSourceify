// Backend API utilities
const API_BASE_URL = import.meta.env.VITE_API_URL;

if (!API_BASE_URL) {
  console.error("VITE_API_URL is not set in environment variables");
}

/**
 * Check if backend is available
 */
export async function checkBackendHealth(): Promise<boolean> {
  if (!API_BASE_URL) {
    return false;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: "GET",
      signal: AbortSignal.timeout(3000), // 3 second timeout
    });
    return response.ok;
  } catch (error) {
    console.error("Backend health check failed:", error);
    return false;
  }
}

/**
 * Get API base URL
 */
export function getApiBaseUrl(): string {
  if (!API_BASE_URL) {
    throw new Error("VITE_API_URL is not configured. Please set it in your .env file.");
  }
  return API_BASE_URL;
}
