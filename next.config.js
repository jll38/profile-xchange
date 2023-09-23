/** @type {import('next').NextConfig} */
const nextConfig = {}
const withPWA = require('next-pwa');


module.exports = withPWA({
    pwa: {
      dest: 'public'
    }
  });