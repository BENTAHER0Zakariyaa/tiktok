module.exports = {
  mode : 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors : {
        'my-gray' : '#DEDEDE',
        'my-turqoise' : '#25F4EE',
        'my-red' : '#FE2C55',
      },
    },
  },
  plugins: [],
}
