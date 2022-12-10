export const colors = {
  yellow: {
    light: "#ffffc9",
    normal: "#fffcb1",
    dark: "#ffff82",
  },
  green: {
    light: "#d4ffcb",
    normal: "#b1ffcb",
    dark: "#82ff82",
  },
  blue: {
    light: "#d4ffff",
    normal: "#82cfcf",
    dark: "#20b3b3",
  },
  red: {
    light: "#ffe0e0",
    normal: "#ffb1b1",
    dark: "#ff8282",
  },
  purple: {
    light: "#ffc9ff",
    normal: "#ffb1ff",
    dark: "#ff82ff",
  },
  orange: {
    light: "#ffddcf",
    normal: "#ffb18c",
    dark: "#ff8255",
  },
  pink: {
    light: "#ffb1c9",
    normal: "#ff8cb1",
    dark: "#ff5582",
  },
  brown: {
    light: "#e0c9c3",
    normal: "#c2a091",
    dark: "#ad8878",
  },
  gray: {
    light: "#dbdbdb",
    normal: "#ccc",
    dark: "#333",
  },
  white: {
    light: "#fff",
    normal: "#fff",
    dark: "#fff",
  },
  black: {
    light: "#000",
    normal: "#000",
    dark: "#000",
  },
};

export const defaultStickyColor = colors.white.normal;
export const defaultCategoryColor = colors.gray;

export const availableColors = Object.entries({
  yellow: colors.yellow,
  green: colors.green,
  blue: colors.blue,
  red: colors.red,
  purple: colors.purple,
  orange: colors.orange,
  pink: colors.pink,
  gray: colors.gray,
  white: colors.white,
});

export const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
  largeDesktop: "1440px",
};

export const shapes = {
  borderRadius: {
    small: "5px",
    medium: "10px",
    large: "20px",
  },
};
