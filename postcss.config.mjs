import postcssPresetEnv from "postcss-preset-env";

export default {
  plugins: [
    postcssPresetEnv({
      stage: 3,
      features: {
        "trigonometric-functions": true,
        "logical-properties-and-values": false,
      },
    }),
  ],
};
