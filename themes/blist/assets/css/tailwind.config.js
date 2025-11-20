const themeDir = __dirname + "/../../";

module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: [
      themeDir + "layouts/**/*.html",
      themeDir + "content/**/*.html",
      "layouts/**/*.html",
      "config.toml",
      "content/**/*.html",
      "assets/js/search.js",
      "exampleSite/layouts/**/*.html",
      "exampleSite/config.toml",
      "exampleSite/content/**/*.html",
    ],
  },
  darkMode: "class",
  theme: {
      extend: {
        backgroundColor: theme => ({
            'defaultColor': '#00aa47',
            'blue-600': '#007bff',
            'blue-700': '#0069d9',
            'blue-800': '#0056b3',
            'green-600': '#28a745',
            'green-700': '#218838',
            'green-800': '#1e7e34',
            'green-900': '#1c7430',
            'red-400': '#dc3545',
            'red-500': '#dc3545',
            'red-600': '#dc3545',
            'red-700': '#c82333',
            'yellow-400': '#ffc107',
            'yellow-500': '#ffca2c',
            'yellow-600': '#ffc107',
            'yellow-700': '#e0a800',
            'yellow-800': '#d39e00',
            'purple-400': '#6f42c1',
            'gray-400': '#343a40',
            'gray-500': '#6c757d',
            'gray-600': '#495057',
            'black': '#000000',
        }),
        typography: (theme) => ({
            DEFAULT: {
                css: [
                    {
                        'code::before': {
                            content: '""',
                        },
                        'code::after': {
                          content: '""',
                        },
                    }
                ]
            },
            dark: {
              css: [
                {
                  color: theme("colors.gray.400"),
                  '[class~="lead"]': {
                    color: theme("colors.gray.300"),
                  },
                  a: {
                    color: theme("colors.white"),
                  },
                  strong: {
                    color: theme("colors.white"),
                  },
                  "ol > li::before": {
                    color: theme("colors.gray.400"),
                  },
                  "ul > li::before": {
                    backgroundColor: theme("colors.gray.600"),
                  },
                  hr: {
                    borderColor: theme("colors.gray.200"),
                  },
                  blockquote: {
                    color: theme("colors.gray.200"),
                    borderLeftColor: theme("colors.gray.600"),
                  },
                  h1: {
                    color: theme("colors.white"),
                  },
                  h2: {
                    color: theme("colors.white"),
                  },
                  h3: {
                    color: theme("colors.white"),
                  },
                  h4: {
                    color: theme("colors.white"),
                  },
                  "figure figcaption": {
                    color: theme("colors.gray.400"),
                  },
                  code: {
                    color: theme("colors.white"),
                  },
                  "a code": {
                    color: theme("colors.white"),
                  },
                  'code::before': {
                    content: '""',
                  },
                  'code::after': {
                    content: '""',
                  },
                  pre: {
                    color: theme("colors.gray.200"),
                    backgroundColor: theme("colors.gray.800"),
                  },
                  thead: {
                    color: theme("colors.white"),
                    borderBottomColor: theme("colors.gray.400"),
                  },
                  "tbody tr": {
                    borderBottomColor: theme("colors.gray.600"),
                  },
                },
              ],
            },
        }),
    },
},
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
