/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  tabWidth: 2,
  trailingComma: "all",
  semi: false,
  astroAllowShorthand: false,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
