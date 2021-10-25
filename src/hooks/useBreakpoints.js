import useMediaQuery from "./useMediaQuery";

const up = no => useMediaQuery(`(min-width: ${no}px)`);
const down = no => useMediaQuery(`(max-width: ${no - 1}px)`);

const breaks = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536
};

const useBreakpoints = () => {
  const breakpoints = {
    up: {
      xs: up(breaks.xs),
      sm: up(breaks.sm),
      md: up(breaks.md),
      lg: up(breaks.lg)
    },
    down: {
      sm: down(breaks.sm),
      md: down(breaks.md),
      lg: down(breaks.lg),
      xl: down(breaks.xl)
    }
  };
  return breakpoints;
};

export default useBreakpoints;
