import type { NextConfig } from "next";
import path from "path";

const { loadEnvConfig } = require("@next/env");
const projectDir = path.resolve(__dirname, "../..");
loadEnvConfig(projectDir);

const nextConfig: NextConfig = {
  reactCompiler: true,
};

export default nextConfig;
