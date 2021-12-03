const defaultTheme = require("tailwindcss/defaultTheme");
const { join } = require("path");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`;
    }
    return `hsl(var(${variableName}))`;
  };
}

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  mode: "jit",
  purge: {
    enabled: isProduction,
    content: [join(__dirname, "src/**/*.{html,ts}")],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      // create custom fonts here
      fontFamily: {
        heading: "'Raleway', 'serif'",
        mono: ["'Open Sans'", ...defaultTheme.fontFamily.mono],
      },
      // create custom text colors here
      textColor: {
        fill: withOpacity("--text-fill"),
        muted: withOpacity("--text-muted"),
        danger: withOpacity("--text-danger"),
        inverted: withOpacity("--text-inverted"),
        accent: withOpacity("--text-accent"),
      },
      // create custom background colors here
      backgroundColor: {
        fill: withOpacity("--bg-fill"),
        accent: withOpacity("--bg-accent"),
        muted: withOpacity("--bg-muted"),
        footer: withOpacity("--bg-footer"),
        testimonials: withOpacity("--bg-testimonials"),
      },
      borderColor: {
        danger: withOpacity("--border-danger"),
        accent: withOpacity("--border-accent"),
      },
      // create custom gradient color here
      gradientColorStops: {
        cyan: withOpacity("--cyan"),
        blue: withOpacity("--blue"),
      },
    },
  },
  // custom variants
  variants: {
    extend: {
      // backgroundColor: ["active"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // require("@tailwindcss/line-clamp"),
    // require("@tailwindcss/aspect-ratio"),
  ],
};
