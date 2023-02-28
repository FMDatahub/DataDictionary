export default {
  title: 'Dataordbog',
  description: 'Just playing around.',
  srcDir: './',
  base: '/DataDictionary/',
  ignoreDeadLinks: true,
  themeConfig: {
    sidebar: [
      {
        text: 'Oversigt',
        items: [
          { text: 'Templates', link: '/Templates' },
          { text: 'Egenskaber', link: '/Properties' },
        ]
      }
    ],
  }
}