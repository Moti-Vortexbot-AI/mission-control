/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    OBSIDIAN_VAULT_ROOT: process.env.OBSIDIAN_VAULT_ROOT || '/Users/openclaw111/.openclaw',
  }
}

module.exports = nextConfig
