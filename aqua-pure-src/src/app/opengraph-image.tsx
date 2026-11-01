import { ImageResponse } from "next/og";

export const alt = "Aqua Pure Technology — RO plants, spare parts and water treatment";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 90px",
          background: "linear-gradient(135deg,#0f172a 0%,#0a1f44 60%,#0b3a7a 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <svg width="220" height="270" viewBox="0 0 48 60">
          <defs>
            <linearGradient id="d" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#67e8f9" />
              <stop offset="1" stopColor="#007BFF" />
            </linearGradient>
          </defs>
          <path d="M24 3s17 19 17 33a17 17 0 0 1-34 0C7 22 24 3 24 3Z" fill="url(#d)" />
          <path d="M16 38c1 4 4.500 7 8 7" stroke="white" strokeOpacity=".7" strokeWidth="2.500" fill="none" strokeLinecap="round" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", marginLeft: 70 }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>Aqua Pure</div>
          <div style={{ fontSize: 34, letterSpacing: 10, color: "#67e8f9", marginTop: 6 }}>TECHNOLOGY</div>
          <div style={{ fontSize: 32, color: "rgba(255,255,255,.75)", marginTop: 34 }}>
            RO plants · Spare parts · AMC — Pakistan
          </div>
        </div>
      </div>
    ),
    size,
  );
}
