/** @type {import('next').NextConfig} */
const explicitRepoName = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/^\/+|\/+$/g, "") ?? "";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const repoName = explicitRepoName || repositoryName;
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgPagesRepo = /\.github\.io$/i.test(repoName);
const basePath = isGitHubActions && repoName && !isUserOrOrgPagesRepo ? `/${repoName}` : "";

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
