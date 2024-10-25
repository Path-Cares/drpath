/** @type {import('next').NextConfig} */
const nextConfig = {
    // Add any specific settings you need here
    // You can customize TypeScript-specific settings in `tsconfig.json`
  
    typescript: {
      // Enable strict mode (optional, based on your tsconfig.json settings)
      ignoreBuildErrors: false,  // Change this to true if you want to ignore TypeScript errors during build
    },
  
    // This configuration will enable strict mode as set in tsconfig.json
    compilerOptions: {
      target: "ES6",
      module: "ESNext",
      jsx: "preserve",
      strict: true,
      esModuleInterop: true,
      skipLibCheck: true,
      moduleResolution: "node",
      forceConsistentCasingInFileNames: true,
    },
  };
  
  export default nextConfig;
  