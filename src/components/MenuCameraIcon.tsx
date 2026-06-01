type MenuCameraIconProps = {
  className?: string;
};

const MenuCameraIcon = ({ className }: MenuCameraIconProps) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    <rect x="36" y="68" width="128" height="96" rx="14" fill="#F9CDD5" stroke="#7A8450" strokeWidth="4" />
    <rect x="56" y="48" width="48" height="28" rx="8" fill="#f0b8c2" stroke="#7A8450" strokeWidth="4" />
    <circle cx="100" cy="116" r="34" fill="#fff8f9" stroke="#7A8450" strokeWidth="4" />
    <circle cx="100" cy="116" r="22" fill="#7A8450" opacity="0.85" />
    <circle cx="92" cy="108" r="6" fill="#F9CDD5" opacity="0.7" />
    <rect x="118" y="82" width="28" height="18" rx="4" fill="#7A8450" opacity="0.5" />
    <circle cx="52" cy="88" r="6" fill="#7A8450" />
    <path
      d="M36 164 L164 164"
      stroke="#7A8450"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.35"
    />
  </svg>
);

export default MenuCameraIcon;
