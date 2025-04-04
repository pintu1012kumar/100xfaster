// app/lib/cors.ts
export function corsHeaders() {
    return {
      "Access-Control-Allow-Origin": "*", // Change to your domain in prod
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };
  }
  