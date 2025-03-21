import { SVGProps } from "react";

export default function UKFlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Horizontal line */}
      <line x1="2" y1="12" x2="22" y2="12" />
      {/* Vertical line */}
      <line x1="12" y1="2" x2="12" y2="22" />
      {/* Diagonal lines */}
      <line x1="2" y1="2" x2="22" y2="22" />
      <line x1="2" y1="22" x2="22" y2="2" />
    </svg>
  );
}
