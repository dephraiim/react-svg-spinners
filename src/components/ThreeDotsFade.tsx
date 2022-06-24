import React, { SVGProps } from "react";

export default function ThreeDotsFade({
  width = 24,
  height = 24,
}: SVGProps<SVGElement>): JSX.Element {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="4" cy="12" r="3" opacity="1">
        <animate
          id="a"
          begin="0;b.end-0.25s"
          attributeName="opacity"
          dur="0.75s"
          values="1;.2"
          fill="freeze"
        />
      </circle>
      <circle cx="12" cy="12" r="3" opacity=".4">
        <animate
          begin="a.begin+0.15s"
          attributeName="opacity"
          dur="0.75s"
          values="1;.2"
          fill="freeze"
        />
      </circle>
      <circle cx="20" cy="12" r="3" opacity=".3">
        <animate
          id="b"
          begin="a.begin+0.3s"
          attributeName="opacity"
          dur="0.75s"
          values="1;.2"
          fill="freeze"
        />
      </circle>
    </svg>
  );
}