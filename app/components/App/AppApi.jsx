
import config from 'config'

let AppApi = {
  fbLogin:       `${config.apiUrl}/api/users/fb_sign_in`,
  profile:       `${config.apiUrl}/api/users/profile?domain=${config.domain}`,
  updateProfile: `${config.apiUrl}/api/users/profile/update`,

  buyStars:      `${config.apiUrl}/api/buyStars`,
}

export default AppApi
