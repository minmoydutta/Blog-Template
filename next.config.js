const nextra = require('nextra').default

const withNextra = nextra({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx'
})

module.exports = withNextra()
