export default {
  title: 'Dataordbog',
  description: 'Just playing around.',
  srcDir: './',
  base: '/DataDictionary/',
  //cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    sidebar: [
      {
        text: 'Oversigt',
        items: [
          { text: 'Formål', link: '/Purposes/' },
          { text: 'Templates', link: '/Templates/' },
          { text: 'Attributer', link: '/Attributes/' },
          { text: 'Egenskaber', link: '/Properties/' },
          { text: 'Egenskabssæt', link: '/PropertySets/' },
          { text: 'Mængder', link: '/Quantities/' },
          { text: 'MængdeSæt', link: '/QuantitySets/' },
          { text: 'Værdilister', link: '/Enumerations/' },
          { text: 'Opgaver', link: '/Tasks/' },


        ]
      }
    ],
  }
}









