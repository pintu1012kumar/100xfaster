import { Suspense } from "react";
import StatusbarClient from "./statusbarclient"; // 👈 Make sure path is correct

export default function StatusbarPage() {
  return (
    <Suspense fallback={<div className="text-white text-3xl p-10">Loading status...</div>}>
      <StatusbarClient />
    </Suspense>
  );
}
