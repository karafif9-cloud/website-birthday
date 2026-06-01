type MenuVideoIconProps = {
  className?: string;
};

const MenuVideoIcon = ({ className }: MenuVideoIconProps) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    <rect x="32" y="88" width="136" height="80" rx="10" fill="#F9CDD5" stroke="#7A8450" strokeWidth="4" />
    <path
      d="M32 88 L48 56 H152 L168 88 Z"
      fill="#f0b8c2"
      stroke="#7A8450"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <line x1="56" y1="56" x2="72" y2="88" stroke="#7A8450" strokeWidth="4" />
    <line x1="80" y1="56" x2="96" y2="88" stroke="#7A8450" strokeWidth="4" />
    <line x1="104" y1="56" x2="120" y2="88" stroke="#7A8450" strokeWidth="4" />
    <line x1="128" y1="56" x2="144" y2="88" stroke="#7A8450" strokeWidth="4" />
    <path d="M88 108 L88 148 L128 128 Z" fill="#7A8450" />
    <path
      d="M32 168 L168 168"
      stroke="#7A8450"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.35"
    />
  </svg>
);

export default MenuVideoIcon;
