"use client";
import React, { useState, useEffect } from "react";
import Icon from "@/app/components/CircleLayout/Icon";
import CentralImage from "@/app/components/CircleLayout/CentralImage";
import { icons } from "./data";

const CircleLayout: React.FC = () => {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const [radius, setRadius] = useState(200);
  const [iconSize, setIconSize] = useState(90);
  const [containerSize, setContainerSize] = useState(600);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius(120);
        setIconSize(50);
      } else {
        setRadius(200);
        setIconSize(80);
        setContainerSize(600);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="relative overflow-hidden"
        style={{ width: `${containerSize}px`, height: `${containerSize}px` }}
      >
        <CentralImage src="/sticker.webp" alt="Miksita" text="miksita" />
        <div
          className="absolute inset-0"
          style={{ transform: "translateX(-5px)" }}
        >
          {icons.map((icon, index) => {
            const angle = (360 / icons.length) * index;
            return (
              <Icon
                key={icon.id}
                icon={icon}
                angle={angle}
                radius={radius}
                iconSize={iconSize}
                hoveredIcon={hoveredIcon}
                onMouseEnter={() => setHoveredIcon(icon.id)}
                onMouseLeave={() => setHoveredIcon(null)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CircleLayout;
