
let TgmRouter = {
  galleriesShowPath: '/en/galleries/show/:galleryname',
  galleriesShowLink: (g) => { return `/en/galleries/show/${g}` },

  reportsShowPath: '/en/reports/show/:reportname',
  reportsShowLink: (g) => { return `/en/reports/show/${g}` },
}

export default TgmRouter
