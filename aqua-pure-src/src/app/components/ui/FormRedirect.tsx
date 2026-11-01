"use client";

import { useEffect, useState } from "react";

/**
 * Web3Forms needs an absolute URL to send people back to after a successful
 * submit. Using the current origin keeps it working on previews, localhost
 * and the final domain without any config.
 */
export default function FormRedirect() {
  const [url, setUrl] = useState("");
  useEffect(() => setUrl(`${window.location.origin}/thank-you`), []);
  return url ? <input type="hidden" name="redirect" value={url} /> : null;
}
