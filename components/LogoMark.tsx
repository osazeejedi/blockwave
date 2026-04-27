interface LogoMarkProps {
  size?: number;
  animated?: boolean;
}

export default function LogoMark({ size = 32, animated = false }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      className={animated ? "logo-mark-animated" : ""}
    >
      <rect width="32" height="32" fill="#111B27" />
      <rect
        x="3.5"
        y="3.5"
        width="25"
        height="25"
        fill="none"
        stroke="#63A8D8"
        strokeWidth="0.7"
        strokeOpacity="0.9"
      />
      <rect
        x="7"
        y="7"
        width="18"
        height="18"
        fill="none"
        stroke="#63A8D8"
        strokeWidth="0.7"
        strokeOpacity="0.7"
        transform="rotate(12 16 16)"
      />
      <rect
        x="10"
        y="10"
        width="12"
        height="12"
        fill="none"
        stroke="#63A8D8"
        strokeWidth="0.7"
        strokeOpacity="0.5"
        transform="rotate(24 16 16)"
      />
      <rect
        x="13"
        y="13"
        width="6"
        height="6"
        fill="none"
        stroke="#63A8D8"
        strokeWidth="1.5"
        transform="rotate(45 16 16)"
      />
      <circle cx="16" cy="16" r="1.2" fill="#63A8D8" />
    </svg>
  );
}
