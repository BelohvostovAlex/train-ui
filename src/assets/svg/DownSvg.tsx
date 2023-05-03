import * as React from "react";
import { SVGProps } from "react";

export const DownSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="22"
    height="32"
    viewBox="0 0 22 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.999999 19L11 31L21 19M1 0.999999L11 13L21 1"
      stroke="#FEFEFE"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
