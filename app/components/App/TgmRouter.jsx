
let TgmRouter = {
  rootPath: '/en/sites/show/travel-guide.mobi',

  citiesPath: '/:lang(en|ru|pt|es)/cities',
  citiesLink: () => { return '/en/cities' },

  cityPath: '/:lang(en|ru|pt|es)/cities/travel-to/:cityname',
  cityLink: (g) => {
    if (typeof g === 'string') {
      return `/en/cities/travel-to/${g}`
    } else if (typeof g === 'object' ){
      return `/en/cities/travel-to/${g.cityname}`
    } else {
      console.log('no city passed to cityLink!')
      return null
    }
  },

  cityEventPath: '/:lang(en|ru|pt|es)/cities/travel-to/:cityname/events/show/:eventname',
  cityEventLink: (g, gg) => { 
    if (arguments.length === 1) {
      return `/en/cities/travel-to/${g.cityname}/events/show/${g.eventname}` 
    } else {
      return `/en/cities/travel-to/${g}/events/show/${gg}`
    }
  },

  cityGalleryPath: '/:lang(en|ru|pt|es)/cities/travel-to/:cityname/galleries/view/:galleryname',
  cityGalleryLink: (g={}, gg=null) => {
    return `/en/cities/travel-to/${g.cityname}/galleries/view/${g.galleryname}`    
  },
  cityGalleriesPath: '/:lang(en|ru|pt|es)/cities/travel-to/:cityname/galleries',
  cityGalleriesLink: (g) => { 
    if ('string' === typeof g) {
      return `/en/cities/travel-to/${g}/galleries`
    } else if ('object' === typeof g) {
      return `/en/cities/travel-to/${g.cityname}/galleries`
    }
  },

  cityUsersPath: '/:lang(en|ru|pt|es)/cities/travel-to/:cityname/people',
  cityUsersLink: (g) => {
    return `/en/cities/travel-to/${g.cityname}/people`
  },

  cityVenuesPath: '/:lang(en|ru|pt|es)/cities/travel-to/:cityname/venues',
  cityVenuesLink: (g) => {
    return `/en/cities/travel-to/${g.cityname}/venues`
  },
  cityVenuePath: '/:lang(en|ru|pt|es)/cities/travel-to/:cityname/venues/show/:venuename',
  cityVenueLink: (g, gg) => {
    let gStr, ggStr
    if (arguments.length === 1) {
      return `/en/cities/travel-to/${g.cityname}/venues/show/${g.venuename}`
    } else {
      if (typeof g === 'string') { 
        gStr = g
      } else {
        gStr = g.cityname
      }
      if (typeof gg === 'string') {
        ggStr = gg
      } else {
        ggStr = gg.name_seo
      }
      return `/en/cities/travel-to/${gStr}/venues/show/${ggStr}`
    }
  },

  cityReportsPath: "/:lang(en|ru|pt|es)/cities/travel-to/:cityname/reports",
  cityReportsLink: (g) => { 
    if ('string' === typeof g) {
      return `/en/cities/travel-to/${g}/reports`
    } else if ('object' === typeof g) {
      return `/en/cities/travel-to/${g.cityname}/reports`
    }
  },

  cityWrapperPath: "/:lang(en|ru|pt|es)/cities/travel-to",

  galleriesPath: '/:lang(en|ru|pt|es)/galleries',
  galleriesLink: '/en/galleries',
  galleryPath: '/:lang(en|ru|pt|es)/galleries/show/:galleryname',
  galleryLink: (g) => { 
    if (typeof g === 'string') {
      return `/en/galleries/show/${g}`
    } else if (typeof g === 'object') {
      return `/en/galleries/show/${g.galleryname}`
    }
  },
  galleryPhotoPath: '/:lang(en|ru|pt|es)/galleries/show/:galleryname/:photoIdx',
  galleryPhotoLink: (g, i) => {
    if ('string' === typeof g) {
      return `/en/galleries/show/${g}/${i||0}`
    } else if ('object' === typeof g) {
      return `/en/galleries/show/${g.galleryname}/${g.photoIdx||0}`
    }
  },

  reportPath: '/:lang(en|ru|pt|es)/reports/show/:reportname',
  reportLink: (g) => { 
    if (typeof g === 'string') {
      return `/en/reports/show/${g}`
    } else if (typeof g === 'object') {
      let lang = g.lang ? g.lang : 'en'
      return `/${lang}/reports/show/${g.reportname}`
    }
  },
  reportsPath: '/:lang(en|ru|pt|es)/reports',
  reportsLink: '/en/reports',
  
  sitePath: '/:lang(en|ru|es|pt)/sites/show',
  siteLink: (g) => {
    if (typeof g === 'string') {
      return `/${g}/sites/show`
    } else if (typeof g === 'object') {
      return `/${g.lang}/sites/show`
    }
  },
           
  tagPath: '/:lang(en|ru|pt|es)/tags/show/:tagname',
  tagLink: (g) => {
    if (typeof g === 'string') {
      return `/en/tags/show/${g}`
    } else if (typeof g === 'object') {
      let lang = g.lang ? g.lang : 'en'
      return `/${lang}/tags/show/${g.tagname}`
    }
  },
  tagsPath: '/:lang(en|ru|pt|es)/tags',
  tagsLink: () => { return '/en/tags' },
  tgm2Path: 'tgm2', // @obsolete @deprecated

  venuePath: '/:lang(en|ru|pt|es)/venues/show/:venuename',
  venueLink: (g) => { return `/en/venues/show/${g}` },

  videoPath: '/:lang(en|ru|pt|es)/videos/show/:youtube_id',
  videoLink: (g) => { return `/en/videos/show/${g}` },

}

export default TgmRouter
