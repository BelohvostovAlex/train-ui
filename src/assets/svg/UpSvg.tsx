import * as React from "react";
import { SVGProps } from "react";

export const UpSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="22"
    height="32"
    viewBox="0 0 22 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21 13L11 1L0.999999 13M21 31L11 19L1 31"
      stroke="#FEFEFE"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
