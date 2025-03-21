import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IconProps } from '@/app/components/CircleLayout/types';

const Icon: React.FC<IconProps> = ({
    icon,
    angle,
    radius,
    iconSize,
    hoveredIcon,
    onMouseEnter,
    onMouseLeave,
}) => {
    const [mobileIconSize, setMobileIconSize] = useState(iconSize);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setMobileIconSize(iconSize * 0.9);
            } else {
                setMobileIconSize(iconSize);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [iconSize]);

    return (
        <Link href={icon.href} passHref legacyBehavior>
            <a
                className="absolute w-18 h-18 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
                style={{
                    transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                    top: `calc(50% - ${mobileIconSize / 2}px)`,
                    left: `calc(50% - ${mobileIconSize / 2}px)`,
                    transformOrigin: 'center center',
                    scale: hoveredIcon === icon.id ? 1.1 : hoveredIcon !== null ? 0.8 : 1,
                    zIndex: hoveredIcon === icon.id ? 10 : 1,
                }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <img
                    src={icon.src}
                    alt={icon.alt}
                    className="block dark:hidden w-18 h-18 object-contain transition-all duration-300"
                    style={{ width: mobileIconSize, height: mobileIconSize }}
                />
                <img
                    src={icon.darkSrc}
                    alt={icon.alt}
                    className="hidden dark:block w-18 h-18 object-contain transition-all duration-300"
                    style={{ width: mobileIconSize, height: mobileIconSize }}
                />
            </a>
        </Link>
    );
};

export default Icon;