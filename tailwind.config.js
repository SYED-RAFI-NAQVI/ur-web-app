module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#121212",
        gray: "#A1A1AA",
      },
      keyframes: {
        "gradient-animation": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
        "gradient-border": {
          "0%": {
            "border-image-source":
              "linear-gradient(to right, #99d98c, #3D6BD2, #33b5c7)",
          },
          "50%": {
            "border-image-source":
              "linear-gradient(to right, #33b5c7, #99d98c, #3D6BD2)",
          },
          "100%": {
            "border-image-source":
              "linear-gradient(to right, #99d98c, #3D6BD2, #33b5c7)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "gradient-animation": "gradient-animation 10s ease infinite",
        "gradient-border": "gradient-border 3s ease infinite",
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
};
