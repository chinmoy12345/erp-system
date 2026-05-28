import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: false,   // ← allows build even with ESLint errors/warnings
  },
};

export default nextConfig;