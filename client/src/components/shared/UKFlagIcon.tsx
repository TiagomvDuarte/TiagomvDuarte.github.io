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
      className="text-primary"
      {...props}
    >
      {/* Rectangle frame */}
      <rect x="3" y="4" width="18" height="16" rx="2" />
      {/* Vertical line */}
      <line x1="12" y1="4" x2="12" y2="20" />
      {/* Horizontal line */}
      <line x1="3" y1="12" x2="21" y2="12" />
    </svg>
  );
}