/** @type {import('next').NextConfig} */
module.exports = {
  // other configurations
  output: "export",
  images: {
    unoptimized: true, // Disables the Image Optimization API
  },
};
