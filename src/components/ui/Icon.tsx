
import * as React from "react";
import { icons } from "lucide-react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof icons;
  fallback?: keyof typeof icons;
  size?: number;
  color?: string;
}

const Icon = ({ name, fallback = "CircleAlert", size = 24, color, ...props }: IconProps) => {
  const LucideIcon = icons[name] || icons[fallback];

  return <LucideIcon size={size} color={color} {...props} />;
};

export default Icon;
