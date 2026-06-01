type MenuLetterIconProps = {
  className?: string;
};

/** Ikon amplop untuk menu Messages — SVG agar tidak terpotong seperti file PNG lama */
const MenuLetterIcon = ({ className }: MenuLetterIconProps) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    <rect x="28" y="72" width="144" height="96" rx="10" fill="#F9CDD5" stroke="#7A8450" strokeWidth="4" />
    <path
      d="M28 76 L100 128 L172 76"
      fill="#f0b8c2"
      stroke="#7A8450"
      strokeWidth="4"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <rect x="48" y="52" width="104" height="48" rx="6" fill="#fff8f9" stroke="#7A8450" strokeWidth="3" />
    <path
      d="M100 118 C100 118 68 96 68 78 C68 64 80 58 100 72 C120 58 132 64 132 78 C132 96 100 118 100 118 Z"
      fill="#7A8450"
    />
    <path
      d="M28 168 L172 168"
      stroke="#7A8450"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.35"
    />
  </svg>
);

export default MenuLetterIcon;
