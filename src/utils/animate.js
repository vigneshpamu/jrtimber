export const fadeIn = (direction, delay, duration) => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    opacity: {
      opacity: 0,
      scale: 0.85,
    },
    show: {
      y: 0,
      x: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: duration,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  }
}

export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
}

export const itemm = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
        type: 'spring',
        stiffness: 70,
      },
    }
  },
  // transition: { type: 'spring', stiffness: 100 },
}
