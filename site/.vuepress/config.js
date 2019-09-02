module.exports = {
  title: 'KubenKoder',
  description: ' ',
  dest: 'public',
  plugins: ['@vuepress/nprogress'],
  serviceWorker: false,
  head: [
    ['link', { rel: "icon", href: '/psyduck.png' }]
  ],
  themeConfig: {
    logo: "/psyduck.png",
    nav: [
      {text: 'Home', link: '/'},
      {text: 'GitHub', link: 'https://github.com/KubenKoder'}
    ],
    sidebarDepth: 2,
    lastUpdated: 'Last Updated'
  },
  repo: 'KubenKoder/web',
  repoLabel: 'Contribute',
  docsDir: 'docs',
  docsBranch: 'master',
  editLinks: true,
  editLinkText: 'Spotted an error? Help us improve!'
}