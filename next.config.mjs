/** @type {import('next').NextConfig} */
const explicitRepoName = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/^\/+|\/+$/g, "") ?? "";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const repoName = explicitRepoName || repositoryName;
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubActions && repoName ? `/${repoName}` : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
