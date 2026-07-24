"use client";

import dynamic from "next/dynamic";

const WhatsAppButton = dynamic(
  () => import("./Whatsappicon"),
  { ssr: false }
);

export default function DynamicWhatsApp() {
  return <WhatsAppButton />;
}

