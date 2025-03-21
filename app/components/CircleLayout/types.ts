export interface IconData {
  id: number;
  src: string;
  alt: string;
  href: string;
  darkSrc: string;
}

export interface IconProps {
  icon: IconData;
  angle: number;
  radius: number;
  iconSize: number;
  hoveredIcon: number | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}
