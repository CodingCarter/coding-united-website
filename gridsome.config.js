const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/*.scss'),
      ],
    })
}

module.exports = {
  siteName: 'Coding United',
  siteUrl: 'https://codingunited.netlify.app',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './blog/posts/*.md',
        route: '/blog/:title'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        // exclude: ['/exclude-me'],
        config: {
          '/classes/': {
            changefreq: 'weekly',
            priority: .9
          },
          '/classes/**/': {
            changefreq: 'weekly',
            priority: 0.8
          },
          '/classes/**/*': {
            changefreq: 'weekly',
            priority: 0.7
          }
        }
      }
    }
  ],
  chainWebpack (config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
	}
}
