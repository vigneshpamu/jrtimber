import React, { useRef, useEffect } from 'react'
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from 'framer-motion'

export function Button({
  borderRadius = '1.75rem',
  children,
  as: Component = 'button',
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}) {
  return (
    <Component
      className={`bg-transparent relative text-xl h-10 w-40 p-[1px] overflow-hidden ${containerClassName}`}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={`h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)] ${borderClassName}`}
          />
        </MovingBorder>
      </div>

      <div
        className={`relative bg-slate-900/[0.8] border-2 border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased ${className}`}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  )
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}) => {
  const pathRef = useRef()
  const progress = useMotionValue(0)

  useEffect(() => {
    const length = pathRef.current?.getTotalLength()
    if (length) {
      const pxPerMillisecond = length / duration
      useAnimationFrame((time) => {
        progress.set((time * pxPerMillisecond) % length)
      })
    }
  }, [duration, progress])

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  )
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  )

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <path
          fill="none"
          d={`M 0,${ry} Q 0,0 ${rx},0 H ${100 - rx} Q 100,0 100,${ry} V ${
            100 - ry
          } Q 100,100 ${100 - rx},100 H ${rx} Q 0,100 0,${100 - ry} Z`}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'inline-block',
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  )
}
