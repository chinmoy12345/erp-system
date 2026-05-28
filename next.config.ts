import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,   // ← allows build even with ESLint errors/warnings
  },
};

export default nextConfig;