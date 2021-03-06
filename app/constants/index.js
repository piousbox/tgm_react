import pkg from '../../package'

export const DEBUG = (process.env.NODE_ENV !== 'production')
export const DO_LOGOUT = 'do logout'

export const SET_GALLERY   = 'set gallery'
export const SET_GALLERIES = 'set galleries'

export const SET_REPORT  = 'set report'
export const SET_REPORTS = 'set reports'

export const SET_VENUE  = 'set venue'
export const SET_VENUES = 'set venues'

export const CONST = {
  city: 'const-city-took2long',
  cities: 'const-cities',
  cityMap: 'const-cityMap',

  eventMap: 'const-eventMap',
  eventShow: 'const-eventShow',

  galleryShow: 'const-galleryShow',

  news: 'const-news-2',

  venue: 'const-venue-5', // same as venueShow, this one is @deprecated
  venueShow: 'const-venue-5',
  venueMap: 'const-venueMap',
  venues: 'const-venues-3',

  worldMap: 'const-map-1',
}

export const SET = {
  cities: 'set-cities',
  city: 'set-city',

  event: 'set-event',

  featureCities: 'set-feature-cities',

  galleries: 'set-galleries-099',

  news: 'set-news',

  path: 'set-path-a@',
  profile: 'set-profile-90f',

  tags: 'set-tags-1q',
  tag: 'set-tag-5',

  venue: 'set-venue-0',
  venues: 'set-venues-6',
}
