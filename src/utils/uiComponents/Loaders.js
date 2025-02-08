import { ring, lineWobble } from "ldrs";

ring.register();
lineWobble.register();

export const RingLoader = () => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <l-ring
      size="30"
      stroke="3"
      bg-opacity="0"
      speed="2"
      color="var(--text-secondary)"
    ></l-ring>
  </div>
);

export const LineLoader = () => (
  <div>
    <l-line-wobble
      size="250"
      stroke="3"
      bg-opacity="0.1"
      speed="1.75"
      color="var(--text-secondary)"
    ></l-line-wobble>
  </div>
);
