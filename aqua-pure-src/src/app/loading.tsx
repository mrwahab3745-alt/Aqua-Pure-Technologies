// Route-transition fallback. Kept light: one droplet, transform-only animation.
export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="flex min-h-[60vh] items-center justify-center bg-navy"
    >
      <div className="h-12 w-12 rotate-45 rounded-full rounded-tr-none bg-primary shadow-[0_0_30px_rgba(0,123,255,0.4)] animate-float" />
    </div>
  );
}
