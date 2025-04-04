export function corsHeaders() {
    return {
      "Access-Control-Allow-Origin": "*", // or restrict to a domain
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };
  }
  