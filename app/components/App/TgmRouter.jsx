
let TgmRouter = {
  cityPath: '/en/cities/travel-to/:cityname',
  cityLink: (g) => { return `/en/cities/travel-to/${g}` },

  cityEventPath: '/en/cities/travel-to/:cityname/events/show/:eventname',
  cityEventLink: (g) => { return `/en/cities/travel-to/${g.cityname}/events/show/${g.eventname}` },

  cityVenuePath: '/en/cities/travel-to/:cityname/venues/show/:venuename',
  cityVenueLink: (g) => { return `/en/cities/travel-to/${g.cityname}/venues/show/${g.venuename}` },

  galleryPath: '/en/galleries/show/:galleryname',
  galleryLink: (g) => { return `/en/galleries/show/${g}` },

  galleryPhotoPath: '/en/galleries/show/:galleryname/:photoIdx',
  galleryPhotoLink: (g) => { return `/en/galleries/show/${g.galleryname}/${g.photoIdx}` },

  reportPath: '/en/reports/show/:reportname',
  reportLink: (g) => { return `/en/reports/show/${g}` },

  venuePath: '/en/venues/show/:venuename',
  venueLink: (g) => { return `/en/venues/show/${g}` },

  videoPath: '/en/videos/show/:youtube_id',
  videoLink: (g) => { return `/en/videos/show/${g}` },

}

export default TgmRouter
