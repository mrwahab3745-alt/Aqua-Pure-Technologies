export default function Loading() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-navy">
      <div className="relative flex flex-col items-center justify-center px-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-28 w-28 rounded-full bg-primary/20 blur-sm animate-ping" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-28 w-28 rounded-full bg-primary/20 blur-sm animate-ping opacity-60" />
          </div>

          <div className="relative flex items-center justify-center">
            <div className="h-16 w-16 rounded-full bg-primary rounded-tr-none rotate-45 animate-bounce shadow-[0_0_40px_rgba(0,123,255,0.35)]" />
          </div>
        </div>

        <p className="mt-6 text-center text-sm font-semibold tracking-wide text-white/80 animate-pulse">
          Purifying Your Experience...
        </p>
      </div>
    </div>
  );
}

