export default defineAppConfig({
  docus: {
    title: 'FalsisDB',
    description: 'Falsisdb; Türkçe, hızlı, güvenilir, kullanışlı, açık kaynak kodlu, event ve yedekleme destekli, json ve yaml database modülü. ',
    image: 'https://camo.githubusercontent.com/6b278576cfe70cc5668a2a8767890bd172eb822d1d5cd1a63e816af2d8a89f3d/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3737353832323534383531393631363536322f3938393832343631323639373236343137382f66616c73697364625f304445313138432e706e67',
    socials: {
      npm: {
        icon: 'file-icons:npm',
        href: 'https://www.npmjs.com/package/falsisdb'
      },
      github: 'falsisdb/falsisdb',
    },
    aside: {
      level: 1,
      exclude: [],
      collapsed: false
    },
    header: {
      logo: false,
      fluid: false,
      padded: true,
      showLinkIcon: true,
      exclude: [],
      title: 'Falsisdb'
    },
    main: {
      fluid: false,
      padded: true
    },
    footer: {
      iconLinks: [
        {
          href: 'https://falsis.ga',
          icon: 'mdi:web'
        }
      ]
    }
  }
})
