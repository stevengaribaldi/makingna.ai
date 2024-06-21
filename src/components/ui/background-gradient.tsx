'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundGradientProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
  colors?: {
    color1?: string;
    color2?: string;
    color3?: string;
    color4?: string;
  };
  backgroundSize?: string; // New prop for custom background size
}

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
  colors = {
    color1: '#18181b', // Dark gray
    color2: '#7b61ff', // Purple
    color3: '#ffc414', // Yellow
    color4: '#1ca0fb', // Blue
    // color5: "#141316",
  },
  backgroundSize = '400% 400%', // Default value for backgroundSize prop
}: BackgroundGradientProps) => {
  const variants = {
    initial: {
      backgroundPosition: '0 50%',
    },
    animate: {
      backgroundPosition: ['0 50%', '100% 50%', '0 50%'],
    },
  };

  const backgroundStyle = {
    backgroundImage: `radial-gradient(circle farthest-side at 0% 100%, ${colors.color1}, transparent), radial-gradient(circle farthest-side at 100% 0, ${colors.color2}, transparent), radial-gradient(circle farthest-side at 100% 100%, ${colors.color3}, transparent), radial-gradient(circle farthest-side at 0 0, ${colors.color4}, #141316)`,
    backgroundSize: animate ? backgroundSize : undefined, // Use the backgroundSize prop conditionally based on animate
  };

  return (
    <div className={`relative p-[4px] group ${containerClassName}`}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={backgroundStyle}
        className={`absolute inset-0 rounded-3xl z-[1]  group-hover:opacity-100   opacity-0 blur-lg transition duration-500 will-change-transform`}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={backgroundStyle}
        className="absolute inset-0 rounded-3xl z-[1] will-change-transform"
      />

      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
};
