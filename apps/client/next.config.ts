import type { NextConfig } from "next";
import path from "path";

// Load environment variables from root monorepo
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { loadEnvConfig } = require("@next/env");
const projectDir = path.resolve(__dirname, "../..");
loadEnvConfig(projectDir);

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
