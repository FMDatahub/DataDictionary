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
        collapasble: true,
        items: [
          { text: 'Formål', link: '/Purposes/' },
          { text: 'Templates', link: '/Templates/' },
          { text: 'Attributer', link: '/Attributes/' },
          { text: 'Egenskabssæt', link: '/PropertySets/', items: [{ text: 'Egenskaber', link: '/Properties/'  }] },
          { text: 'MængdeSæt', link: '/QuantitySets/', items: [{ text: 'Mængder', link: '/Quantities/'  }] },
          { text: 'Værdilister', link: '/Enumerations/', items: [{ text: 'Værdier', link: '/Values/'  }] },
          { text: 'Opgaver', link: '/Tasks/' },
        ]
      }
    ],
  }
}









