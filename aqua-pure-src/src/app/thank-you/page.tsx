import type { Metadata } from "next";
import Link from "next/link";
import { SITE, whatsappUrl } from "../../lib/site";

export const metadata: Metadata = {
  title: "Message received",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-white px-6 py-24">
      <div className="max-w-lg text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <svg aria-hidden viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 12.5 4.5 4.5L19 7.5" />
          </svg>
        </span>
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-navy">Message received</h1>
        <p className="mt-3 text-base leading-relaxed text-navy/65">
          Thanks for reaching out. Our team will get back to you shortly. For anything urgent, call{" "}
          <a className="font-semibold text-primary" href={`tel:${SITE.phones[0].tel}`}>{SITE.phones[0].display}</a>{" "}
          or message us on WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="inline-flex min-h-12 items-center rounded-lg bg-navy px-6 text-sm font-bold text-white transition-colors hover:bg-primary">Back to home</Link>
          <a href={whatsappUrl("Hello, I just sent a message from the website.")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center rounded-lg border border-navy/15 px-6 text-sm font-bold text-navy transition-colors hover:border-primary hover:text-primary">WhatsApp us</a>
        </div>
      </div>
    </main>
  );
}
