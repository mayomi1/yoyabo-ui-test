import { Variants } from "framer-motion";

export const section1Fadein: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  }
}

export const section2Wordpress: Variants = {
  initial: {
    x: 30,
  },
  animate: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
}

export const section4Text = {
  initial: {
    opacity: 0,
      x: 40,
      scale: 0,
  },
  animate: {
    type: "tween",
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 2.8
  }
}


export const section4DesignBox: Variants = {
  initial: {
    y: 30,
  },
  animate: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
}

export const yoyabaMainImgWrapper: Variants = {
  initial: {
    x: 30,
  },
  animate: {
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.8,
      type: "spring",
    },
  },
};

export const yoyabaMainImg: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: [30, 0, 30],
    transition: {
      duration: 1.6,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

export const stoneWrapper: Variants = {
  initial: {
    y: -800,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.4,

      type: "spring",
    },
  },
};
export const stone: Variants = {
  initial: {
    x: 0,
  },
  animate: (i: number) => ({
    x: [20, 0, 20],
    transition: {
      delay: 2,
      duration: 1 * i,
      ease: "linear",
      repeat: Infinity,
    },
  }),
};

export const leavesContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 3,
      staggerChildren: 0.2,
    },
  },
};
