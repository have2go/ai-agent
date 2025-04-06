/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "surface/accent": "linear-gradient(90deg, rgba(82,78,248,1) 0%, rgba(151,71,255,1) 100%);",
            },
            colors: {
                "stroke/base": "#ECECEC",
                "surface/base/primary": "#FDFDFD",
                "text-and-icons/secondary": "#9594A7",
                "text-and-icons/base": "#393939"
            },
            screens: {
                "2XL": { max: "1600px" },
                // => @media (max-width: 1536px) { ... }

                "2xl": { min: "1601px" },
                // => @media (max-width: 1536px) { ... }

                "1.5XL": { max: "1400px" },
                // => @media (max-width: 1400px) { ... }
                "1.5xl": { min: "1401px" },

                // => @media (max-width: 1400px) { ... }
                XL: { max: "1280px" },
                xl: { min: "1281px" },
                // => @media (max-width: 1280px) { ... }
                "1200max": { max: "1200px" },
                "1201min": { min: "1201px" },
                // => @media (max-width: 1400px) { ... }
                LG: { max: "1024px" },
                // => @media (max-width: 1024px) { ... }

                "lg-min": { min: "1071px" },

                MD: { max: "768px" },
                // => @media (max-width: 768px) { ... }
                md: { min: "768px" },
                // => @media (max-width: 768px) { ... }
                "1.5SM": { max: "520px" },
                // => @media (max-width: 480px) { ... }
                "1.5sm": { min: "520px" },
                SM: { max: "480px" },
                // => @media (max-width: 480px) { ... }

                XSM: { max: "410px" },
                // => @media (max-width: 480px) { ... }

                XXSM: { max: "380px" },
                // => @media (max-width: 480px) { ... }
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
