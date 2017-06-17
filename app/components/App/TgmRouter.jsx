
let TgmRouter = {
  citiesShowPath: '/en/cities/travel-to/:galleryname',
  citiesShowLink: (g) => { return `/en/cities/travel-to/${g}` },

  galleriesShowPath: '/en/galleries/show/:galleryname',
  galleriesShowLink: (g) => { return `/en/galleries/show/${g}` },

  reportsShowPath: '/en/reports/show/:reportname',
  reportsShowLink: (g) => { return `/en/reports/show/${g}` },

  venuesShowPath: '/en/venues/show/:reportname',
  venuesShowLink: (g) => { return `/en/venues/show/${g}` },

}

export default TgmRouter
