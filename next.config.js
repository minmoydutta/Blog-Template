const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')

const isProduction = process.env.NODE_ENV === 'production'
const repoName = 'Blog-Template'

module.exports = withNextra({
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: isProduction ? `/${repoName}` : '',
  assetPrefix: isProduction ? `/${repoName}/` : ''
})
