import { CSSProperties } from "react";

const loaderWrapperStyle: CSSProperties = {
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const ringStyle: CSSProperties = {
  width: "30px",
  height: "30px",
  border: "3px solid rgba(255, 255, 255, 0.1)",
  borderTopColor: "var(--text-secondary)",
  borderRadius: "50%",
  animation: "ui-spin 1s linear infinite",
};

const lineStyle: CSSProperties = {
  width: "250px",
  height: "4px",
  borderRadius: "9999px",
  background: "linear-gradient(90deg, rgba(255,255,255,0.1), var(--text-secondary), rgba(255,255,255,0.1))",
  animation: "ui-pulse 1.5s ease-in-out infinite",
};

export const RingLoader = () => (
  <div style={loaderWrapperStyle}>
    <div style={ringStyle} aria-label="Loading" />
  </div>
);

export const LineLoader = () => (
  <div style={loaderWrapperStyle}>
    <div style={lineStyle} aria-label="Loading" />
  </div>
);
