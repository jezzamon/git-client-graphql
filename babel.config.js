const config = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: { version: '3.2', proposals: true },
        targets: '> 0.25%, not dead',
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/typescript',
  ],
  plugins: [],
};

module.exports = config;
